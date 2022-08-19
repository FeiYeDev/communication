import React from "react";
import { connect} from 'react-redux';
import './index.css';
import {Button,Message} from 'antd';
import BandwidthRtc from "@bandwidth/webrtc-browser";
import * as rrweb from 'rrweb';
import rrwebPlayer from 'rrweb-player';
import "rrweb-player/dist/style.css";
import MultiStreamsMixer from 'multistreamsmixer';

import {
  connectionInfo,
  dialOut,
  dialOutToGather,
  endCall,
  getParticipant,
  quitSession,
  resetSession
} from '../../api/bandwidth.js'
const bandwidthRtc = new BandwidthRtc();
class PrivateChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareButton:'Share Screen',
      apiMessage:'',
      events:'',
      visible: false,
      screenVisible:false,
      my_screen_stream:null,
      remoteRtcStreams:{},
      captureStream:null,
      screenStream:null,
      mediaRecorder:null,
      chunks:[],
      screenEndpointList:[],
      allUrl:"",
      recordUrl:"",
      localUrl:"",
      videoItems:[],
      participant:null,
      token: "",
    };
    this.getConnectInfo = this.getConnectInfo.bind(this);
    this.recordVideo = this.recordVideo.bind(this);
    this.shareScreen = this.shareScreen.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.endRecord = this.endRecord.bind(this);
    this.dialOutToGather = this.dialOutToGather.bind(this);
    this.viewRecord = this.viewRecord.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", (event) => {
      bandwidthRtc.onStreamAvailable((rtcStream) => {
        this.mediaStatus = "receiving audio/video streams";
        console.log("receiving audio/video streams!");
        console.log(rtcStream);
        try{
          console.log("rtcStream.alias:"+rtcStream.alias)
          console.log(rtcStream.alias != "screenshare")

          if (rtcStream.alias != "screenshare") {
            if(document.getElementById(rtcStream.endpointId)) return;
            let item = {};
            item[rtcStream.endpointId] = rtcStream;
            // this.remoteRtcStreams[rtcStream.endpointId] = rtcStream;
            let div =  document.createElement("div");
            div.className = "video-item";
            div.id = "div_" + rtcStream.endpointId;

            let streamName = document.createElement("p");
            streamName.appendChild(document.createTextNode("media " + rtcStream.participantId));

            let mediaEl = document.createElement("video");
            mediaEl.id = rtcStream.endpointId;
            mediaEl.className = "video-item-video";
            mediaEl.autoplay = true;
            mediaEl.playsInline = true;
            mediaEl.srcObject = rtcStream.mediaStream;

            div.appendChild(streamName);
            div.appendChild(mediaEl);
            console.log(1111111111,div);
            document.getElementById("videoList").appendChild(div);
            }else{
              const shareScreen = document.getElementById("shareScreen");
              // let div =  document.createElement("div");
              // div.innerHTML = 'is new set'
              // shareScreen.appendChild('div')
              shareScreen.srcObject = rtcStream.mediaStream;
              this.setState({screenEndpointList:[...this.state.screenEndpointList,rtcStream.endpointId]});
              this.setState({screenVisible: true});

            }
            Message.info("participant:" + rtcStream.participantId +" add to the chat")
            // Message({
            //   message: "participant:" + rtcStream.participantId +" add to the chat",
            //   type: 'info',
            //   duration: 3 * 1000
            // });
            console.log(this.state.remoteRtcStreams);
      }catch(error){
              console.log(`Error setting up video:`)
              console.log(error)
            Message.error("Error setting up video:" + error)
            // Message({
            //     message: "Error setting up video:" + error,
            //     type: 'error',
            //     duration: 3 * 1000
            //   });
          }
        // audio.pause();

        // console.log(rtcStream);
        // tracks = rtcStream.mediaStream.getAudioTracks();
      });
      // when we lose the stream
      bandwidthRtc.onStreamUnavailable((endpointId) => {
        this.mediaStatus = "no longer receiving audio/video streams - endpointId["+endpointId+"]";
        console.log("no longer receiving audio/video streams");

        if(this.state.screenEndpointList.indexOf(endpointId) > -1){
              this.setState({screenVisible: false});
        }

        if(!document.getElementById(endpointId)) return;
        document.getElementById("div_" + endpointId).remove();

        Message.info("participant:" + this.state.remoteRtcStreams[endpointId].participantId +" quit to the chat")
        // Message({
        //   message: "participant:" + this.remoteRtcStreams[endpointId].participantId +" quit to the chat",
        //   type: 'warning',
        //   duration: 3 * 1000
        // });
        Reflect.deleteProperty(this.state.remoteRtcStreams,endpointId)
    });
    });
  }

  getConnectInfo() {
    connectionInfo().then(response => {
      this.setState({apiMessage:JSON.stringify(response)});
      if (response.token) {
        this.setState({visible:true});
        this.voiceApplicationPhoneNumber = response.voiceApplicationPhoneNumber;
        this.setState({token: response.token});
        this.setState({participant: response.participant});
        this.startStreaming(response.token);
      }
    })
  }

  async startStreaming(token) {
    console.log("connecting to BAND WebRTC server");
    // Connect to Bandwidth WebRTC
    this.mediaStatus = "connecting to BAND WebRTC server";
    await bandwidthRtc.connect({
      deviceToken: token
    });
    console.log("connected to bandwidth webrtc!");
    this.status = "Online";
    this.mediaStatus = "connected to bandwidth webrtc!";
    this.recordVideo();



    // Publish the browser's microphone
    await bandwidthRtc.publish({
      audio: true,
      video: true,
    }).then((pulish) => {
        /* 使用这个stream stream */
        document.getElementById("myVideo").srcObject = pulish.mediaStream;
        this.state.remoteRtcStreams['myVideo'] = pulish
      }).catch((error)=>{
        // alert("Please make sure your camera and microphone are opened" + error);
      });



    console.log("browser mic is streaming");
    this.mediaStatus = "browser mic is streaming";


    // update ui status & enable the next step
    // setActive();
    // enableButton("callButton");
  }

  recordVideo(){

    const stopFn = new rrweb.record({
      emit(event) {
        // 保存获取到的 event 数据，event里面是序列号后的DOM和鼠标事件等
        this.setState([...event]);
        // events.push(event);
      }
    });
    console.log("Recording start...");

  }

  async shareScreen(){
    if(this.state.shareButton === "Share Screen"){
      let screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      });
      this.setState({screenStream:screenStream});
      console.log("screenStream:");
      console.log(screenStream);
      var my_screen_stream = await bandwidthRtc.publish(screenStream,
        undefined,
        "screenshare");
        this.setState({my_screen_stream: my_screen_stream});
      document.getElementById("myVideo").srcObject = my_screen_stream.mediaStream;
      let newRemoteRtcStreams = {...this.state.remoteRtcStreams};
      newRemoteRtcStreams.share = my_screen_stream;
      this.setState({remoteRtcStreams: newRemoteRtcStreams});
      // shareScreen
      // document.getElementById("shareScreen").srcObject = this.my_screen_stream.mediaStream;
      // this.screenVisible = true;
      this.setState({shareScreen: "Stop Share"});
      console.log("screen stream:");
      console.log(my_screen_stream);
    }else{
      await bandwidthRtc.unpublish(my_screen_stream.endpointId);

      // stop the tracks locally
      var tracks = my_screen_stream.mediaStream.getTracks();
      tracks.forEach(function (track) {
        console.log(`stopping stream`);
        console.log(track);
        track.stop();
      });
      this.setState({screenVisible: false});
      this.setState({shareScreen: "Share Screen"});
    }

  }

  getMapList(map){
    let array = []
        for(let key in map) {
          let obj = map[key]
          obj.id = key
          array.push(obj)
        }
        return array
  }

  mediaRecorderStop(){
    console.log(this.state.chunk);
    const blob = new Blob([this.state.chunk], {
      type: this.state.chunk.type,
    });
    const url = URL.createObjectURL(blob);

    const video = document.querySelector('video');
    video.src = url;

    // 视频下载
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video.webm';
    a.click();

    URL.revokeObjectURL(blob);
    this.setState({allUrl: url})
  }

  async startRecord(){
    let tracks = [];
    let array = this.getMapList(this.state.remoteRtcStreams);
    let streams = [];
    for(let i=0;i<array.length;i++){
      tracks = tracks.concat(array[i].mediaStream.getTracks());
      streams.push(array[i].mediaStream);
    }
    console.log('remote',streams,array,this.state.remoteRtcStreams);
    console.log(tracks);

    let mixer = new MultiStreamsMixer(streams);
    mixer.frameInterval = 1;
    mixer.startDrawingFrames();
    let captureStream = mixer.getMixedStream();
    this.setState({captureStream:captureStream});
    let allStream =this.state.screenStream;

    // this.captureStream = new MediaStream(tracks);

    console.log("captureStream:",captureStream);
    console.log(captureStream);
    let mediaRecorder=new MediaRecorder(captureStream,{mimeType:"video/webm; codecs=vp9"});

    this.setState({mediaRecorder:mediaRecorder});

    console.log(mediaRecorder);
    console.log(this.state.mediaRecorder);
    mediaRecorder.ondataavailable = (e)=> {
      this.setState({
        chunk: e.data
      })
    };
    mediaRecorder.onstop = ()=>{
      this.mediaRecorderStop()
    };

    // 开始记录
    mediaRecorder.start();
  }

  endRecord(){
    if(null == this.state.mediaRecorder){
      alert("There is no record start. Please make sure you have clicked the Start Record button.");
      return;
    }
    var tracks = this.state.captureStream.getTracks();
    tracks.forEach(function (track) {
      console.log(`stopping stream`);
      console.log(track);
      track.stop();
    });
    this.state.mediaRecorder.stop();
  }
  
  viewLocalRecord(){
    // if(!this.localUrl||"" == this.localUrl){
    //   alert("There is no Record local. Please make sure your camera and microphone are opend.");
    //   return;
    // }
    this.setState({recordVisible:true});
    this.setState({recordUrl:this.state.localUrl});
  }
  
  dialOutToGather(){
    if(!this.statusCheck()){
      return;
    }
      dialOutToGather(this.dialOutNumber).then(response => {
      this.status = "Online - IN Call(Gather)";
      this.callId = response.callId;
      this.apiMessage = JSON.stringify(response);
      console.log(this.apiMessage);
    })
  }
  
  mediaLocalRecorderStop(){
    const blob = new Blob(this.chunks, {
      type: this.chunks[0].type,
    });
    const url = URL.createObjectURL(blob);
    this.setState({localUrl:url});
  }
  
  viewRecord(){
    if("" == this.state.allUrl){
      alert("There is no Record.");
      return;
    }
    this.setState({recordVisible:true});
    this.setState({recordUrl:this.state.allUrl});
    // document.getElementById("recordDiaVideo").play();
  }

  renderInner() {
    return (
      <div className="chat-contenner">
        <div className="buttonList">
          <Button onClick={this.getConnectInfo} type="primary">Get Online</Button>
          <Button onClick={this.shareScreen} type="primary">{this.state.shareButton}</Button>
          <Button type="primary">Check Track</Button>
        </div>
        <div className="buttonList">
          <Button onClick={this.startRecord} type="primary">Start Record</Button>
          <Button onClick={this.endRecord} type="primary">Stop Record</Button>
          <Button onClick={this.viewRecord} type="primary">View Record</Button>
        </div>
        <div id="videoSaveId">
          <div className={`video ${!this.state.visible ? 'hide' : null}`} id="videoList" >
            <div className="video-item">
              <p>my media</p>
              <video id="myVideo" className="video-item-video" playsInline autoPlay muted></video>
            </div>
          </div>
          <div className={`share video ${!this.state.screenVisible ? 'hide' : null}`}>
            <div className="video-item"><p>Screen</p>
            <video id="shareScreen" className="video-item-screen" playsInline autoPlay width="100%"></video></div>
          </div>
        </div>
        <div className={`buttonList ${!this.state.visible ? 'hide' : null}`}>
          <Button type="primary">List Participant</Button>
          <Button type="primary">Quit Chat</Button>
          <Button type="primary">End All Online Chat</Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.props.showTab === 'RtcChat' ?
      this.renderInner() :
      null
    )
  }
}

function mapStateToProps(state) { 
  return {
    showTab:state.showTab,
  }
}

export default connect(mapStateToProps)(PrivateChatView);


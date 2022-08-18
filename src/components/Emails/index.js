import React from 'react';
import { connect} from 'react-redux';
import styles from './index';
class VideoDemo extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            recorder: null,
            stream: null,
            chunk: null,
            chunkURL: null,
            tag:1,
        }
        this.recorder = null

    }

    renderChat() {
        return (
            <div>
                {/* 这个video标签录制时看到实时画面使用 */}
                <video src="" ref='video' className={styles.video}></video>
                <button onClick={this.clickCamera.bind(this)}>open camera</button>
                <button onClick={this.clickStart.bind(this)}>video</button>
                <button onClick={this.clickEnd.bind(this)}>stop</button>
                {
                    this.state.chunkURL ? <a href={this.state.chunkURL} download='test.webm'>点击下载</a> : ''
                }
                {/* 这个video标签是录制完后把录制之后的数据处理为二进制流后进行展示使用 */}
                <video src={this.state.chunkURL} className={styles.video} ref='newvideo'></video>
            </div>
        )
    }

    render() {
        return (
            this.props.showTab === 'E-mails' ?
            this.renderChat() :
            null
        )
    }

    init(value) {
        // get Audio info
        var streamAudio;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        }).then((stream) => {
            streamAudio = stream;
          }).catch((err) => {
              console.error(err);
          })};

          if (navigator.mediaDevices && navigator.mediaDevices[value]) {
            navigator.mediaDevices[value]({
              video: true,
              audio: true
          }).then((stream) => {
              // merge audio stream to video stream
              streamAudio.getAudioTracks().forEach(track=>{
                  stream.addTrack(track);
              });
              this.recorder = new window.MediaRecorder(stream);
              this.setState({
              stream: stream
              })
              this.onPreview(stream)
              this.onStart()
              this.bindEvents()
            }).catch((err) => {
                console.error(err);
            })
        } else {
            alert('不支持这个特性');
        }
    }

    clickCamera() {
        this.init('getUserMedia')
    }

    // record bind callBack
    bindEvents() {
        this.recorder.ondataavailable = (e) => {
            this.setState({
                chunk: e.data
            })
        }
        this.recorder.onstop = () => {
            let blob = new Blob([this.state.chunk], { type: 'video/webm' })
            let videoStream = URL.createObjectURL(blob);
            this.setState({ chunkURL: videoStream })
            setTimeout(()=>{
                console.log(this.state.chunkURL);
            },5000)
            this.refs.newvideo.play()
        }
    }
    // click start
    clickStart() {
        this.init('getDisplayMedia')
        
    }
    onPreview(value) {
        this.refs.video.srcObject = value
        this.refs.video.muted = true
        this.refs.video.play();
    }
    onStart() {
        this.recorder.start();
    }
    clickEnd() {
        // close camera
        this.state.stream.getTracks().forEach(function(track) {

            track.stop();
          
          });
        this.recorder.stop()
        // close share screen
        this.refs.video.pause()
        this.refs.video.srcObject = null
    }
}

function mapStateToProps(state) { 
  return {
    showTab:state.showTab,
  }
}

export default connect(mapStateToProps)(VideoDemo);
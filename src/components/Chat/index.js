import React from "react";
import { connect} from 'react-redux';
import {ChatList} from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import {Row, Col} from "antd";
import ChatWidget  from "./components/ChatWidget";
import './index.css';

class PrivateChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      clickUser: null,
    }
  }

  componentDidMount() {
    let list = [];
    for (let i = 0; i < 3; ++i)
      list.push({
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        alt: 'Reactjs',
        title: 'User' + i,
        subtitle: 'What are you doing?',
        date: new Date(),
        unread: Math.floor(Math.random() * 10),
      });
    this.setState({userList: list});
    this.setState({clickUser: list[0]});
  }

  renderChat() {
    return (
      <div className="chat-content" >
        <Row>
          <Col style={{
              width: '30%',
              height: 600,
              display: 'inline-block',
              border: "1px solid",
              overflow:"auto"
          }}>
              <ChatList
                className='chat-list'
                onClick={e => this.setState({clickUser: e})}
                dataSource={this.state.userList}
              />
          </Col>
          {this.state.userList.length === 0 ? <div>No private message</div> : <ChatWidget user={this.state.clickUser}/>}

        </Row>
      </div>
    );
  }

  render() {
    return (
      this.props.showTab === 'Chat' ?
      this.renderChat() :
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


import React, {createRef} from "react";
import {MessageList} from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import {Button, Row, Col, Input} from "antd";
import ProductMsg from './ProductMsg';

const {TextArea} = Input;

class ChatWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            msgDataList: [],
            sendMsg: "",
        }
        this.clickButton = this.clickButton.bind(this);
        this.messagesEnd = createRef();
    }

    componentDidMount() {
        let list = [];
        for (let i = 0; i < 50; ++i)
            list.push({
                position: 'left',
                type: 'text',
                text: 'hello' + i,
                date: new Date(),
            });
        this.setState({msgDataList: list});
        this.setState({user: this.props.user});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({user: nextProps.user});
    }

    clickButton() {
        let list = this.state.msgDataList;
        list.push({
            position: 'right',
            type: 'text',
            text: this.state.sendMsg,
            date: new Date(),
        })
        this.setState({msgDataList: list});
        this.setState({sendMsg: ""});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.messagesEnd.scrollTop = this.messagesEnd.scrollHeight;
    }

    render() {
        return (
            <Col style={{
                width: '70%',
                height: 600,
                display: 'flex',
                borderRight: "1px solid",
                borderTop: "1px solid",
                borderBottom: "1px solid",
                flexDirection:'column',
                justifyContent:'space-between'
            }}>
                <Row>
                    <Col style={{
                        width: '100%',
                        height: 40,
                        textAlign: "center",
                        verticalAlign: "middle",
                        fontSize: 20
                    }}>
                        {this.state.user == null ? "" : this.state.user.title}
                    </Col>
                </Row>
                <Row>
                    <div style={{
                        width: '100%',
                        height: 420,
                        textAlign: "center",
                        verticalAlign: "middle",
                        fontSize: 20,
                        overflow: "auto",
                        backgroundColor: 'rgba(64,169,255,.1)'
                    }}
                         ref={(el) => {
                             this.messagesEnd = el;
                         }}
                    >
                        <ProductMsg />
                        <MessageList
                            className='message-list'
                            dataSource={this.state.msgDataList}
                        />
                    </div>
                </Row>

                <Row>
                    <Col style={{
                        width: '100%',
                        textAlign: "center",
                        verticalAlign: "middle",
                        fontSize: 20,
                        display: 'flex',
                        alignItems: 'end'
                    }}>

                        <TextArea autoSize rows={4} onChange={e => {
                            this.setState({sendMsg: e.target.value});
                        }}
                                  ref={el => (this.inputRef = el)}
                                  value={this.state.sendMsg}/>
                        <Button type="primary" onClick={this.clickButton}>Send</Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default ChatWidget;


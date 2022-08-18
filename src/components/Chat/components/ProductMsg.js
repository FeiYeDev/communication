import React from "react";
import {Card} from "antd";
import './style.css';

class ChatWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
          <Card
            className="product-Cards"
            // title='productMsg'
          >
            <p>Card: content</p>
            <p>Card1: content</p>
            <p>Card2: content</p>
          </Card>
        );
    }
}

export default ChatWidget;


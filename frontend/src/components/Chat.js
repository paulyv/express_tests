import React, { Component } from "react";
import io from "socket.io-client";
import logo from "./logo.svg";
import "./Chat.scss";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import moment from "moment";
import AppContext from '../AppContext';

const uuid = require('uuid');
const socket = io("http://192.168.1.173:8080");


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], newMessage: "" };

  }

  componentDidMount() {
    let _this = this;
    socket.on('chat message', function(msg){
      console.log(msg.msg);
      console.log(_this.state.messages);
      let messages = _this.state.messages;
      messages.push(msg);
      _this.setState({messages: messages});
    });
  }


  handleAdd = () => {
  let newDate = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let newId = uuid.v1();
  let newMessage = {id: newId, type: "normal", msg: this.state.newMessage, timestamp: newDate};
  this.setState({newMessage: ""});
  socket.emit('chat message', newMessage);
};


handleInputChange = e => {
  this.setState({ newMessage: e.target.value });
};

  render() {
    const messages = this.state.messages.map((item, key) =>
        <div key={item.id} className="message">{item.msg}</div>
    );

    return (
      <>
        <div className="wrapper">
          <div className="messagesWrapper">
            <div className="messages">
              {messages}
            </div>
          </div>
        </div>
        <div className="messagingWrapper">
          <InputBase
            className="inputbox"
            inputProps={{ "aria-label": "naked" }}
            value={this.state.newMessage}
            onChange={this.handleInputChange}
          />
          <div className="button">
            <Fab color="default" aria-label="send" size="small" onClick={e => this.handleAdd(e)}>
              <SendIcon style={{ fontSize: "100%" }} />
            </Fab>
          </div>
        </div>
      </>
    );
  }
}

export default Chat;

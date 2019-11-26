import React, { Component } from "react";
import io from "socket.io-client";
import logo from "./logo.svg";
import "./Chat.scss";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import moment from "moment";
const uuid = require('uuid');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], newMessage:"" };
    const socket = io("http://localhost:8080");
  }

  handleAdd = () => {
  let newDate = moment(new Date()).format("DD/MM/YYYY");
  let newId = uuid.v1();
  let newMessage = {id: newId, type: "normal", msg: this.state.newMessage, timestamp: newDate};
  this.state.messages.push(newMessage);
  this.setState({newMessage: ""});
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

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
import { animateScroll } from "react-scroll";

const uuid = require('uuid');
const socket = io("http://192.168.1.173:8080");

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], newMessage: "", availableUsers: []};
  }


  componentDidMount() {
    let _this = this;

    /** Tell the server which room to connect **/
    let roomData = {room: this.props.room, username: this.props.username};

    socket.emit('room', roomData);

    /** A message coming from the socket **/
    socket.on('chat message', function(msg){
      console.log(msg.msg);
      console.log(_this.state.messages);
      let messages = _this.state.messages;
      messages.push(msg);
      _this.setState({messages: messages});
    });

    socket.on('userlist', function(msg){
      console.log(msg);
      _this.setState({availableUsers: msg});
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
}

scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "msg-wrapper"
    });
}


  handleAdd = () => {
  let newDate = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let newId = uuid.v1();
  let newMessage = {id: newId, type: "normal", msg: this.state.newMessage, timestamp: newDate, room: this.props.room, username: this.props.username};
  this.setState({newMessage: ""});
  socket.emit('chat message', newMessage);
};


handleInputChange = e => {
  this.setState({ newMessage: e.target.value });
};

  render() {
    const messages = this.state.messages.map((item, key) => {
        return this.props.username == item.username ?
        <><div className="divider">&nbsp;</div><div key={item.id} className="msg-own"><div className="msg-user"></div>{item.msg}<div className="msg-timestamp">{moment(item.timestamp).format('HH:mm')}</div> </div></>
        :
        <><div className="divider">&nbsp;</div><div key={item.id} className="msg-other"><div className="msg-user">{item.username}: <br /></div> {item.msg} <br /> <div className="msg-timestamp">{moment(item.timestamp).format('HH:mm')}</div> </div></>
    }
  );

  const availableUsers = this.state.availableUsers.map((item, key) => {
      return <div key={item.id} className="userlist-item">{item.username}</div>
  }
);

    return (
      <>
      <div className="bg-stripe"></div>
      <div className="bg-rest"></div>

      <div className="chat-wrapper">
        <div className="top-bar-left">Online:</div>
        <div className="top-bar-right">#{this.props.room}</div>
        <div className="leftBar">
          {availableUsers}
        </div>

        <div className="main">
            <div id="msg-wrapper" className="msg-wrapper">
              {messages}
            </div>
        </div>

        <div className="footer">
          <div className="footer-relative">
            <div className="footer-wrapper">

              <InputBase
                className="input-box"
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
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Chat;

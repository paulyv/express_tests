import React, { Component } from "react";
import io from "socket.io-client";
import logo from "./logo.svg";
import "./App.scss";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], users: "" };
    const socket = io("http://localhost:8080");
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="messagesWrapper">
            <div className="messages">
              <div className="message">message eka </div>
              <div className="message">message 2 </div>
              <div className="message">message 3 </div>
              <div className="message">message 4 </div>
              <div className="message">message 5 </div>
              <div className="message">message 6 </div>

              <div className="message">message 1 </div>
              <div className="message">message 2 </div>
              <div className="message">message 3 </div>
              <div className="message">message 4 </div>
              <div className="message">message 5 </div>
              <div className="message">message 6 </div>

              <div className="message">message 1 </div>
              <div className="message">message 2 </div>
              <div className="message">message 3 </div>
              <div className="message">message 4 </div>
              <div className="message">message 5 </div>
              <div className="message">message vika </div>
            </div>
          </div>
        </div>
        <div className="messagingWrapper">
          <InputBase
            className="inputbox"
            inputProps={{ "aria-label": "naked" }}
          />
          <div className="button">
            <Fab color="default" aria-label="send" size="small">
              <SendIcon style={{ fontSize: "100%" }} />
            </Fab>
          </div>
        </div>
      </>
    );
  }
}

export default App;

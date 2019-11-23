import React from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.scss';
import Fab from "@material-ui/core/Fab";
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

function App() {
  const socket = io('http://localhost:8080');
  return (
      <div className="wrapper">
        <div className="messagesWrapper">
          <div className="messages">
            <div className="message">Nightyyyy &lt;3 &lt;3 &lt;3 </div>
          </div>
        </div>
        <div className="messagingWrapper">
        <InputBase className="inputbox" inputProps={{ 'aria-label': 'naked' }}/>
          <div className="button">
            <Fab color="default" aria-label="send" size="small">
              <SendIcon  style={{fontSize: "100%"}}/>
            </Fab>
          </div>
        </div>
      </div>
  );
}

export default App;

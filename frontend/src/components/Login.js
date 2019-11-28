import React, { Component } from "react";
import AppContext from '../AppContext';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import "./Login.scss";

  class Login extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return (
    <>
      <div classname="page-wrapper">
        <div className="login-wrapper">
          <div className="chat-room-wrapper">
            <TextField
                    id="standard-full-width"
                    placeholder="Room"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
            </div>
            <div className="usernamer-wrapper">
            <TextField
                    id="standard-full-width"
                    placeholder="Username"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
            </div>
            <div className="join-btn-wrapper">
              <Button variant="outlined" color="primary">
                Join
              </Button>
            </div>
        </div>
      </div>
    </>
    );
  }
}

export default Login;

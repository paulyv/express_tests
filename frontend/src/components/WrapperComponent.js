import React, { Component } from "react";
import Chat from "./Chat";
import Login from "./Login";
import AppContext from '../AppContext';

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
      <AppContext.Consumer>
        {(context) => {
          if(context.values.username == '') {
            return <Login setUsername={context.setUsername} setRoom={context.setRoom}/>
          }
            return <Chat username={context.values.username} room={context.values.room} />
        }}

        </AppContext.Consumer>

      </>
    );
  }
}

export default WrapperComponent;

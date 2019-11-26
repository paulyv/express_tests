import React, { Component } from "react";
import Chat from "./Chat";
import Login from "./Login";

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Logging = () => {
      let isLogged = true;
      if (isLogged) {
        return <Chat />;
      } else {
        return <Login />;
      }
    };
    return (
      <>
        <Logging />
      </>
    );
  }
}

export default WrapperComponent;

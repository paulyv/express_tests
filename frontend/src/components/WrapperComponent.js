import React, { Component } from "react";
import App from "./App";
import Login from "./Login";

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Logging = () => {
      let isLogged = true;
      if (isLogged) {
        return <App />;
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

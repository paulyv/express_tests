import AppContext from './AppContext';
import React, {Component} from 'react';


class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {username: "", username: "", room: ""};
  }



render() {

  return(
    <AppContext.Provider value={{
      values: this.state,
      setUsername: (username) => this.setState({username: username}),
      setRoom: (room) => this.setState({room: room})
    }}>
      {this.props.children}
     </AppContext.Provider>
   );
    }
}
  export default AppContextProvider

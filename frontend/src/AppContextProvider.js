import AppContext from './AppContext';
import React, {Component} from 'react';


class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {username: ""};
  }



render() {

  return(
    <AppContext.Provider value={{
      values: this.state,
      setUsername: (username) => this.setState({username: username})
    }}>
      {this.props.children}
     </AppContext.Provider>
   );
    }
}
  export default AppContextProvider

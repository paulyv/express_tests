import AppContext from './AppContext';
import React, {Component} from 'react';


class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {AppTitle: 'Title of the app'};
  }

render() {

  return(
    <AppContext.Provider value={{values: this.state}}>
      {this.props.children}
     </AppContext.Provider>
   );
    }
}
  export default AppContextProvider

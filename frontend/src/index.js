import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrapperComponent from './components/WrapperComponent';
import AppContextProvider from './AppContextProvider'

ReactDOM.render(<AppContextProvider><WrapperComponent /></AppContextProvider>, document.getElementById('root'));

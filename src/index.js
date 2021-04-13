import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
// import { NameContextComponent } from './NameContext.js';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Bio from './Bio.js'


//PROVIDER
// -> state
// -> dispatch function

ReactDOM.render(
        <App count={3} />
        
        , document.getElementById('root'));
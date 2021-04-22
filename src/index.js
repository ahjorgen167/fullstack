import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import About from './About.js';
import './index.css';
import Register from './Register.js'
// import { NameContextComponent } from './NameContext.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login.js';
// import Bio from './Bio.js'


//PROVIDER
// -> state
// -> dispatch function

ReactDOM.render(
        
        <Router>

        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>          
          <Route exact path="/friends">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      
    </Router>
        
        , document.getElementById('root'));
import React, { Component } from 'react';
import './App.css';

// Importing components
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login';
import User from "./components/User";
import Repositories from "./components/Repositories/Repositories";
import Repository from "./components/Repository";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Background } from './components/styled';

//TODO: Reroute to login if not logged in

class App extends Component {
  render() {
    return (
      <Background>
        <div>
          <Navbar/>
          <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/user' component={User} />
              <Route exact path='/repositories/:pageNumber' component={Repositories} />
              <Route exact path='/repository/:user/:repo' component={Repository} />
            </Switch>
          </Router>
        </div>
      </Background>
    );
  }
}

export default App;

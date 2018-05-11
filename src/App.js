import React, { Component } from 'react';
import './App.css';

// Importing components
import NavBar from './components/Navbar/Navbar';
import Login from './components/Login';
import User from "./components/User";
import Repositories from "./components/Repositories";

import { Switch,Route } from 'react-router-dom';

//TODO: Reroute to login if not logged in

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
            <Route exact path='/login' component={Login} />

            <Route exact path='/user' component={User} />
            <Route exact path='/repositories' component={Repositories}/>
        </Switch>
      </div>
    );
  }
}

export default App;

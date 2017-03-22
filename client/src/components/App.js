import React, { Component } from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

import logo from '../allpoints_star_t.png';
import '../App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Signal App</h2>
            <Nav />
          </div>
          <div>
          {this.props.children}
          </div>
        </div>
    );
  }
}

export default App;

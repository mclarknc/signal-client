import React, { Component } from 'react';
import { Link } from 'react-router';

import DeviceCount from './DeviceCountWithData';

import logo from '../allpoints_star_t.png';
import '../App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Signal App</h2>
          </div>
          <div>
            <DeviceCount />
          </div>
          <ul role="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/devicelist?cursor=1000&limit=40">Device List</Link></li>
          </ul>
        </div>
    );
  }
}

export default App;

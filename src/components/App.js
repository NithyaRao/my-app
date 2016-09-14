import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React MyAPP </h2>
        </div>
        <Hello />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到我的react世界</h1>
        </header>
        <p className="App-intro">
          开始正文
        </p>
      </div>
    );
  }
}

export default App;

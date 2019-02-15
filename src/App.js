import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className = "title"> My Simple TODO App </h3>
        <Form />
      </div>
    );
  }
}

export default App;

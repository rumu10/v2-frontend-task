import React, { Component } from 'react'
import HomePage from './HomePage/homepage.component';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    )
  }
}

export default App


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pokedex from './Pokedex.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Pokedex />
        
      </div>
      
    );
  }
}



import React, { Component } from 'react';
import './App.css';
import Topnav from './components/Topnav.js';
import Feedback from './components/Feedback.js';
import Gameform from './components/Gameform.js';
import GuessList from './components/GuessList.js';


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
       
        <Gameform></Gameform>
        <GuessList></GuessList>

      </div>
    );
  }
}

export default App;

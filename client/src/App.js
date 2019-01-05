import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './components/layout/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className="App-body">
          <h1>So you want to play a game?</h1>
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;
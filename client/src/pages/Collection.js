import React, { Component } from 'react';
import '../App.css';
import Games from '../components/Games';

class Collection extends Component {

  render() {
    return (
        <div className="App-body">
            <h1>All of the Games</h1>
            <Games />
        </div>
    );
  }
}

export default Collection;
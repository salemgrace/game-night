import React, { Component } from 'react';
import '../App.css';
import Games from '../components/Games';

class Collection extends Component {

  render() {
    return (
        <div className="App-body">
            <h1>All the Games in our Collection</h1>
            <Games />
        </div>
    );
  }
}

export default Collection;
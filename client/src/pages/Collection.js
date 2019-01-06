import React, { Component } from 'react';
import '../App.css';
import Games from '../components/Games';

class Collection extends Component {

  render() {
    return (
        <div className="App-body">
            <h2>In our Collection</h2>
            <Games />
        </div>
    );
  }
}

export default Collection;
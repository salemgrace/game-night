import React, { Component } from 'react';
import '../App.css';
import Games from '../components/Games';

class Collection extends Component {

  render() {
    return (
      <div className="App-body">
        <h1>All of the Games</h1>
          <div className="list-group">
            <a href="/collection" className="list-group-item list-group-item-action active">
              All Games
            </a>
            <a href="/shelf" className="list-group-item list-group-item-action">View By Owner</a>
            <a href="/players" className="list-group-item list-group-item-action">View by Number of Players</a>
          </div>
        <Games />
      </div>
    );
  }
}

export default Collection;
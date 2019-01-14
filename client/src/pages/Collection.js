import React, { Component } from 'react';
import '../App.css';
import Games from '../components/Games';
import Input from "./Input";

class Collection extends Component {

  render() {
    return (
        <div className="App-body">
            <h1>All of the Games</h1>
            <Games />
            <Input />
        </div>
    );
  }
}

export default Collection;
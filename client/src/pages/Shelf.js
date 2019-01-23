import React, { Component } from "react";
import "../App.css";
import Owners from "../components/Owners";

class Shelf extends Component {

  render() {
    return (
        <div className="App-body">
            <h1>Owner Shelves</h1>
            <Owners />
        </div>
    );
  }
}

export default Shelf;
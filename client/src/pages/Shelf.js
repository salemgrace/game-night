import React, { Component } from "react";
import "../App.css";
import Input from "./Input";
import Owners from "../components/Owners";

class Shelf extends Component {

  render() {
    return (
        <div className="App-body">
            <h1>Individual Shelves</h1>
            <Owners />
            <Input />
        </div>
    );
  }
}

export default Shelf;
import React, { Component } from "react";
import "../App.css";
import Input from "./Input";
import Owners from "../components/Owners";
// import stack from "../stack-01.png";

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
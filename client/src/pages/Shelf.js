import React, { Component } from "react";
import "../App.css";
import Input from "./Input";
import stack from "../stack-01.png";

class Shelf extends Component {

  render() {
    return (
        <div className="App-body">
          <h1>Individual Shelves</h1>
            <div className="container">
              <div className="row">
                <div className="col sub-shelf">
                  <img src={stack} alt="stack" />
                </div>
                <div className="col sub-shelf">
                <img src={stack} alt="stack" />
                </div>
              </div>
              <div className="row">
                <div className="col sub-shelf">
                <img src={stack} alt="stack" />
                </div>
                <div className="col sub-shelf">
                <img src={stack} alt="stack" />
                </div>
              </div>
            </div>
            <Input />
        </div>
    );
  }
}

export default Shelf;
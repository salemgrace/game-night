import React, { Component } from "react";
import "../App.css";

class Shelf extends Component {

  render() {
    return (
        <div className="App-body">
          <h1>Individual Shelves</h1>
            <div className="container">
              <div className="row">
                <div className="col sub-shelf">
                  <button type="button" className="btn btn-success btn-lg">Hannah's Shelf</button>
                </div>
                <div className="col sub-shelf">
                  <button type="button" className="btn btn-success btn-lg">Malini's Shelf</button>              
                </div>
              </div>
              <div className="row">
                <div className="col sub-shelf">
                  <button type="button" className="btn btn-success btn-lg">Salem's Shelf</button>
                </div>
                <div className="col sub-shelf">
                  <button type="button" className="btn btn-success btn-lg">Xander's Shelf</button>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Shelf;
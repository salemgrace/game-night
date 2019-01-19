import React, { Component } from "react";
import "../App.css";

class Home extends Component {

  render() {
    return (
      <div className="App-body">
        <h1>So you want to play a game?</h1>
          <div className="card">
            <div className="card-header">
              <h3>Let's get started...</h3>
            </div>
            <div className="card-body">
            <div className="form-group row">
              <div className="col-sm-10">
                <label htmlFor="formGroupExampleInput">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
              <label htmlFor="formGroupExampleInput">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
            </div>
            <button type="button" className="btn btn-secondary">Submit</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
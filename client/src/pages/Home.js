import React, { Component } from "react";
import "../App.css";

class Home extends Component {

  render() {
    return (
      <div className="App-body">
        <div className="sub-shelf about-padding">
          <h1>So you want to play a game?</h1>
        </div>
          {/* <div className="card">
              <h4 className="card-header">Let's get started...</h4>
            <div className="card-body">
              <div className="form-group row">
                <h5><label htmlFor="formGroupExampleInput" className="col-form-label">Email</label></h5>
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group row">
                <h5><label htmlFor="formGroupExampleInput" className="col-form-label">Password</label></h5>
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group row">
            <button type="button" className="btn btn-secondary">Submit</button>
            </div>
            </div>
          </div> */}
        </div>
    );
  }
}

export default Home;
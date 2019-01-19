import React, { Component } from "react";
import "../App.css";

class Home extends Component {

  render() {
    return (
      <div className="App-body">
        <h1>So you want to play a game?</h1>
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Home;
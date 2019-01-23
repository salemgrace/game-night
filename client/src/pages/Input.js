import React, { Component } from "react";
import "../App.css";

class Input extends Component {

    render() {
        return (
            <div className="sub-shelf">
                <h4>New Game to Add</h4>
                <form>
                    {/* <div className="form-group">
                        <label htmlFor="nameInput">Your Name</label>
                        <input type="text" className="form-control" />
                    </div> */}
                    <div className="form-group">
                        <h5><label htmlFor="exampleFormControlTextarea1">Title of Game</label></h5>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <h5><label htmlFor="numPlayersInput">Select Min Number of Players</label></h5>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;
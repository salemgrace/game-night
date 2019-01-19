import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class GamesByOwner extends Component {
    state = {
        owner: {},
        games: []
    };

    componentDidMount() {
        API.getOwner(this.props.match.params.id)
            .then(res => this.setState({ owner: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App-body">
                <h1>
                    {this.state.owner.name}
                </h1>
                
                <Link to="/collection">
                    <button type="button" className="btn btn-secondary">Back to All Games</button>
                </Link>
            </div>
        );
    }
}

export default GamesByOwner;
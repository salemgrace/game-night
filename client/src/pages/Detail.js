import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Detail extends Component {
    state = {
        game: {},
        owner: {}
    };

    componentDidMount() {
        API.getGame(this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({ game: res.data, owner: res.data.owner })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App-body">
                <h1>
                    {this.state.game.title}
                </h1>
                <h3>
                    Needs at least {this.state.game.minPlayers} Players
                </h3>
                <h3>
                    Owned by: {this.state.owner.name}
                </h3>
                <Link to="/collection">
                    <button type="button" className="btn btn-secondary">Back to All Games</button>
                </Link>
            </div>
        );
    }
}

export default Detail;
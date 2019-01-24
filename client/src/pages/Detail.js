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
                <div className="card">
                    <h3 className="card-header">
                        {this.state.game.title}
                    </h3>
                    <div className="card-body">
                        <h6 className="list-group-item">Needs at least {this.state.game.minPlayers} Players</h6>
                        <h6 className="list-group-item">Owned by: {this.state.owner.name}</h6>
                        <Link to="/collection">
                            <button type="button" className="btn btn-secondary">Back to All Games</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
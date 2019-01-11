import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
    state = {
        game: {}
    };

    componentDidMount() {
        API.getGame(this.props.match.params.id)
            .then(res => this.setState({ game: res.data }))
            // .then(console.log("what's in game?" + game))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.game.name}
                </h1>
                <h3>
                    {this.state.game.minPlayers}
                </h3>
            </div>
        );
    }
}

export default Detail;
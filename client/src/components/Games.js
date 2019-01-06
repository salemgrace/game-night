import React, { Component } from 'react';
import API from '../utils/API';

class Games extends Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.loadGames();
    }

    loadGames = () => {
        API.getGames()
            .then(res => this.setState({ games: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h3>Here are my games:</h3>
                    {this.state.games.map(game => (
                        <ul>{game.name} owned by {game.owner}</ul>
                    ))}
            </div>
        );
    }
}

export default Games;
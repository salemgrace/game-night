import React, { Component } from 'react';
import API from '../utils/API';
// import { Link } from "react-router-dom";
import { List, ListItem } from "../components/layout/List";

class Games extends Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.loadGames();
    }

    loadGames = () => {
        console.log("getting API request");
        API.getGames()
            .then(res => {
                console.log("RES: ", res.data)
                this.setState({ games: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h3>Here are all the games:</h3>
                <List>
                    {this.state.games.map(game => (
                        <ListItem key={game._id}>
                                {game.name} owned by {game.owner}
                        </ListItem>
                    ))}
                </List>
                    {/* <h3>No Results to Display</h3> */}
            </div>
        );
    }
}

export default Games;
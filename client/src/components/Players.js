import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/layout/List";
import Wrapper from "../components/layout/Wrapper"

class Players extends Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.loadGames();
    }

    loadGames = () => {
        console.log("getting games API request");
        API.getGames()
            .then(res => {
                console.log("games res: ", res.data)
                this.setState({ games: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App-body">
            <Wrapper>
            {this.state.games.length ? (
                <List>
                    {this.state.games.map(game => (
                        <ListItem key={game.minPlayer}>
                            <Link to={"/players/" + game.minPlayer}>
                                {game.title}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}
            </Wrapper>
            <Link to="/players">
                <button type="button" className="btn btn-secondary">Back to Games by Number of Players</button>
            </Link>

            </div>

        );
    }
}

export default Players;
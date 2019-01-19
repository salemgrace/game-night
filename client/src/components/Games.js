import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/layout/List";
import Wrapper from "../components/layout/Wrapper"

class Games extends Component {
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
            <Wrapper>
            {this.state.games.length ? (
                <List>
                    {this.state.games.map(game => (
                        <ListItem key={game._id}>
                            <Link to={"/games/" + game._id}>
                                {game.title}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}
            </Wrapper>
        );
    }
}

export default Games;
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Wrapper from "../components/layout/Wrapper";
import { List, ListItem } from "../components/layout/List";

class GamesByOwner extends Component {
    state = {
        owner: {},
        games: []
    };

    componentDidMount() {
        this.loadGames();
    }

    loadGames = () => {
        API.getOwner(this.props.match.params.id)
            .then(res => {
                console.log("individual owner: " + res )
                console.log("owner's games: ")
                this.setState({ owner: res.data, games: res })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App-body">
                <h1>
                    {this.state.owner.name}'s Games
                </h1>
                <Wrapper>
                    {this.state.games.length ? (
                        <List>
                            {this.state.games.map(game => (
                                <ListItem key={game._id}>
                                    {game.title}
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Wrapper>
                <Link to="/collection">
                    <button type="button" className="btn btn-secondary">Back to All Games</button>
                </Link>
            </div>
        );
    }
}

export default GamesByOwner;
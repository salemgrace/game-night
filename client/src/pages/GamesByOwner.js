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
                console.log("individual owner: " + res.data.name )
                console.log("owner's games: " + res.data.games)
                this.setState({ owner: res.data, games: res.data.games })
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
                <Link to="/shelf">
                    <button type="button" className="btn btn-secondary">Back to Owners by Shelf</button>
                </Link>
                <div className="sub-shelf">
                    <div className="card">
                        <h4 className="card-header">Add a game to {this.state.owner.name}'s Shelf</h4>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <h6><label htmlFor="inputTitle" className="col-form-label">Title of Game</label></h6>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group row">
                                    <h6><label htmlFor="numPlayersInput">Select Min Number of Players</label></h6>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                                <div className="form-group row">
                                    <h6><label htmlFor="numPlayersInput">Select Max Number of Players</label></h6>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>
                                <div className="form-group row">
                                    <button type="button" className="btn btn-secondary">Add Game</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GamesByOwner;
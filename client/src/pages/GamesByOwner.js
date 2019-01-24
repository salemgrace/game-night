import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Wrapper from "../components/layout/Wrapper";
import { List, ListItem } from "../components/layout/List";
import { Input, DropDown, FormBtn } from "../components/layout/Form";

class GamesByOwner extends Component {
    state = {
        owner: {},
        games: [],
        title: "",
        minPlayers: ""
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.minPlayers) {
            API.saveGame({
                title: this.state.title,
                minPlayers: this.state.minPlayers
            })
                .then(res => {
                    console.log("in handle form submit: ", res);
                    this.loadGames()
                })
                .catch(err => console.log(err));
        }
    };

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
                                <Input 
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                />
                                <DropDown
                                    value={this.state.minPlayers}
                                    onChange={this.handleInputChange}
                                    name="minplayers"
                                />
                                <FormBtn
                                    disabled={!(this.state.title)}
                                    onClick={this.handleFormSubmit}
                                >
                                Add Game
                                </FormBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GamesByOwner;
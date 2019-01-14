import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/layout/List";


class Detail extends Component {
    state = {
        game: {}
    };

    componentDidMount() {
        API.getGame(this.props.match.params.id)
            .then(res => this.setState({ game: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App-body">
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
            ) :(
                <h3>No Results to Display</h3>
            )}
                <Link to="/collection">
                    <button type="button" className="btn btn-success">Back to All Owners</button>
                </Link>
            </div>
        );
    }
}

export default Detail;
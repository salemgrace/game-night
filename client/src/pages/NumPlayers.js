import React, { Component } from "react";
import "../App.css";
// import Wrapper from "../components/layout/Wrapper";
// import OwnerCard from "../components/layout/OwnerCard";
import { Link } from "react-router-dom";
// import { ListItem } from "../components/layout/List";
// import Players from "../components/Players";
import API from "../utils/API";

class NumPlayers extends Component {
    state = {
        games: [],
        minPlayers: ""
    };

    loadGames = () => {
        console.log("getting games API request");
        API.getPlayers()
            .then(res => {
                console.log("games res: ", res.data)
                this.setState({ games: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App-body">
                <div className="sub-shelf about-padding">
                    <h1>Find Games by Number of Players</h1>
                </div>
                <div className="sub-shelf">
                    <Link to={"/players/1"}>
                        <button type="button" className="number-button btn btn-secondary">1</button>
                    </Link>
                    <Link to={"/players/2"}>
                        <button type="button" className="number-button btn btn-secondary">2</button>
                    </Link>
                    <Link to={"/players/3"}>
                        <button type="button" className="number-button btn btn-secondary">3</button>
                    </Link>
                </div>
                <div className="sub-shelf">
                    <Link to={"/players/4"}>
                        <button type="button" className="number-button btn btn-secondary">4</button>
                    </Link>
                    <Link to={"/players/5"}>
                        <button type="button" className="number-button btn btn-secondary">5</button>
                    </Link>
                    <Link to={"/players/6"}>
                        <button type="button" className="number-button btn btn-secondary">6</button>
                    </Link>
                </div>
                {/* <Players /> */}
            </div>
        );
      }
    }

export default NumPlayers;
import React, { Component } from "react";
import GameCard from "../components/layout/GameCard";
import Wrapper from "../components/layout/Wrapper";
import "../App.css";
import Input from "./Input";
import API from "../utils/API";
import stack from "../stack-01.png";

class Shelf extends Component {

state = {
  games: []
};

componentsDidMount() {
  this.loadGames();
}

loadGames = () => {
  API.getGames()
    .then(res => {
      this.setState({ games: res.data })
    })
    .catch(err => console.log(err));
};

  render() {
    return (
      <div className="App-body">
        <h1>Individual Shelves</h1>
          <div className="row">
            <img src={stack} alt="stack" />
            <img src={stack} alt="stack" />
          </div>
          <div className="row">
            <img src={stack} alt="stack" />
            <img src={stack} alt="stack" />
          </div>
          {/* {this.state.games.length ? (
            <Wrapper>
              {this.state.games.map(game => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  owner={game.owner}
                  image={stack}
                />
              ))}
            </Wrapper>
          ) : (
            <h3>No Results to Display</h3>
        )} */}
        <Input />
        </div>
    );
  }
}

export default Shelf;
import React, { Component } from "react";
import API from "../utils/API";
import OwnerCard from "../components/layout/OwnerCard";
import Wrapper from "../components/layout/Wrapper";
import { Link } from "react-router-dom";
import "../App.css";

class Owners extends Component {
  state = {
    owners: []
  };

  componentDidMount() {
    this.loadOwners();
  }
      
  loadOwners = () => {
    console.log("hitting owners API?");
      API.getOwners()
        .then(res => {
          console.log("owners res: " + res.data);
          this.setState({ owners: res.data })
        })
          .catch(err => console.log(err));
  };
      
  render() {
    return (
      <Wrapper>
        {this.state.owners.map(owner => (
          <OwnerCard
            id={owner._id}
            key={owner._id}
            owner={owner.name}
          >
            <Link to={"/owners/" + owner._id}>
              {owner.name}
            </Link>
          </OwnerCard>
        ))}
      </Wrapper>
    );
  }
}
export default Owners;
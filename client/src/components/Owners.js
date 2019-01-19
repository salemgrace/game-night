import React, { Component } from "react";
import API from "../utils/API";
import OwnerCard from "../components/layout/OwnerCard";
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
              <div className="section">
                    {this.state.owners.map(owner => (
                      <OwnerCard
                        key={owner._id}
                        owner={owner.name}
                      >
                        {owner.name}
                      </OwnerCard>
                    ))}
                    </div>
          );
        }
      }
export default Owners;
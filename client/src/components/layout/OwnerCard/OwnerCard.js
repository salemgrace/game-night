import React from 'react';
import "./OwnerCard.css";
import stack from "../../../images/stack-01.svg";

const OwnerCard = props => (
    <div className="card owner-background">
        <div className="img-container">
            <img alt={props.name} src={stack} />
        </div>
        <div classame="content">
            <h4 className="owner-text">{props.owner}</h4>
        </div>
    </div>
);

export default OwnerCard;
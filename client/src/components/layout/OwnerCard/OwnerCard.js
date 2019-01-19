import React from 'react';
import "./OwnerCard.css";
import stack from "../../../stack-01.png";

const OwnerCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={stack} />
        </div>
        <div classame="content">
            <ul>
                Name: {props.owner}
            </ul>
        </div>
    </div>
);

export default OwnerCard;
import React from 'react';
import "./OwnerCard.css";
import stack from "../../../stack-01.png";

const OwnerCard = props => (
    <div className="card owner-background">
        <div className="img-container">
            <img alt={props.name} src={stack} />
        </div>
        <div classame="content">
                {props.owner}
        </div>
    </div>
);

export default OwnerCard;
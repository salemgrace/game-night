import React, { Component } from 'react';
import '../App.css';
import ReactImage from '../1000px-React-icon.svg.png';
import MongoImage from '../mongodb-logo.png';
import MultiLogo from "../html-js-css-logos.png";
import Node from "../nodejs-new-pantone-white.png";
import Bootstrap from "../bootstrap-logo.png";

class About extends Component {

  render() {
    return (
        <div className="App-body">
            <div className="sub-shelf about-padding">
              <h1>GAME NIGHT is built with a little help from...</h1>
            </div>
            <div className="sub-shelf">
              <img className="node-image" src={Node} alt="Node" />
              <img className="react-image" src={ReactImage} alt="React" />
              <img className="mongo-image" src={MongoImage} alt="MongoDB" />
            </div>
            <div className="sub-shelf">
              <img className="bootstrap-image" src={Bootstrap} alt="Bootstrap" />
              <img className="multi-image" src={MultiLogo} alt="Multi" />
            </div>
        </div>
    );
  }
}

export default About;
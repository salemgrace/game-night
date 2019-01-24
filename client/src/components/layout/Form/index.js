import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group row">
      <h6><label htmlFor="inputTitle" className="col-form-label">Title of Game</label></h6>
      <input type="text" className="form-control" {...props} />
    </div>
  );
}

export function DropDown(props) {
  return (
    <div className="form-group row">
      <h6><label htmlFor="numPlayersInput">Select Min Number of Players</label></h6>
      <select className="form-control" {...props}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="form-group row">
      <button {...props} className="btn btn-secondary">
        {props.children}
      </button>
    </div>
  );
}
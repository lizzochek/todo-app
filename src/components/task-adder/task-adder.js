import React from "react";

import "./task-adder.css";

export default class TaskAdder extends React.Component {
  state = {
    label: "",
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.label);

    const input = document.querySelector("#input");
    input.value = "";
  };

  render() {
    return (
      <form className="task-adder d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          id="input"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
        ></input>
        <button className="btn btn-outline-secondary">Add Task</button>
      </form>
    );
  }
}

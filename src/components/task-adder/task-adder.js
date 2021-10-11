import React from "react";

import "./task-adder.css";

export default class TaskAdder extends React.Component {
  render() {
    return (
      <div className="task-adder">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onAdd("Hello")}
        >
          Add Task
        </button>
      </div>
    );
  }
}

import React from "react";

import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  //Class field
  //Helps save right this when sent to the Event Listener
  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) classNames += " done";

    if (important) classNames += " important";

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" onClick={onDeleted} />
        </button>
      </span>
    );
  }
}

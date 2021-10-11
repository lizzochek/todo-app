import React from "react";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TaskAdder from "../task-adder/task-adder";

import "./app.css";

export default class App extends React.Component {
  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem("Drink coffee"),
      this.createToDoItem("Make an app"),
      this.createToDoItem("Have a lunch"),
    ],
  };

  createToDoItem = (label) => {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newData,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createToDoItem(text);

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];

      return {
        todoData: newData,
      };
    });
  };

  onToggleImportant = (id) => {
    console.log("Toggle important " + id);
  };

  onToggleDone = (id) => {
    console.log("Toggle done " + id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <TaskAdder onAdd={this.addItem} />
      </div>
    );
  }
}

import React from "react";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TaskAdder from "../task-adder/task-adder";

import "./app.css";

export default class App extends React.Component {
  maxId = 100;

  createToDoItem = (label) => {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  };

  state = {
    todoData: [
      this.createToDoItem("Drink coffee"),
      this.createToDoItem("Make an app"),
      this.createToDoItem("Have a lunch"),
    ],
    term: "",
    filter: "all", //all, active, done
  };

  findItemIndex = (id, arr) => {
    return arr.findIndex((el) => el.id === id);
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = this.findItemIndex(id, todoData);
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

  toggleProperty = (arr, id, property) => {
    const index = this.findItemIndex(id, arr);
    const oldItem = arr[index];

    const newItem = { ...oldItem, [property]: !oldItem[property] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (term === "") return items;

    return items.filter(
      (item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <TaskAdder onAdd={this.addItem} />
      </div>
    );
  }
}

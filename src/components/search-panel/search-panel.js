import React from "react";

import "./search-panel.css";
export default class SearchPanel extends React.Component {
  state = {
    term: "",
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    //Properties unlike child elements can be objects
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type here to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}

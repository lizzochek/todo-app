import React from "react";

import "./search-panel.css";
const SearchPanel = () => {
  const searchText = "Type here to search";

  //Properties unlike child elements can be objects
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder={searchText}
    />
  );
};

export default SearchPanel;

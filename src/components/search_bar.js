import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: "" }; //intialise state
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Enter your query"
          value={this.state.searchterm}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={event => this.keyPressHandler(event.key)}
        />
      </div>
    );
  }

  onInputChange(term) {
    console.log(term);
    this.setState({ searchterm: term });
    console.log("searchterm", this.state.searchterm);
  }

  keyPressHandler(key) {
    if (key == "Enter") {
      this.props.onSearchTermSubmit(this.state.searchterm);
    }
  }
}

export { SearchBar };

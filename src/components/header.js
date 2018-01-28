import React, { Component } from "react";
//import {SearchBar} from "../components";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: "" }; //intialise state
  }

  render() {
    return (
      <div className="banner-section banner-overlay ">
        <div className="container text-center">
          <div className="col-md-12">
            <div className="banner-heading ">
              <h2>Welcome to YourTube </h2>
              <div className="search-bar">
                <input
                  placeholder="Enter your query"
                  value={this.state.searchterm}
                  onChange={event => this.onInputChange(event.target.value)}
                  onKeyPress={event => this.keyPressHandler(event.key)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    //console.log(term);
    this.setState({ searchterm: term });
    console.log("searchterm", this.state.searchterm);
  }

  keyPressHandler(key) {
    if (key == "Enter") {
      this.setState({ searchterm: "" });
      this.props.onSearchTermSubmit(this.state.searchterm);
    }
  }
}

export { Header };

/*
<div className="input-group-btn">
  <button className="btn btn-primary site-btn" type="submit">
    <i className="glyphicon glyphicon-search" />
  </button>
</div>
*/

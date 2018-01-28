import React, { Component } from "react";

class NavBar extends Component {
  /*  constructor(props) {
    super(props);
    this.state = { active: "home" };
  }

  setActive(term) {
    this.setState({ active: term });
  }
*/

  render() {
    return (
      <div className="myNav">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
                aria-expanded="false"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#page-top">
                <div className="row">
                  <img className="logo" src="../assets/Accenture-Logo.png" />
                  YourTube
                </div>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#page-top">Home</a>
                </li>
                <li>
                  <a href="#videos">Videos</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export { NavBar };

/*  <li
    onClick={this.setActive(about)}
    className={
      this.state.active == "about" ? "active" : "inactive"
    }
  > */

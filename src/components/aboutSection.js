import React, { Component } from "react";
//import {SearchBar} from "../components";

class AboutSection extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: "" }; //intialise state
  }

  render() {
    return (
      <div className="banner-section banner-overlay" id="about">
        <div className="container text-center">
          <div className="col-md-12">
            <div className="banner-heading ">
              <h2>YourTube</h2>
              <p>Made with </p>{" "}
              <h4>
                <a href="https://reactjs.org/">ReactJS</a>
              </h4>
              <h5> & </h5>
              <h4>
                <a href="https://developers.google.com/youtube/v3/">
                  Google Data API v3
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { AboutSection };

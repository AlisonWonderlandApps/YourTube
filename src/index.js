import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  Header,
  SearchBar,
  VideoList,
  VideoDetail,
  Footer,
  NavBar,
  Blogs,
  AboutSection,
  Carousel
} from "./components";

const API_KEY = "AIzaSyAwXpVtVFx9xPoB0eqw_UzcHhai6kEY9tU";
const baseURL = "https://www.googleapis.com/youtube/v3/search?";
const numResults = 5;
const finalURL = `${baseURL}part=snippet&maxResults=${numResults}&q=`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: 0, results: null };

    this.fetchVideos("accenture startup");
  }

  componentDidMount() {
    /*move search to here */
    //this.fetchVideos("accenture");
  }

  fetchVideos(term) {
    console.log("searching for ", term);
    const url = `${finalURL}${term}&key=${API_KEY}`;
    fetch(url)
      .then(results => results.json())
      .then(resultsJson => {
        console.log(resultsJson);
        let videos = [];

        Object.keys(resultsJson).map((key, index) => {
          videos = resultsJson[key];
        });
        console.log(videos);

        this.setState({ videos, selectedVideo: videos[0] });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div className="bg">
        <NavBar />
        <Header
          onSearchTermSubmit={term => {
            //console.log("term", term);
            this.fetchVideos(term);
          }}
        />
        <div className="bg2" id="videos">
          <div className="container">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
        <AboutSection />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".bg"));

/*
https://developers.google.com/youtube/v3/sample_requests
GET {base_URL}/search?part=snippet
                     &order=rating
                     &type=video
                     &videoDefinition=high
                     &videoEmbeddable=true
                     &key={YOUR_API_KEY}

GET {base_URL}/search?part=snippet
                    &q=YouTube+Data+API
                    &type=video
                    &videoCaption=closedCaption
                    &key={YOUR_API_KEY}
*/

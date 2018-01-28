import React, { Component } from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <div onClick={() => onVideoSelect(video)} className="panel-body">
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={imageURL} />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-title">{video.snippet.title}</h4>
          <h6 className="media-desc">{video.snippet.description}</h6>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;

/*
<div className="video-list-div">
  <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div id="video-list" className="video-list">
      <div className="media-left">
        <img className="media-object" src={imageURL} />
      </div>

      <div className="media-body">
        <div className="media-heading"> {video.snippet.title}</div>
      </div>
    </div>
  </li>
</div>
<div className="list-group-item" onClick={() => onVideoSelect(video)}>
  <img src={imageURL} />
  <div className="videoTitle"> {video.snippet.title} </div>
</div>
*/

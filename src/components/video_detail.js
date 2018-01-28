import React, { Component } from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Check your network connection ... </div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8" id="video">
      <div className="myvideo">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allowFullScreen />
        </div>
      </div>
      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export { VideoDetail };

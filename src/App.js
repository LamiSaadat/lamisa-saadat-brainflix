import "./App.scss";
import NavBar from "./components/NavBar";
import VideoDisplay from "./components/VideoDisplay";
import VideoData from "./components/VideoData";
import VideoForm from "./components/VideoForm/VideoForm";
import Comments from "./components/Comments";
import VideoQueue from "./components/VideoQueue";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import React, { Component } from "react";

class App extends Component {
  state = {
    selectedVideo: videoDetails[0],
  };

  handleVideoSelection = (videoId) => {
    const newSelectedVideo = videoDetails.find((video) => videoId === video.id);

    this.setState({
      selectedVideo: newSelectedVideo,
    });
  };

  render() {
    const nonSelectedVideo = videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
    return (
      <>
        {/* NAV BAR COMPONENT */}
        <NavBar />
        {/* VIDEO DISPLAY COMPONENT */}
        <VideoDisplay selectedVideo={this.state.selectedVideo} />
        <div className="bottom-wrapper">
          <div className="video-content-wrapper">
            {/* VIDEO DATA COMPONENT */}
            <VideoData selectedVideo={this.state.selectedVideo} />
            {/* VIDEO FORM COMPONENT */}
            <VideoForm selectedVideo={this.state.selectedVideo} />
            {/* VIDEO COMMENTS COMPONENT */}
            <Comments selectedVideo={this.state.selectedVideo} />
            {/* VIDEO QUEUE COMPONENT */}
          </div>
          <div className="video-queue-wrapper">
            <VideoQueue
              videos={nonSelectedVideo}
              handleVideoSelection={this.handleVideoSelection}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

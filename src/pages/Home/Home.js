import "./Home.scss";
import VideoDisplay from "../../components/VideoDisplay";
import VideoData from "../../components/VideoData";
import VideoForm from "../../components/VideoForm/VideoForm";
import Comments from "../../components/Comments";
import VideoQueue from "../../components/VideoQueue";
import React from "react";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "66a6b358-99ab-4ba7-94c9-4b6cbd9a9092";
const apiKeyString = `?api_key=${API_KEY}`;

class Home extends React.Component {
  state = {
    videos: null,
    activeVideo: null,
  };

  componentDidMount() {
    const videoListEndpoint = `${BASE_URL}/videos${apiKeyString}`;
    axios.get(videoListEndpoint).then((response) => {
      this.setState({
        videos: response.data,
      });

      const activeVideoId = this.props.match.params.id || response.data[0].id;
      this.fetchActiveVideo(activeVideoId);
    });
  }

  fetchActiveVideo = (videoId) => {
    const videoDetailsEndpoint = `${BASE_URL}/videos/${videoId}${apiKeyString}`;
    axios.get(videoDetailsEndpoint).then((response) => {
      this.setState({
        activeVideo: response.data,
      });
    });
  };

  componentDidUpdate(prevProps) {
    const videoId = this.props.match.params.id;
    const prevVideoId = prevProps.match.params.id;

    if (videoId && videoId !== prevVideoId) {
      this.fetchActiveVideo(videoId);
    }
    if (!videoId && prevVideoId) {
      this.fetchActiveVideo(this.state.videos[0].id);
    }
  }

  render() {
    const { videos, activeVideo } = this.state;

    if (videos === null || activeVideo === null) {
      return <p>Loading...</p>;
    }

    const { image, comments } = activeVideo;

    const filteredVideos = this.state.videos.filter((videos) => {
      return videos.id !== this.state.activeVideo.id;
    });

    return (
      <>
        {/*VIDEO DISPLAY COMPONENT*/}
        <VideoDisplay image={image} />
        <div className="bottom-wrapper">
          <div className="video-content-wrapper">
            {/* VIDEO DATA COMPONENT */}
            <VideoData activeVideo={activeVideo} />
            {/* VIDEO FORM COMPONENT */}
            <VideoForm comments={comments} />
            {/* VIDEO COMMENTS COMPONENT */}
            <Comments comments={comments} />
            {/* VIDEO QUEUE COMPONENT */}
          </div>
          <div className="video-queue-wrapper">
            <VideoQueue videos={filteredVideos} />
          </div>
        </div>
      </>
    );
  }
}
export default Home;

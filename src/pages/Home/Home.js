import "./Home.scss";
import VideoDisplay from "../../components/VideoDisplay";
import VideoData from "../../components/VideoData";
import VideoForm from "../../components/VideoForm/VideoForm";
import Comments from "../../components/Comments";
import VideoQueue from "../../components/VideoQueue";
import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080/videos";
// const API_KEY = "66a6b358-99ab-4ba7-94c9-4b6cbd9a9092";
// const apiKeyString = `?api_key=${API_KEY}`;

class Home extends React.Component {
  state = {
    videos: null,
    activeVideo: null,
  };

  componentDidMount() {
    //get all videos from API and update state
    const videoListEndpoint = BASE_URL;
    axios.get(videoListEndpoint).then((response) => {
      this.setState({
        videos: response.data,
      });

      //check id of selected video and show, otherwise show default
      const activeVideoId = this.props.match.params.id || response.data[0].id;
      this.fetchActiveVideo(activeVideoId);
    });
  }

  //get video info from API and update state
  fetchActiveVideo = (videoId) => {
    const videoDetailsEndpoint = `${BASE_URL}/${videoId}`;
    axios.get(videoDetailsEndpoint).then((response) => {
      this.setState({
        activeVideo: response.data,
      });
    });
  };

  componentDidUpdate(prevProps) {
    const videoId = this.props.match.params.id;
    const prevVideoId = prevProps.match.params.id;

    //show selected video if selected
    if (videoId && videoId !== prevVideoId) {
      this.fetchActiveVideo(videoId);
    }
    //show default video
    if (!videoId && prevVideoId) {
      this.fetchActiveVideo(this.state.videos[0].id);
    }
  }

  render() {
    const { videos, activeVideo } = this.state;

    //show a loading text while fetching data
    if (videos === null || activeVideo === null) {
      return <p>Loading...</p>;
    }

    const { image, comments } = activeVideo;

    //filter out the selected video from the videos queu
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

import "./Home.scss";
import VideoDisplay from "../../components/VideoDisplay";
import VideoData from "../../components/VideoData";
import VideoForm from "../../components/VideoForm/VideoForm";
import Comments from "../../components/Comments";
import VideoQueue from "../../components/VideoQueue";
import UploadSuccess from "../../components/UploadSuccess/UploadSuccess";
import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080/videos";

class Home extends React.Component {
  state = {
    videos: [],
    activeVideo: null,
  };

  async componentDidMount() {
    const videosList = await axios.get(BASE_URL);

    //check id of selected video and show, otherwise show default
    const activeVideoId = this.props.match.params.id || videosList.data[0].id;

    const activeVideo = await axios.get(`${BASE_URL}/${activeVideoId}`);

    //update state
    this.setState({
      videos: videosList.data,
      activeVideo: activeVideo.data,
    });
  }

  componentDidUpdate(prevProps) {
    let videoId = this.props.match.params.id;
    let prevVideoId = prevProps.match.params.id;

    //show selected video if selected
    if (videoId !== prevVideoId) {
      if (typeof videoId === "undefined") {
        videoId = this.state.videos[0].id;
      } else {
        videoId = this.props.match.params.id;
      }
      axios
        .get(`${BASE_URL}/${videoId}`)
        .then((response) => {
          this.setState({
            activeVideo: response.data,
          });
        })
        .then(window.scrollTo(0, 0));
    }
  }

  render() {
    const { videos, activeVideo } = this.state;

    //show a loading text while fetching data
    if (videos === null || activeVideo === null) {
      return <p>Loading...</p>;
    }

    const { image, comments } = activeVideo;

    //filter out the selected video from the videos queue
    const filteredVideos = this.state.videos.filter((videos) => {
      return videos.id !== this.state.activeVideo.id;
    });

    return (
      <>
        {/* show when video uploads successfully */}
        {this.props.isUploaded && <UploadSuccess />}
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

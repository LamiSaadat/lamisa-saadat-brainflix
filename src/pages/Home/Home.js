import "./Home.scss";
import VideoDisplay from "../../components/VideoDisplay";
import VideoData from "../../components/VideoData";
// import VideoForm from "../../components/VideoForm/VideoForm";
import Comments from "../../components/Comments";
import VideoQueue from "../../components/VideoQueue";
// import videos from "../../data/videos.json";
// import videoDetails from "../../data/video-details.json";
import React from "react";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "66a6b358-99ab-4ba7-94c9-4b6cbd9a9092";
const apiKeyString = `?api_key=${API_KEY}`;

class Home extends React.Component {
  state = {
    videos: null,
    activeVideo: null,
    // comments: [],
  };

  componentDidMount() {
    axios.get(`${BASE_URL}/videos${apiKeyString}`).then((response) => {
      this.setState({
        videos: response.data,
      });

      const activeVideoId = this.props.match.params.id || response.data[0].id;
      this.fetchActiveVideo(activeVideoId);
    });
  }

  //match the video id
  // handleVideoSelection = (videoId) => {
  //   const newSelectedVideo = videoDetails.find((video) => videoId === video.id);

  //   this.setState({
  //     selectedVideo: newSelectedVideo,
  //   });
  // };

  fetchActiveVideo = (videoId) => {
    return axios
      .get(`${BASE_URL}/videos/${videoId}${apiKeyString}`)
      .then((response) => {
        console.log(response);
        this.setState({
          activeVideo: response.data,
          // comments: response.data.comments,
        });
      });
  };

  render() {
    // const nonSelectedVideo = videos.filter((video) => {
    //   return video.id !== this.state.selectedVideo.id;
    // });
    const { videos, activeVideo } = this.state;

    if (videos === null || activeVideo === null) {
      return <p>Loading...</p>;
    }

    const { image, comments } = activeVideo;

    return (
      <>
        {/*VIDEO DISPLAY COMPONENT*/}
        <VideoDisplay image={image} />
        <div className="bottom-wrapper">
          <div className="video-content-wrapper">
            {/* VIDEO DATA COMPONENT */}
            <VideoData activeVideo={activeVideo} />
            {/* VIDEO FORM COMPONENT */}
            {/* <VideoForm
            // selectedVideo={this.state.selectedVideo}
            /> */}
            {/* VIDEO COMMENTS COMPONENT */}
            <Comments comments={comments} />
            {/* VIDEO QUEUE COMPONENT */}
          </div>
          <div className="video-queue-wrapper">
            <VideoQueue
              videos={videos}
              // videos={nonSelectedVideo}
              // handleVideoSelection={this.handleVideoSelection}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Home;

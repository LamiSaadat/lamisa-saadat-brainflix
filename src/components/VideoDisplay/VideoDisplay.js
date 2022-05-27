import "./VideoDisplay.scss";

function VideoDisplay({ selectedVideo }) {
  return (
    <div className="video-display">
      <video
        controls
        poster={selectedVideo.image}
        className="video-display__video"
      >
        <source src="/" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default VideoDisplay;

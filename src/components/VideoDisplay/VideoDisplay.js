import "./VideoDisplay.scss";

function VideoDisplay({ selectedVideo }) {
  return (
    <section className="video-display-wrapper">
      <div className="video-display">
        <video
          controls
          poster={selectedVideo.image}
          className="video-display__video"
        >
          <source src="/" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
}

export default VideoDisplay;

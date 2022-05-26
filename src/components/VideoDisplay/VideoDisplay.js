function VideoDisplay() {
  return (
    <div className="video-display">
      <video controls>
        <source
          src="https://project-2-api.herokuapp.com/stream"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default VideoDisplay;

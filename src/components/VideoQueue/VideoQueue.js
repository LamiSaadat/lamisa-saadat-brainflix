function VideoQueue() {
  return (
    <div className="video-queue">
      <h2 className="video-queue__title">Next Videos</h2>
      <div className="video-card">
        <img
          className="video-card__image"
          src="https://i.imgur.com/5qyCZrD.jpg"
        ></img>
        <p className="video-card__title">
          Become A Travel Pro In One Easy Lesson
        </p>
        <p className="video-card__channel">Todd Welch</p>
      </div>
    </div>
  );
}
export default VideoQueue;

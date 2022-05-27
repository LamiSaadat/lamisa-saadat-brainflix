import "./VideoData.scss";

function VideoData({ selectedVideo }) {
  return (
    <div className="video">
      {/* VIDEO INFO COMPONENT */}
      <div className="video-info">
        <h1 className="video-info__title">{selectedVideo.title}</h1>
        <div className="video-info__subtitle">
          <div className="video-info__sibtitle-left">
            <p className="video-info__channel">{`By ${selectedVideo.channel}`}</p>
            <p className="video-info__date">{selectedVideo.timestamp}</p>
          </div>
          <div className="video-info__subtitle-right">
            <p className="video-info__views">{selectedVideo.views}</p>
            <p className="video-info__likes">{selectedVideo.likes}</p>
          </div>
        </div>
        <p className="video-info__description">{selectedVideo.description}</p>
      </div>

      {/* VIDEO FORM COMPONENT */}
      <div className="form-container">
        <p className="comment-counter">3 comments</p>
        <form className="video-form">
          <label className="video-form__comment-label">
            Join the conversation
            <input
              type="text"
              placeholder="Add a new comment"
              className="video-form__comment-input"
            ></input>
          </label>
          <button className="video-form__button">Comment</button>
        </form>
      </div>
    </div>
  );
}

export default VideoData;

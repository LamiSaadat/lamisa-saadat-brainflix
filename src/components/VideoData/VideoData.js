import "./VideoData.scss";

function VideoData() {
  return (
    <div className="video">
      {/* VIDEO INFO COMPONENT */}
      <div className="video-info">
        <h1 className="video-info__title">BMX Rampage: 2021 Highlights</h1>
        <div className="video-info__subtitle">
          <div className="video-info__sibtitle-left">
            <p className="video-info__author">By Red Crow</p>
            <p className="video-info__date">07/11/2021</p>
          </div>
          <div className="video-info__subtitle-right">
            <p className="video-info__views">1,001,023</p>
            <p className="video-info__likes">110,985</p>
          </div>
        </div>
        <p className="video-info__description">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
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

      {/* VIDEO COMMENTS COMPONENT */}
      <div className="comments">
        <div className="comment-card">
          <div className="comment-card__image"></div>
          <div className="comment-card__output">
            <div className="comment-card__info">
              <p className="comment-card__name">Micheal Lyons</p>
              <p className="comment-card__date">08/09/2021</p>
            </div>
            <div className="comment-card__comment">
              <p className="comment-card__text">
                They BLEW the ROOF off at their last event, once everyone
                started figuring out they were going. This is still simply the
                greatest opening of an event I have EVER witnessed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoData;

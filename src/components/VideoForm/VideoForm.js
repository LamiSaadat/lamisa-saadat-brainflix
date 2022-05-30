import "./VideoForm.scss";
import icon from "../../assets/images/Mohan-muruge.jpg";

function VideoForm() {
  return (
    <div className="form-wrapper">
      <p className="comment-counter">3 Comments</p>
      <div className="form-container">
        <img className="form-container__image" src={icon}></img>
        <form className="form">
          <label className="form__label">
            Join the conversation
            <input
              type="text"
              placeholder="Add a new comment"
              className="form__input"
            ></input>
          </label>
          <button className="form__button">Comment</button>
        </form>
      </div>
    </div>
  );
}

export default VideoForm;

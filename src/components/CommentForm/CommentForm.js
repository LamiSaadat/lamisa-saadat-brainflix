import "./CommentForm.scss";
import icon from "../../assets/images/Mohan-muruge.jpg";

function CommentForm({ comments }) {
  return (
    <div className="form-wrapper">
      <p className="comment-counter">{`${comments.length} Comments`}</p>
      <div className="form-container">
        <img className="form-container__image" src={icon} alt="Mohan"></img>
        <form className="comment-form">
          <label className="comment-form__label">
            Join the conversation
            <textarea
              type="text"
              placeholder="Add a new comment"
              className="comment-form__input"
            ></textarea>
          </label>
          <button className="comment-form__button" disabled>
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;

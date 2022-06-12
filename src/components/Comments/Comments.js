import { convertTimeToDate } from "../../utils/convertTimeToDate";
import "./Comments.scss";

function Comments({ comments }) {
  return (
    <section className="comments" key={comments.id}>
      {comments.map((comment) => {
        return (
          <div className="comment-card" key={comment.id}>
            <img className="comment-card__image" alt="user icon" />
            <div className="comment-card__output">
              <div className="comment-card__info">
                <p className="comment-card__name">{comment.name}</p>
                <p className="comment-card__date">
                  {convertTimeToDate(new Date(comment.timestamp))}
                </p>
              </div>
              <div className="comment-card__comment">
                <p className="comment-card__text">{comment.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Comments;

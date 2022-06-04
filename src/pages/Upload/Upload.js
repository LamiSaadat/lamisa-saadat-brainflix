import "./Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

function Upload(props) {
  function formSubmit(event) {
    event.preventDefault();
    alert("Video uploaded successfully!");
    props.history.push("/");
  }

  return (
    <section className="upload-container">
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__content">
          <figure className="upload__thumbnail">
            <figcaption className="upload__thumbnail-caption label">
              Video Thumbnail
            </figcaption>
            <img src={thumbnail} className="upload__thumbnail-image"></img>
          </figure>
          <form className="form" onSubmit={formSubmit}>
            <label className="label form__title">
              Title Your Video
              <input className="form__title-input input"></input>
            </label>
            <label className="form__description label">
              Add a video description
              <textarea className="form__description-input input"></textarea>
            </label>
            <div className="form__button-container">
              <Link className="link form__cancel-btn">Cancel</Link>
              <button type="submit" className="form__publish-btn">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Upload;

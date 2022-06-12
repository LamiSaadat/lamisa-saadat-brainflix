import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function UploadPage(props) {
  function formSubmit(e) {
    e.preventDefault();

    //new video object from data input
    let newVideo = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    //post new video to server, then redirect to homepage to show successful upload message and remove message after 2 seconds
    axios
      .post("http://localhost:8080/videos", newVideo)
      .then(() => {
        props.history.push("/");
        props.handleUpload();
        setTimeout(props.handleUpload, 2000);
      })
      .catch((error) => {
        return error;
      });
  }

  return (
    <section className="upload-container">
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__content">
          <figure className="upload__thumbnail">
            <figcaption className="upload__thumbnail-caption upload-label">
              Video Thumbnail
            </figcaption>
            <img
              src={thumbnail}
              className="upload__thumbnail-image"
              alt="video thumbnail"
            ></img>
          </figure>
          <form className="upload-form" onSubmit={formSubmit}>
            <label className="upload-label upload-form__title-label">
              Title Your Video
              <input
                className="upload-form__title-input upload-input"
                name="title"
                id="title"
                placeholder="Add a title to your video"
              ></input>
            </label>
            <label className="upload-form__description-label upload-label">
              Add a video description
              <textarea
                className="upload-form__description-input upload-input"
                name="description"
                id="description"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
            <div className="upload-form__button-container">
              <Link to="/" className="link upload-form__cancel-btn">
                Cancel
              </Link>
              <button type="submit" className="upload-form__publish-btn">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default UploadPage;

import "./Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";
import UploadSuccess from "../../components/UploadSuccess";

class Upload extends Component {
  formSubmit = (e) => {
    e.preventDefault();

    let newVideo = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    axios.post("http://localhost:8080/videos", newVideo).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <section className="upload-container">
        <div className="upload">
          <h1 className="upload__title">Upload Video</h1>
          {/* {this.formSubmit && <UploadSuccess />} */}
          <div className="upload__content">
            <figure className="upload__thumbnail">
              <figcaption className="upload__thumbnail-caption label">
                Video Thumbnail
              </figcaption>
              <img src={thumbnail} className="upload__thumbnail-image"></img>
            </figure>
            <form className="form" onSubmit={this.formSubmit}>
              <label className="label form__title-label">
                Title Your Video
                <input
                  className="form__title-input input"
                  name="title"
                  id="title"
                  placeholder="Add a title to your video"
                  required
                ></input>
              </label>
              <label className="form__description-label label">
                Add a video description
                <textarea
                  className="form__description-input input"
                  name="description"
                  id="description"
                  placeholder="Add a description to your video"
                  required
                ></textarea>
              </label>
              <div className="form__button-container">
                <Link to="/" className="link form__cancel-btn">
                  Cancel
                </Link>
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
}
export default Upload;

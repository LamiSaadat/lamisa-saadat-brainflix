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
    <section className="upload">
      <h1>Upload Video</h1>
      <figure className="upload__thumbnail">
        <figcaption>Video Thumbnail</figcaption>
        <img src={thumbnail}></img>
      </figure>
      <form className="upload__form" onSubmit={formSubmit}>
        <label>
          Title Your Video
          <input></input>
        </label>
        <label>
          Add a video description
          <textarea></textarea>
        </label>
        <Link className="link">Cancel</Link>
        <button type="submit">Publish</button>
      </form>
    </section>
  );
}
export default Upload;

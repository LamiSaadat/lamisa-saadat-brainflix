import "./Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className="upload">
      <h1>Upload Video</h1>
      <figure className="upload__thumbnail">
        <figcaption>Video Thumbnail</figcaption>
        <img src={thumbnail}></img>
      </figure>
      <form className="upload__form">
        <label>
          Title Your Video
          <input></input>
        </label>
        <label>
          Add a video description
          <textarea></textarea>
        </label>
      </form>
    </section>
  );
}
export default Upload;

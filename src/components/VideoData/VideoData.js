import "./VideoData.scss";
import { convertTimeToDate } from "../../utils/utils";
import veiwsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoData({ selectedVideo }) {
  return (
    <>
      {/* VIDEO INFO COMPONENT */}
      <div className="video-info">
        <h1 className="video-info__title">{selectedVideo.title}</h1>
        <div className="video-info__subtitle">
          <div className="video-info__sibtitle-left">
            <p className="video-info__channel">{`By ${selectedVideo.channel}`}</p>
            <p className="video-info__date">
              {convertTimeToDate(new Date(selectedVideo.timestamp))}
            </p>
          </div>
          <div className="video-info__subtitle-right">
            <p className="video-info__views">
              <img src={veiwsIcon}></img> {selectedVideo.views}
            </p>
            <p className="video-info__likes">
              <img src={likesIcon}></img> {selectedVideo.likes}
            </p>
          </div>
        </div>
        <p className="video-info__description">{selectedVideo.description}</p>
      </div>
    </>
  );
}

export default VideoData;

import "./VideoData.scss";
import { convertTimeToDate } from "../../utils/convertTimeToDate";
import veiwsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

//video info display
function VideoData({ activeVideo }) {
  return (
    <>
      <div className="video-info">
        <h1 className="video-info__title">{activeVideo.title}</h1>
        <div className="video-info__subtitle">
          <div className="video-info__subtitle-left">
            <p className="video-info__channel">{`By ${activeVideo.channel}`}</p>
            <p className="video-info__date">
              {convertTimeToDate(new Date(activeVideo.timestamp))}
            </p>
          </div>
          <div className="video-info__subtitle-right">
            <p className="video-info__views">
              <img
                src={veiwsIcon}
                alt={`Video called ${activeVideo.title} by ${activeVideo.channel} `}
              ></img>
              {activeVideo.views}
            </p>
            <p className="video-info__likes">
              <img src={likesIcon} alt="User icon"></img>
              {activeVideo.likes}
            </p>
          </div>
        </div>
        <p className="video-info__description">{activeVideo.description}</p>
      </div>
    </>
  );
}

export default VideoData;

import "./VideoQueue.scss";
import { Link } from "react-router-dom";

const VideoQueue = ({
  videos,
  // handleVideoSelection
}) => {
  return (
    <section className="video-queue">
      <h2 className="video-queue__title">Next Videos</h2>

      {videos.map((video) => {
        return (
          <Link
            to={`/video/${video.id}`}
            className="video-card link"
            key={video.id}
          >
            <img
              className="video-card__image"
              src={video.image}
              alt={`Video called ${video.title} by ${video.channel} `}
            />
            <div className="video-card__info">
              <p className="video-card__title">{video.title}</p>
              <p className="video-card__channel">{video.channel}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
export default VideoQueue;

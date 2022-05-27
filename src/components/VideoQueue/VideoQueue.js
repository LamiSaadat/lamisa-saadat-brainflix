import "./VideoQueue.scss";

const VideoQueue = ({ videos, handleVideoSelection }) => {
  return (
    <section className="video-queue">
      <h2 className="video-queue__title">Next Videos</h2>
      {videos.map((video) => {
        return (
          <div
            className="video-card"
            onClick={() => {
              handleVideoSelection(video.id);
            }}
            key={video.id}
          >
            <img className="video-card__image" src={video.image} alt="" />
            <p className="video-card__title">{video.title}</p>
            <p className="video-card__channel">{video.channel}</p>
          </div>
        );
      })}
    </section>
  );
};
export default VideoQueue;

import "./VideoQueue.scss";

const VideoQueue = ({
  videos,
  // handleVideoSelection
}) => {
  return (
    <section className="video-queue">
      <h2 className="video-queue__title">Next Videos</h2>
      {/* <ul>
        <li>
          <Link></Link>
        </li>

      </ul> */}
      {videos.map((video) => {
        return (
          <div
            className="video-card"
            // onClick={() => {
            //   handleVideoSelection(video.id);
            // }}
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
          </div>
        );
      })}
    </section>
  );
};
export default VideoQueue;

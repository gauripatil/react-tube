const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 shadow-lg p-2 m-1 ">
      <img src={thumbnails?.medium?.url} className="rounded-lg" />
      <ul className="py-2">
        <li className="font-bold">{title}</li>
        <li className="text-md my-1">{channelTitle}</li>
        <li className="text-sm">
          {statistics?.viewCount.toLocaleString("en-US")} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

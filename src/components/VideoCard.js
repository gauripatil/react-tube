import { parseISO8601Duration, formatViewCount } from "../utils/helper";
const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 shadow-lg p-2 m-1 rounded-md h-[21rem] hover:shadow-xl hover:cursor-pointer hover:bg-gray-50">
      <div className="relative inline-block w-full">
        <img src={thumbnails?.medium?.url} className="rounded-lg w-full" />
        {contentDetails?.duration && (
          <span className="absolute bg-black text-white rounded text-sm font-semibold px-1.5 py-0.5 right-2 bottom-2  bg-opacity-75">
            {contentDetails?.duration &&
              parseISO8601Duration(contentDetails.duration, true)}
          </span>
        )}
      </div>
      <ul className="py-2">
        <li className="font-bold">{title}</li>
        <li className="text-md my-1.5  text-gray-500">{channelTitle}</li>

        {statistics?.viewCount && (
          <li className="text-sm pb-1   text-gray-500">
            {formatViewCount(statistics?.viewCount)}
          </li>
        )}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border-red-500 border rounded-md">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

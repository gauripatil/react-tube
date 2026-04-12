import { Link } from "react-router";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults } from "../stores/searchSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { searchResults, isSearching } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await fetch(YOUTUBE_POPULAR_VIDEOS);
      const youtube_data = await data.json();
      setVideos(youtube_data.items);
      dispatch(setSearchResults(youtube_data.items));
    }
    getData();
  }, []);

  const displayVideos = searchResults.length > 0 ? searchResults : videos;

  return (
    <div className="flex flex-wrap">
      {isSearching && (
        <div className="w-full h-full text-center text-lg font-bold">
          Searching...
        </div>
      )}
      {/* {displayVideos[0] && (
        <Link
          to={
            "/watch?v=" + (displayVideos[0].id.videoId || displayVideos[0].id)
          }
        >
          <AdVideoCard info={displayVideos[0]}></AdVideoCard>
        </Link>
      )} */}
      {displayVideos.map((video) => {
        return (
          <Link
            to={"/watch?v=" + (video.id.videoId || video.id)}
            key={video.id.videoId || video.id}
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

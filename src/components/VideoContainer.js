import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function getData() {
      console.log("useEffect called");
      const data = await fetch(YOUTUBE_POPULAR_VIDEOS);
      const youtube_data = await data.json();
      setVideos(youtube_data.items);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard info={video} key={video?.id} />;
      })}
    </div>
  );
};

export default VideoContainer;

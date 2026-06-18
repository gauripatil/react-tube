import { Link } from "react-router";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, setSearching } from "../stores/searchSlice";

const categoryMap = {
  "All": null,
  "Gaming": 20,
  "Music": 10,
  "Sports": 17,
  "Entertainment": 24,
  "News": 25,
  "Learning": 27,
  "Tech": 28,
  "Comedy": 24,
  "Movies": 24
};

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { searchResults, isSearching } = useSelector((store) => store.search);
  const { selectedCategory } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchVideosByCategory() {
      dispatch(setSearching(true));
      try {
        let apiUrl;
        const categoryId = categoryMap[selectedCategory];

        if (categoryId) {
          // Use videoCategoryId for mapped categories
          apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${categoryId}&regionCode=US&maxResults=50&key=AIzaSyANuSp8rf3Ba7DJW72OUsA6q7SpVkew2hY`;
        } else if (selectedCategory === "All") {
          // Fetch popular videos
          apiUrl = YOUTUBE_POPULAR_VIDEOS;
        } else {
          // Search for other categories by name
          apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyANuSp8rf3Ba7DJW72OUsA6q7SpVkew2hY&q=${selectedCategory}`;
        }

        const data = await fetch(apiUrl);
        const youtube_data = await data.json();
        const items = youtube_data.items || [];
        setVideos(items);
        dispatch(setSearchResults(items));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideosByCategory();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

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

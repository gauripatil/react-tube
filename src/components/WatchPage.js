import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./../stores/appSlice";
import { YOUTUBE_VIDEO_DETAILS } from "./../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
let isApiCallInProgress = false;
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState({});

  const dispatch = useDispatch();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());

    if (!isApiCallInProgress) {
      getData();
    }
    // if (!videoId) return;
  }, [searchParams]);

  async function getData() {
    isApiCallInProgress = true;
    const url = YOUTUBE_VIDEO_DETAILS + "&id=" + videoId;
    const data = await fetch(url);
    let vData = await data.json();
    setVideoData(vData.items[0]);
    isApiCallInProgress = false;
  }

  return (
    <div className="col-span-11 p-5 shadow-md">
      <div className="flex">
        <div>
          <iframe
            width="1050"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[600px]">
          <LiveChat />
        </div>
      </div>

      <h1 className="font-bold text-lg my-2">{videoData?.snippet?.title}</h1>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

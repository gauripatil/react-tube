import { useSelector } from "react-redux";
import { useState } from "react";

const ShortsContainer = () => {
  const shortsResults = useSelector((store) => store.search.shortsResults);
  const [shortIdx, setShortIdx] = useState(0);
  const short = shortsResults[shortIdx];

  return (
    <div className=" col-span-11 flex items-center w-full  gap-4 p-5 shadow-md">
      <div className="  w-[366px] h-[603px] pb-6 pl-1 ">
        <div className="flex items-end w-[100%] h-full p-4 overflow-auto">
          {short?.snippet?.title ? (
            <p className="text-lg font-bold mb-4">{short.snippet.title}</p>
          ) : (
            <p className="text-lg font-bold mb-4">No Shorts Found. </p>
          )}
        </div>
      </div>
      <div className="rounded-lg w-[366px] h-[603px] shadow-md border border-gray-300 ">
        <iframe
          className="border-0 rounded-lg w-full h-full"
          width={369}
          height={609}
          src={
            short?.id
              ? `https://www.youtube.com/embed/${short.id}?autoplay=1&mute=1`
              : ""
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" w-[366px] h-[603px]  gap-3 p-4 flex flex-col-reverse place-items-end ">
        <div
          className="w-[69px] h-[69px] flex items-center justify-center text-3xl font-bold bg-[#f1f1f1] border border-gray-200 rounded-full cursor-pointer"
          onClick={() => {
            if (shortIdx < shortsResults.length - 1) setShortIdx(shortIdx + 1);
          }}
        >
          <p>↓</p>
        </div>
        <div
          className="w-[69px] h-[69px]  flex items-center justify-center text-3xl font-bold bg-[#f1f1f1] border border-gray-200 rounded-full cursor-pointer"
          onClick={() => {
            if (shortIdx > 0) setShortIdx(shortIdx - 1);
          }}
        >
          <p>↑</p>
        </div>
      </div>
    </div>
  );
};

export default ShortsContainer;

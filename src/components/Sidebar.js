import React from "react";

const Sidebar = () => {
  return (
    <div className="col-span-1 p-5 shadow-md">
      <ul>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>🏠</span>
          <span> Home</span>
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>🎬</span> <span> Shorts</span>
        </li>
        <br></br>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>🔥</span> <span> Trending</span>
        </li>
        <li className="flex items-center space-x-4   p-2 hover:bg-gray-100">
          <span>🎵</span> <span> Music</span>
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>🎬</span> <span> Movies</span>
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>🏀</span> <span> Sports</span>
        </li>
        <br></br>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>📺</span> <span> Subscriptions</span>
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>📚</span> <span> Library</span>
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>🕒</span> <span> History</span>
        </li>
        <li className="flex items-center space-x-4   p-2 hover:bg-gray-100">
          <span>⏳</span> <span> Watch Later</span>
        </li>
        <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
          <span>❤️</span> <span> Liked Videos</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

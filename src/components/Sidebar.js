import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if the menu is closed
  if (!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className="col-span-1 p-5 shadow-md text-base font-medium cursor-pointer">
      <ul>
        <Link to="/">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>🏠</span>
            <span> Home</span>
          </li>
        </Link>

        <Link to="/shorts">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>🎬</span> <span> Shorts</span>
          </li>
        </Link>

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

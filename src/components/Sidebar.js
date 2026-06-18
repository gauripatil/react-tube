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
        <Link to="/trending">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>🔥</span> <span> Trending</span>
          </li>
        </Link>
        
        <Link to="/music">
          <li className="flex items-center space-x-4   p-2 hover:bg-gray-100">
            <span>🎵</span> <span> Music</span>
          </li>
        </Link>

        <Link to="/movies">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>🎬</span> <span> Movies</span>
          </li>
        </Link>
        <Link to="/sports">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>🏀</span> <span> Sports</span>
          </li>
        </Link>
        <br></br>
        <Link to="/subscriptions">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>📺</span> <span> Subscriptions</span>
          </li>
        </Link>
        <Link to="/library">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>📚</span> <span> Library</span>
          </li>
        </Link>
        <Link to="/history">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>🕒</span> <span> History</span>
          </li>
        </Link>
        <Link to="/watch-later">
          <li className="flex items-center space-x-4   p-2 hover:bg-gray-100">
            <span>⏳</span> <span> Watch Later</span>
          </li>
        </Link>
        <Link to="/liked-videos">
          <li className="flex items-center space-x-4 p-2 hover:bg-gray-100">
            <span>❤️</span> <span> Liked Videos</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

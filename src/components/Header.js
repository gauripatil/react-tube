import { useDispatch } from "react-redux";
import { toggleMenu } from "../stores/appSlice";
import {
  MENU_IMG_URL,
  LOGO_IMG_URL,
  USER_LOGO_URL,
} from "./../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md ">
      {/* <Link to="/"> */}
      <div className="flex col-span-1">
        <img
          src={MENU_IMG_URL}
          alt="hamburger-menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />

        <img src={LOGO_IMG_URL} alt="youtube-logo" className="h-8 ml-5" />
      </div>
      {/* </Link> */}
      <div className="col-span-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className=" border border-gray-400 rounded-r-full bg-gray-100 px-3 py-2">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img src={USER_LOGO_URL} alt="user" className="h-8" />
      </div>
    </div>
  );
};

export default Header;

import { useDispatch } from "react-redux";
import { toggleMenu } from "../stores/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md ">
      <div className="flex col-span-1">
        <img
          src="https://www.svgrepo.com/show/524617/hamburger-menu.svg"
          alt="hamburger-menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
          className="h-8 ml-5"
        />
      </div>
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
        <img
          src="https://www.svgrepo.com/show/13656/user.svg"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;

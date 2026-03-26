import { useDispatch } from "react-redux";
import { toggleMenu } from "../stores/appSlice";
import { useState, useEffect } from "react";
import {
  MENU_IMG_URL,
  LOGO_IMG_URL,
  USER_LOGO_URL,
  YOUTUBE_SEARCH_API,
} from "./../utils/constants";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(async () => {
      getSuggestions();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (
        !event.target.closest(".suggestions-dropdown") &&
        !event.target.closest("input")
      ) {
        setShowSuggestions(false);
      }
    };

    const handleScroll = () => {
      setShowSuggestions(false);
    };

    document.body.addEventListener("click", handleBodyClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSuggestions = async () => {
    const url = YOUTUBE_SEARCH_API + searchInput;
    console.log(url);

    const data = await fetch(url);
    const suggestions = await data.json();
    console.log("search Result = ", suggestions[1]);
    setsuggestions(suggestions[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md ">
      <div className="flex col-span-1">
        <img
          src={MENU_IMG_URL}
          alt="hamburger-menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />

        <img src={LOGO_IMG_URL} alt="youtube-logo" className="h-8 ml-5" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => {
              console.log("onFocus");
              setShowSuggestions(true);
            }}
            onBlur={() => {
              console.log("onBlur");
            }}
          />
          <button className=" border border-gray-400 rounded-r-full bg-gray-100 px-3 py-2">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions?.length > 0 && (
          <div className="fixed ml-2 bg-white border border-gray-200 w-[29rem] px-4 py-2 shadow-md rounded-md suggestions-dropdown">
            <ul>
              {suggestions.map((item) => {
                return (
                  <li
                    className="p-1 flex hover:bg-gray-100 "
                    onClick={(e) => {
                      console.log("clicked", item);
                      setSearchInput(item);
                      setShowSuggestions(false);
                    }}
                  >
                    <span>🔍</span>
                    <span className="pl-2 font-medium">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img src={USER_LOGO_URL} alt="user" className="h-8" />
      </div>
    </div>
  );
};

export default Header;

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../stores/appSlice";
import { useState, useEffect } from "react";
import {
  MENU_IMG_URL,
  LOGO_IMG_URL,
  USER_LOGO_URL,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEOS_API,
} from "./../utils/constants";
import {
  cacheSuggestions,
  setSearchResults,
  setSearching,
  clearSearchResults,
} from "../stores/searchSlice";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchStore = useSelector((store) => store.search);

  // After getting the data from API, set in the searchSlice
  // Before making the api call check in the store for the searchQuery,
  // if present read & return from store else make api call

  useEffect(() => {
    const timer = setTimeout(async () => {
      // Check if searchQuery is present in the search store
      if (searchStore[searchInput]) {
        setShowSuggestions(searchStore[searchInput]);
      } else {
        getSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  useEffect(() => {
    dispatch(cacheSuggestions());
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

    // dispatch the action for setting the result in the search store
    const storeObj = {
      [searchInput]: suggestions[1],
    };
    console.log(storeObj);

    dispatch(cacheSuggestions(storeObj));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async () => {
    if (!searchInput.trim()) return;
    dispatch(setSearching(true));
    try {
      const url = YOUTUBE_SEARCH_VIDEOS_API + encodeURIComponent(searchInput);
      const data = await fetch(url);
      const json = await data.json();
      dispatch(setSearchResults(json.items || []));
    } catch (error) {
      console.error("Search failed:", error);
      dispatch(setSearchResults([]));
    }
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

        <a href="/">
          <img src={LOGO_IMG_URL} alt="youtube-logo" className="h-8 ml-5" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchInput}
            onChange={(e) => {
              const value = e.target.value;
              setSearchInput(value);
              setShowSuggestions(true);
              if (value.trim() === "") {
                dispatch(clearSearchResults());
              }
            }}
            onFocus={() => {
              // console.log("onFocus");
              setShowSuggestions(true);
            }}
            onBlur={() => {
              // console.log("onBlur");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className=" border border-gray-400 rounded-r-full bg-gray-100 px-3 py-2"
            onClick={handleSearch}
          >
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

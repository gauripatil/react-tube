import { createSlice } from "@reduxjs/toolkit";
import { parseISO8601Duration, isVerticalOrSquare } from "../utils/helper";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    suggestions: {},
    searchResults: [],
    shortsResults: [],
    isSearching: false,
  },
  reducers: {
    cacheSuggestions: (state, action) => {
      // @TODO: Implement LRU cache
      // 1. For optimization purpose -
      // 2. fast lookup
      // 3. Auto eviction for old keys
      const newObj = Object.assign(state.suggestions, action.payload);
      state.suggestions = newObj;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.isSearching = false;

      // set shorts results by filtering the search results
      state.shortsResults = action.payload.filter((video) => {
        console.log("Filtering shorts results for video: ", video);
        const duration = video.contentDetails?.duration;
        if (!duration) return false;
        const durationInSeconds = parseISO8601Duration(duration);
        // const isShortsDimension = isVerticalOrSquare(video.snippet?.thumbnails);
        return durationInSeconds < 180; // Shorts are typically less than 180 seconds long
      });

      console.log("Shorts results: ", state.shortsResults);
    },
    setSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
});

export default searchSlice.reducer;
export const {
  cacheSuggestions,
  setSearchResults,
  setSearching,
  clearSearchResults,
} = searchSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    suggestions: {},
    searchResults: [],
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

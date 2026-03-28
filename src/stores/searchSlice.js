import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cacheSuggestions: (state, action) => {
      // @TODO: Implement LRU cache
      // 1. For optimization purpose -
      // 2. fast lookup
      // 3. Auto eviction for old keys
      const newObj = Object.assign(state, action.payload);
      state = newObj;
    },
  },
});

export default searchSlice.reducer;
export const { cacheSuggestions } = searchSlice.actions;

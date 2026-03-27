import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cacheSuggestions: (state, action) => {
      console.log(action);
      console.log(state);
      const newObj = Object.assign(state, action.payload);
      state = newObj;
    },
  },
});

export default searchSlice.reducer;
export const { cacheSuggestions } = searchSlice.actions;

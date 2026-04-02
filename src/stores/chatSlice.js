import { LIVE_CHAT_COUNT } from "../utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export default chartSlice.reducer;
export const { addMessage, clearMessages } = chartSlice.actions;

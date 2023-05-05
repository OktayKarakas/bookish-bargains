import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutRef: "",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    aboutRef: (state, { payload }) => {
      state.aboutRef = payload;
    },
  },
});

export const { aboutRef } = headerSlice.actions;

export default headerSlice.reducer;

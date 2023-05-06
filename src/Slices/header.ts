import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRedirectedToAboutFromStore: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    redirectToAboutFromStore: (state, { payload }) => {
      state.isRedirectedToAboutFromStore = payload;
    },
  },
});

export const { redirectToAboutFromStore } = headerSlice.actions;

export default headerSlice.reducer;

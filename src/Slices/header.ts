import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRedirectedToAboutFromStore: false,
  cartItemNum: 0,
  isCartOpen: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    redirectToAboutFromStore: (state, { payload }) => {
      state.isRedirectedToAboutFromStore = payload;
    },
    AddCartItemNum: (state, { payload }) => {
      state.cartItemNum = state.cartItemNum + payload;
    },
    DecreaseCartItemNum: (state, { payload }) => {
      if (state.cartItemNum <= 0) {
        state.cartItemNum = state.cartItemNum - payload;
      }
    },
    OpenCart: (state) => {
      state.isCartOpen = true;
    },
    CloseCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  redirectToAboutFromStore,
  AddCartItemNum,
  DecreaseCartItemNum,
  OpenCart,
  CloseCart,
} = headerSlice.actions;

export default headerSlice.reducer;

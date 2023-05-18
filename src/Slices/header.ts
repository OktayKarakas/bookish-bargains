import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  detailedDescription: string;
  publisher: string;
  language: string;
  paperback: number;
  isbn: number;
  dimension: string;
}

const initialState = {
  isRedirectedToAboutFromStore: false,
  cartItemNum: 0,
  isCartOpen: false,
  items: [] as Item[],
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
    AddItem: (state, { payload }) => {
      state.items.push(payload);
    },
    RemoveItem: (state, { payload }) => {
      state.items.splice(state.items.indexOf(payload), 1);
    },
  },
});

export const {
  redirectToAboutFromStore,
  AddCartItemNum,
  DecreaseCartItemNum,
  OpenCart,
  CloseCart,
  AddItem,
} = headerSlice.actions;

export default headerSlice.reducer;

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

interface ItemsAmounts {
  id: string;
  amount: number;
}

const initialState = {
  cartItemNum: 0,
  isCartOpen: false,
  items: [] as Item[],
  itemsAmounts: [] as ItemsAmounts[],
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    AddCartItemNum: (state, { payload }) => {
      state.cartItemNum = state.cartItemNum + payload;
    },
    DecreaseCartItemNum: (state, { payload }) => {
      if (state.cartItemNum > 0) {
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
      //payload.item is Item itself, payload.amountItem is ItemsAmounts
      const existingIndex = state.itemsAmounts.findIndex((item) => {
        if (item) {
          return item.id === payload.amountItem.id;
        } else {
          return -1;
        }
      });
      if (existingIndex !== -1) {
        state.itemsAmounts[existingIndex].amount += payload.amountItem.amount;
      } else {
        state.items.push(payload.item);
        state.itemsAmounts.push(payload.amountItem);
      }
    },
    RemoveItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
      state.itemsAmounts = state.itemsAmounts.filter(
        (item) => item.id !== payload
      );
    },
  },
});

export const {
  AddCartItemNum,
  DecreaseCartItemNum,
  OpenCart,
  CloseCart,
  AddItem,
  RemoveItem,
} = headerSlice.actions;

export default headerSlice.reducer;

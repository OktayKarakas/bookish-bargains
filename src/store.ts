import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./Slices/header";

export default configureStore({
  reducer: {
    header: headerReducer,
  },
});

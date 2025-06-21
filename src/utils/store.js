import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

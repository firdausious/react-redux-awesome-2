import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import logger from "redux-logger"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => {
    // setting logger

    return getDefaultMiddleware().concat(logger)
  }
});

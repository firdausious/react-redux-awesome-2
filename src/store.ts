import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger"

import counterReducer from "./features/counter/counterSlice";
import usersReducer from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => {
    // setting logger

    return getDefaultMiddleware().concat(logger)
  }
});

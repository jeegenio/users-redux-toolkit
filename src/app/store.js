import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/userslice/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

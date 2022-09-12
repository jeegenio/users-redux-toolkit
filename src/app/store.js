import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/userslice/usersSlice";
import snackbarReducer from "../components/notificationSlice/snackbarSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    snackbar: snackbarReducer,
  },
});

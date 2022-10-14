import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarOpen: false,
  snackbarType: "",
  snackbarMessage: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar(state, action) {
      const { snackbarOpen, snackbarType, snackbarMessage } = action.payload;
      return { ...state, snackbarOpen, snackbarType, snackbarMessage };
    },
  },
});

export const getSnackbarDetails = (state) => state.snackbar;
export const { setSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;

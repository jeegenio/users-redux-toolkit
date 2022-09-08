import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:8000/users";

const initialState = {
  users: [],
  status: "idle", //| 'loading' | 'succeeded'| 'failed'
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
  try {
    const res = axios.get(USERS_URL);
    return [...res.data];
  } catch (e) {
    return e.message;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(name, title, department, status) {
        return {
          payload: {
            id: nanoid(),
            name,
            title,
            department,
            status,
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state) => state.users.users;

export const { addUser } = userSlice.actions;

export default userSlice.reducer;

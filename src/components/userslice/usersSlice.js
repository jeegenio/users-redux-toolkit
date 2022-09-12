import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:8000/users";

const initialState = {
  users: [],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchusers",
  async (initialState) => {
    try {
      const { data } = await axios.get(USERS_URL, initialState);
      return [...data];
    } catch (e) {
      return e.message;
    }
  }
);

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (initialState) => {
    try {
      const { data } = await axios.post(USERS_URL, initialState);
      return data;
    } catch (e) {
      return e.message;
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (initialState) => {
    const { id } = initialState;
    try {
      const { data } = await axios.put(`${USERS_URL}/${id}`, initialState);
      return data;
    } catch (e) {
      return e.message;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (initialState) => {
    const { id } = initialState || {};
    try {
      const res = await axios.delete(`${USERS_URL}/${id}`);
      if (res?.status === 200) {
        console.log("user deleted");
        return initialState;
      }
    } catch (e) {
      return e.message;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      // reducer(state, action) {
      //   state.users.push(action.payload);
      // },
      // prepare(name, title, department, status) {
      //   return {
      //     payload: {
      //       id: nanoid(),
      //       name,
      //       title,
      //       department,
      //       status,
      //     },
      //   };
      // },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(...action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could not complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const users = state.users.filter((user) => user.id !== id);
        state.users = [...users, action.payload];
        state.status = "succeeded";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete could not complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const users = state.users.filter((user) => user.id !== id);
        state.users = users;
      });
  },
});
export const selectAllUsers = (state) => state.users.users;
export const getUserStatus = (state) => state.users.status;
export const getUserError = (state) => state.users.error;

export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id === Number(userId));

// export const { addUser } = userSlice.actions;
export default userSlice.reducer;

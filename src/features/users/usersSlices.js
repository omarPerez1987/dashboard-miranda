import { createSlice } from "@reduxjs/toolkit";
import { getUsersListApiThunk } from "./usersThunks";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.data = [action.payload, ...state.data];
    },

    updateUser: (state, action) => {
      const index = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersListApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getUsersListApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getUsersListApiThunk.pending, (state, action) => {
        state.status = "pending";
      });
  },
});
export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export const getUsersData = (state) => state.users.data;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

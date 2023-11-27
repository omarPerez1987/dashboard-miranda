import { createSlice } from "@reduxjs/toolkit";
import { getUsersListApiThunk } from "./usersThunks";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
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
export const getUsersData = (state) => state.users.data;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

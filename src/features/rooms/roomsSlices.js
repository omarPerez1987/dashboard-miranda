import { createSlice } from "@reduxjs/toolkit";
import { getRoomsListApiThunk } from "./roomsThunk";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomsListApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoomsListApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getRoomsListApiThunk.pending, (state, action) => {
        state.status = "pending";
      });
  },
});
export const getRoomsData = (state) => state.rooms.data;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;

import { createSlice } from "@reduxjs/toolkit";
import { getRoomsListApiThunk } from "./roomsThunk";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addRoom: (state, action) => {
      state.data = [action.payload, ...state.data];
    },

    updateRoom: (state, action) => {
      const index = state.data.findIndex(
        (room) => room.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteRoom: (state, action) => {
      state.data = state.data.filter((room) => room.id !== action.payload);
    },
  },
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
export const { addRoom, updateRoom, deleteRoom } = roomsSlice.actions;
export const getRoomsData = (state) => state.rooms.data;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;
export const getRoomsAvailable = (state) =>
  state.rooms.data.filter((room) => room.status === "Available");
export const getRoomsBooked = (state) =>
  state.rooms.data.filter((room) => room.status === "Booked");

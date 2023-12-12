import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRoomsListApiThunk } from "./roomsThunk";
import { RoomsSliceInitialStateInterface } from "../interfaces/rooms/roomsSliceInterface";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";

const initialState: RoomsSliceInitialStateInterface = {
  data: [],
  status: "idle",
  error: undefined,
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    addRoom: (state, action: PayloadAction<RoomsInterface>): void => {
      state.data = [action.payload, ...state.data];
    },

    updateRoom: (state, action: PayloadAction<RoomsInterface>): void => {
      const index = state.data.findIndex(
        (room) => room.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteRoom: (state, action: PayloadAction<RoomsInterface>): void => {
      state.data = state.data.filter((room) => room.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomsListApiThunk.fulfilled, (state, action): void => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoomsListApiThunk.rejected, (state, action): void => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getRoomsListApiThunk.pending, (state, action): void => {
        state.status = "pending";
      });
  },
});
export const { addRoom, updateRoom, deleteRoom } = roomsSlice.actions;
export const getRoomsData = (state): RoomsInterface[] => state.rooms.data;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;
export const getRoomsAvailable = (state) =>
  state.rooms.data.filter((room) => room.status === "Available");
export const getRoomsBooked = (state) =>
  state.rooms.data.filter((room) => room.status === "Booked");

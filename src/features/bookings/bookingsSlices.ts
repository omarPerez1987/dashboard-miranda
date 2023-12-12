import { createSlice } from "@reduxjs/toolkit";
import { getBookingsListThunk } from "./bookingsThunks";
import { BookingsSliceInitialStateInterface } from "../interfaces/bookings/bookingsSliceInterface";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";

const initialState: BookingsSliceInitialStateInterface = {
  data: [],
  status: "idle",
  error: undefined,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: initialState,
  reducers: {
    addBooking: (state, action): void => {
      state.data = [action.payload, ...state.data];
    },
    updateBooking: (state, action): void => {
      const index = state.data.findIndex(
        (room) => room.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteBooking: (state, action): void => {
      state.data = state.data.filter((room) => room.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsListThunk.fulfilled, (state, action): void => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getBookingsListThunk.rejected, (state, action): void => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getBookingsListThunk.pending, (state, action): void => {
        state.status = "pending";
      });
  },
});

export const { addBooking, updateBooking, deleteBooking } =
  bookingsSlice.actions;
export const getBookingsData = (state): BookingInterface[] =>
  state.bookings.data;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;

export const getRoomsCheckIn = (state) =>
  state.bookings.data.filter((booking) => booking.check === "in");

export const getRoomsCheckOut = (state) =>
  state.bookings.data.filter((booking) => booking.check === "out");

export const getRoomsCheckPending = (state) =>
  state.bookings.data.filter((booking) => booking.check === "pending");

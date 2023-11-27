import { createSlice } from "@reduxjs/toolkit";
import { getBookingsListThunk } from "./bookingsThunks";

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getBookingsListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getBookingsListThunk.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const getBookingsData = (state) => state.bookings.data;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;

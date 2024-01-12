import { createSlice } from "@reduxjs/toolkit";
import {
  createBookingApiThunk,
  deleteBookingApiThunk,
  getAllBookingsApiThunk,
  getOneBookingApiThunk,
  updateBookingApiThunk,
} from "./bookingsThunks";
import { BookingsSliceInitialStateInterface } from "../../interfaces/bookings/bookingsSliceInterface";
import { BookingInterface } from "../../interfaces/bookings/bookingsInterface";
import { RootState } from "../../app/store";

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
        (room) => room._id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteBooking: (state, action): void => {
      state.data = state.data.filter((room) => room._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookingsApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllBookingsApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getAllBookingsApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(getOneBookingApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getOneBookingApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getOneBookingApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(createBookingApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createBookingApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = [action.payload, ...state.data];
      })
      .addCase(createBookingApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(updateBookingApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateBookingApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = state.data.map((element) =>
          element._id === action.payload._id ? action.payload : element
        );
      })
      .addCase(updateBookingApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(deleteBookingApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteBookingApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const { _id } = action.payload;
        state.data = state.data.filter((element) => element._id !== _id);
      })
      .addCase(deleteBookingApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { addBooking, updateBooking, deleteBooking } =
  bookingsSlice.actions;
export const getBookingsData = (state: RootState): BookingInterface[] =>
  state.bookings.data;

export const getBookingsStatus = (state: RootState): string =>
  state.bookings.status;
export const getBookingsError = (state: RootState): string | undefined =>
  state.bookings.error;

export const getRoomsCheckIn = (state: RootState): BookingInterface[] =>
  state.bookings.data.filter((booking) => booking.check === "checked-in");

export const getRoomsCheckOut = (state: RootState): BookingInterface[] =>
  state.bookings.data.filter((booking) => booking.check === "checked-out");

export const getRoomsCheckPending = (state: RootState): BookingInterface[] =>
  state.bookings.data.filter((booking) => booking.check === "pending");

import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../JSON/bookings.json'

export const getBookingsListThunk = createAsyncThunk(
  "bookings/getBookingsFromApi",
  () => {
    return bookings;
    //  throw new Error("Error al obtener los datos de los usuarios");
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from "../../JSON/bookings.json";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";

export const getBookingsListThunk = createAsyncThunk(
  "bookings/getBookingsFromApi",
  async (): Promise<BookingInterface[]> => {
    return bookings;
    //  throw new Error("Error al obtener los datos de los usuarios");
  }
);

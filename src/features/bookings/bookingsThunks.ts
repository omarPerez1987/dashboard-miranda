import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from "../../JSON/bookings.json";
import { BookingInterface } from "../../interfaces/bookings/bookingsInterface";

export const getBookingsListThunk = createAsyncThunk(
  "bookings/getBookingsFromApi",
  async (): Promise<BookingInterface[]> => {
    fetch('https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api/bookings')
    return bookings;
    //  throw new Error("Error al obtener los datos de los usuarios");
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAdminTokenThunk = createAsyncThunk(
  "bookings/getBookingsFromApi",
  async (): Promise<void> => {
    fetch('https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api/login')
    .then(response => response.json)
    .then(data => console.log(data));
    
    //  throw new Error("Error al obtener los datos de los usuarios");
  }
);
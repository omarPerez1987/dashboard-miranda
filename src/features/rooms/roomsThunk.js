import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../JSON/rooms.json';

export const getRoomsListApiThunk = createAsyncThunk(
  "rooms/getRoomsFromApi",
  async () => {
    return rooms;
    // throw new Error("Error al obtener los datos de los usuarios");
  }
);

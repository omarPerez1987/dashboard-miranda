import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from "../../JSON/rooms.json";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";


export const getRoomsListApiThunk = createAsyncThunk(
  "rooms/getRoomsFromApi",
  async (): Promise<RoomsInterface[]> => {
    return rooms;
    // throw new Error("Error al obtener los datos de los usuarios");
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../JSON/users.json";

export const getUsersListApiThunk = createAsyncThunk(
  "user/getUsersFromApi",
  async () => {
    return users;
    // throw new Error("Error al obtener los datos de los usuarios");
  }
);

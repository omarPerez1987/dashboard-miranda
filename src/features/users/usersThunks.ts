import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../JSON/users.json";
import { UsersInterfaces } from "../../interfaces/users/usersInterfaces";

export const getUsersListApiThunk = createAsyncThunk(
  "user/getUsersFromApi",
  async (): Promise<UsersInterfaces[]> => {
    return users;
    // throw new Error("Error al obtener los datos de los usuarios");
  }
);

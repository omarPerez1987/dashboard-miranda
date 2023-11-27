import { createAsyncThunk } from "@reduxjs/toolkit";
import contacts from "../../JSON/contact.json";

export const getContactsListApiThunk = createAsyncThunk(
  "contact/getRoomsFromApi",
  async () => {
    return contacts;
    // throw new Error("Error al obtener los datos de los usuarios");
  }
);

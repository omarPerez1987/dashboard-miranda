import { createAsyncThunk } from "@reduxjs/toolkit";
import contacts from "../../JSON/contact.json";
import { ContactInterface } from "../interfaces/contact/contactInterface";

export const getContactsListApiThunk = createAsyncThunk(
  "contact/getRoomsFromApi",
  async (): Promise<ContactInterface[]> => {
    return contacts;
    // throw new Error("Error al obtener los datos de los usuarios");
  }
);

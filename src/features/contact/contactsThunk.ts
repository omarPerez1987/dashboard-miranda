import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getBaseUrl } from "../../mode/debugMode";


interface ApiRequest {
  body?: Record<string, unknown>;
  token?: string;
  _id?: string;
}
const BASE_URL = 'http://localhost:3001/api';
const token = localStorage.getItem("token") || undefined;

// Thunk para obtener la lista de contactos
export const getAllContactsApiThunk = createAsyncThunk(
  "contacts/getAllContactsApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/contacts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      return responseData.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.message });
    }
  }
);

// Thunk para actualizar un contacto
export const updateContactsApiThunk = createAsyncThunk(
  "contacts/updateContactsApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    // console.log(body.body)
    try {
      const response = await fetch(`${BASE_URL}/contacts`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      return responseData.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.message });
    }
  }
);

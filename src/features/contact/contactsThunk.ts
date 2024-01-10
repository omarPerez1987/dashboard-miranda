import { createAsyncThunk } from "@reduxjs/toolkit";

interface ApiRequest {
  body?: Record<string, unknown>;
  token?: string;
  _id?: string;
}

const token = localStorage.getItem("adminToken") || undefined;
const BASE_URL = "http://localhost:3001/api";
// "https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api";

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

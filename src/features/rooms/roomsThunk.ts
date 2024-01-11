import { createAsyncThunk } from "@reduxjs/toolkit";

interface ApiRequest {
  body?: Record<string, any>;
  token?: string;
  _id?: string;
}

const BASE_URL = "http://localhost:3001/api";
// "https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api";
const token = localStorage.getItem("token") || undefined;

// Thunk para obtener la lista de habitaciones
export const getAllRoomsApiThunk = createAsyncThunk(
  "rooms/getAllRoomsApiThunk",
  async () => {
    try {
      const response = await fetch(`${BASE_URL}/rooms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      return responseData.data;
    } catch (error: any) {
      return { message: error.message };
    }
  }
);

// Thunk para obtener una sola habitacion
export const getOneRoomApiThunk = createAsyncThunk(
  "rooms/getOneRoomApiThunk",
  async ({ body, _id }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/rooms/${_id}`, {
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

// Thunk para crear una habitacion
export const createRoomApiThunk = createAsyncThunk(
  "rooms/createRoomApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/rooms`, {
        method: "POST",
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
      console.log(responseData.data)
      return responseData.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.message });
    }
  }
);

// Thunk para actualizar una habitacion
export const updateRoomApiThunk = createAsyncThunk(
  "rooms/updateRoomApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/rooms`, {
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

// Thunk para eliminar una habitacion
export const deleteRoomApiThunk = createAsyncThunk(
  "rooms/deleteRoomApiThunk",
  async ({ _id }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/rooms/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      // console.log(responseData)
      return responseData.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.message });
    }
  }
);

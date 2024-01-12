import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getBaseUrl } from "../../mode/debugMode";

interface ApiRequest {
  body?: Record<string, any>;
  token?: string;
  _id?: string;
}

const BASE_URL = 'http://localhost:3001/api';
const token = localStorage.getItem("token") || undefined;

// Thunk para obtener la lista de bookings
export const getAllBookingsApiThunk = createAsyncThunk(
  "bookings/getAllBookingsApiThunk",
  async () => {
    try {
      const response = await fetch(`${BASE_URL}/bookings`, {
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

// Thunk para obtener una sola reserva
export const getOneBookingApiThunk = createAsyncThunk(
  "bookings/getOneBookingApiThunk",
  async ({_id }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/bookings/${_id}`, {
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
      return rejectWithValue({ message: error.message });
    }
  }
);

// Thunk para crear una booking
export const createBookingApiThunk = createAsyncThunk(
  "bookings/createBookingApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/bookings`, {
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
      return responseData.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.message });
    }
  }
);

// Thunk para actualizar una booking
export const updateBookingApiThunk = createAsyncThunk(
  "bookings/updateBookingApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/bookings`, {
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

// Thunk para eliminar una booking
export const deleteBookingApiThunk = createAsyncThunk(
  "bookings/deleteBookingApiThunk",
  async ({ _id }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/bookings/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

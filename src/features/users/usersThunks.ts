import { createAsyncThunk } from "@reduxjs/toolkit";
// import { BASE_URL } from "../../mode/debugMode";

interface ApiRequest {
  body?: Record<string, any>;
  token?: string;
  _id?: string;
}
const BASE_URL = 'http://localhost:3001/api';

const token = localStorage.getItem("token") || undefined;

// Thunk para obtener la lista de usuarios
export const getAllUsersApiThunk = createAsyncThunk(
  "users/getUsersListApiThunk",
  async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
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

// Thunk para obtener un solo usuario
export const getOneUserApiThunk = createAsyncThunk(
  "users/getOneUserApiThunk",
  async ({ body, _id }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${_id}`, {
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

// Thunk para crear un usuario
export const createUserApiThunk = createAsyncThunk(
  "users/createUserApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
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

// Thunk para actualizar un usuario
export const updateUserApiThunk = createAsyncThunk(
  "users/updateUserApiThunk",
  async ({ body }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
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

// Thunk para eliminar un usuario
export const deleteUserApiThunk = createAsyncThunk(
  "users/deleteUserApiThunk",
  async ({ _id }: ApiRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${_id}`, {
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

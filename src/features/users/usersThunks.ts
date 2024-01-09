import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, deleteUser, updateUser } from "./usersSlices";

interface RequestConfig {
  method: string;
  body?: Record<string, unknown>;
  token?: string;
}

const BASE_URL =
  // "https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api";
  "http://localhost:3001/api";

export const getUsersListApiThunk = createAsyncThunk(
  "users/usersApiThunk",
  async (config: RequestConfig, { dispatch }) => {
    const { method, body, token } = config;
    const endpoint = "users";

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(`${BASE_URL}/${endpoint}`, options);

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      if (method === "POST") {
        dispatch(addUser(responseData.data));
      }
      if (method === "PUT") {
        return 'caca'
        // dispatch(updateUser(responseData.data));
      }
      if (method === "DELETE") {
        dispatch(deleteUser(responseData.data));
      }

      return responseData.data;

    } catch (error: any) {
      console.error("Error en la solicitud:", error.message);
    }
  }
);

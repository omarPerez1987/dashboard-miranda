import { createAsyncThunk } from "@reduxjs/toolkit";

interface RequestConfig {
  method: string;
  body?: Record<string, unknown>;
  token?: string;
}

const BASE_URL =
  "https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api";
// const BASE_URL = "http://localhost:3001/api";

export const getUsersListApiThunk = createAsyncThunk(
  "users/usersApiThunk",
  async (config: RequestConfig) => {
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
      return responseData.users;
    } catch (error: any) {
      console.error("Error en la solicitud:", error.message);
      throw error;
    }
  }
);

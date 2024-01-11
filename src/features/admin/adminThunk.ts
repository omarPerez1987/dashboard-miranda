import { createAsyncThunk } from "@reduxjs/toolkit";

interface RequestConfig {
  body?: Record<string, unknown>;
}

const BASE_URL =
  // "https://m4lpn4lgy2.execute-api.eu-west-3.amazonaws.com/dev/api";
 "http://localhost:3001/api";

export const getAdminTokenThunk = createAsyncThunk(
  "admin/postTokenFromApi",
  async ({body}: RequestConfig) => {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      const options: RequestInit = {
        method: "POST",
        headers,
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(`${BASE_URL}/login`, options);

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData.token)
      localStorage.setItem("token", responseData.token);
      return responseData.token;
    } catch (error: any) {
      console.error("Error en la solicitud:", error.message);
      throw error;
    }
  }
);

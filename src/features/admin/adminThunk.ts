import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBaseUrl } from "../../mode/debugMode";

interface RequestConfig {
  body?: Record<string, unknown>;
}

const BASE_URL = getBaseUrl()

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

      localStorage.setItem("token", responseData.token);
      return responseData.token;
    } catch (error: any) {
      console.error("Error en la solicitud:", error.message);
      throw error;
    }
  }
);

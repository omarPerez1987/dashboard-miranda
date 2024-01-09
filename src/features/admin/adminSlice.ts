import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AdminInterface } from "../../interfaces/admin/adminInterface";
import { getAdminTokenThunk } from "./adminThunk";

interface AdminData {
  data: AdminInterface[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
  token: string | undefined;
}

const initialState: AdminData = {
  data: [],
  status: "idle",
  error: undefined,
  token: undefined,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    addAdmin: (state, action): void => {
      state.data = [action.payload];
    },
    updateAdmin: (state, action): void => {
      state.data = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdminTokenThunk.fulfilled, (state, action): void => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.token = action.payload.token;
      })
      .addCase(getAdminTokenThunk.rejected, (state, action): void => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getAdminTokenThunk.pending, (state, action): void => {
        state.status = "pending";
      });
  },
});

export const { updateAdmin, addAdmin } = adminSlice.actions;
export const getTokenData = (state: RootState): AdminInterface[] =>
  state.admin.data;
export const getTokenStatus = (state: RootState): string =>
  state.admin.status;
export const getTokenError = (state: RootState): string | undefined =>
  state.admin.error;
export const getToken = (state: RootState): string | undefined =>
  state.admin.token;

export const getAdminData = (state: RootState): AdminInterface[] =>
  state.admin.data;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AdminInterface } from "../../interfaces/admin/adminInterface";
import { getAdminTokenThunk } from "./adminThunk";

interface AdminData {
  data: AdminInterface | null;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
  token: string | undefined;
}

const initialState: AdminData = {
  data: null,
  status: "idle",
  error: undefined,
  token: undefined,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<AdminInterface>): void => {
      state.data = action.payload;
    },
    updateAdmin: (state, action: PayloadAction<AdminInterface>): void => {
      state.data = action.payload;
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
export const getAdminData = (state: RootState): AdminInterface | null =>
  state.admin.data;
export const getTokenStatus = (state: RootState): string =>
  state.admin.status;
export const getTokenError = (state: RootState): string | undefined =>
  state.admin.error;
export const getToken = (state: RootState): string | undefined =>
  state.admin.token;

import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: [],
  },
  reducers: {
    addAdmin: (state, action) => {
      state.data = [action.payload];
    },
    updateAdmin: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const { updateAdmin, addAdmin } = adminSlice.actions;
export const getAdminData = (state) => state.admin.data;

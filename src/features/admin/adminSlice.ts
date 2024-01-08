import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AdminInterface } from "../../interfaces/admin/adminInterface";

interface AdminData {
  data: AdminInterface[];
}

const initialState: AdminData = {
  data: [],
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
});

export const { updateAdmin, addAdmin } = adminSlice.actions;
export const getAdminData = (state: RootState): AdminInterface[] =>
  state.admin.data;

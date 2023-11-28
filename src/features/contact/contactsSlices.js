import { createSlice } from "@reduxjs/toolkit";
import { getContactsListApiThunk } from "./contactsThunk";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateArchived: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsListApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getContactsListApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getContactsListApiThunk.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const { updateArchived } = contactsSlice.actions;
export const getContactData = (state) => state.contacts.data;
export const getContactStatus = (state) => state.contacts.status;
export const getContactsError = (state) => state.contacts.error;

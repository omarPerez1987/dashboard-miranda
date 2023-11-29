import { createSlice } from "@reduxjs/toolkit";
import { getContactsListApiThunk } from "./contactsThunk";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    data: [],
    filteredData: [],
    isArchivedFilterActive: false,
    status: "idle",
    error: null,
  },
  reducers: {
    archived: (state, action) => {
      state.isArchivedFilterActive = action.payload;
      if (action.payload) {
        state.filteredData = state.data.filter(
          (contact) => contact.archived === "archived"
        );
      } else {
        state.filteredData = state.data;
      }
    },

    updateArchived: (state, action) => {
      state.data = action.payload;
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

export const { updateArchived, archived } = contactsSlice.actions;
export const getContactData = (state) =>
  state.contacts.isArchivedFilterActive
    ? state.contacts.filteredData
    : state.contacts.data;
export const getContactStatus = (state) => state.contacts.status;
export const getContactsError = (state) => state.contacts.error;

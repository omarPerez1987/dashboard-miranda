import { createSlice } from "@reduxjs/toolkit";
import { getContactsListApiThunk } from "./contactsThunk";
import { ContactsSliceInitialStateInterface } from "../interfaces/contact/contactSliceInterface";
import { ContactInterface } from "../interfaces/contact/contactInterface";

const initialState: ContactsSliceInitialStateInterface = {
  data: [],
  status: "idle",
  error: undefined,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    updateArchived: (state, action): void => {
      const contacts = state.data;
      const index = contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        const updatedContact = {
          ...contacts[index],
          archived: !contacts[index].archived,
        };
        state.data = contacts.map((contact, i) =>
          i === index ? updatedContact : contact
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsListApiThunk.fulfilled, (state, action): void => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getContactsListApiThunk.rejected, (state, action): void => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getContactsListApiThunk.pending, (state, action): void => {
        state.status = "pending";
      });
  },
});

export const { updateArchived } = contactsSlice.actions;
export const getContactsData = (state): ContactInterface[] => state.contacts.data;
export const getContactStatus = (state) => state.contacts.status;
export const getContactsError = (state) => state.contacts.error;

export const getContactsArchived = (state) =>
  state.contacts.data.filter((contact) => contact.archived === true);
export const getContactsPublish = (state) =>
  state.contacts.data.filter((contact) => contact.archived === false);

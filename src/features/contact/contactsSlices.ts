import { createSlice } from "@reduxjs/toolkit";
import { getAllContactsApiThunk, updateContactsApiThunk } from "./contactsThunk";
import { RootState } from "../../app/store";
import { ContactsSliceInitialStateInterface } from "../../interfaces/contact/contactSliceInterface";
import { ContactInterface } from "../../interfaces/contact/contactInterface";

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
        (contact) => contact._id === action.payload.id
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
    .addCase(getAllContactsApiThunk.pending, (state) => {
      state.status = "pending";
    })
    .addCase(getAllContactsApiThunk.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    })
    .addCase(getAllContactsApiThunk.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    })

    
    .addCase(updateContactsApiThunk.pending, (state) => {
      state.status = "pending";
    })
    .addCase(updateContactsApiThunk.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = state.data.map((element) =>
        element._id === action.payload._id ? action.payload : element
      );
    })
    .addCase(updateContactsApiThunk.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    })
  },
});

export const { updateArchived } = contactsSlice.actions;


export const getContactsData = (state: RootState): ContactInterface[] =>
  state.contacts.data;
export const getContactStatus = (state: RootState): string =>
  state.contacts.status;
export const getContactsError = (state: RootState): string | undefined =>
  state.contacts.error;

export const getContactsArchived = (state: RootState): ContactInterface[] =>
  state.contacts.data.filter((contact) => contact.archived === true);
export const getContactsPublish = (state: RootState): ContactInterface[] =>
  state.contacts.data.filter((contact) => contact.archived === false);

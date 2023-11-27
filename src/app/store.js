import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users/usersSlices";
import { roomsSlice } from "../features/rooms/roomsSlices";
import { contactsSlice } from "../features/contact/contactsSlices";
import { bookingsSlice } from "../features/bookings/bookingsSlices";


export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    rooms: roomsSlice.reducer,
    contacts: contactsSlice.reducer,
    bookings: bookingsSlice.reducer,
  }
});


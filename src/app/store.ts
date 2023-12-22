import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users/usersSlices";
import { roomsSlice } from "../features/rooms/roomsSlices";
import { contactsSlice } from "../features/contact/contactsSlices";
import { bookingsSlice } from "../features/bookings/bookingsSlices";
import { adminSlice } from "../features/admin/adminSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    rooms: roomsSlice.reducer,
    contacts: contactsSlice.reducer,
    bookings: bookingsSlice.reducer,
    admin: adminSlice.reducer,
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
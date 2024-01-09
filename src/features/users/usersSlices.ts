import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUsersListApiThunk } from "./usersThunks";
import { UsersSliceInitialStateInterface } from "../../interfaces/users/userSliceInterface";
import { UsersInterfaces } from "../../interfaces/users/usersInterfaces";
import { RootState } from "../../app/store";

const initialState: UsersSliceInitialStateInterface = {
  data: [],
  status: "idle",
  error: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action): void => {
      state.data = [action.payload, ...state.data];
    },

    updateUser: (state, action): void => {
      console.log(action.payload._id)
      const index = state.data.findIndex(
        (user) => user._id === action.payload._id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteUser: (state, action): void => {
      state.data = state.data.filter((user) => user._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersListApiThunk.fulfilled, (state, action): void => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getUsersListApiThunk.rejected, (state, action): void => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getUsersListApiThunk.pending, (state, action): void => {
        state.status = "pending";
      });
  },
});
export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export const getUsersData = (state: RootState): UsersInterfaces[] =>
  state.users.data;
export const getUsersStatus = (state: RootState): string => state.users.status;
export const getUsersError = (state: RootState): string | undefined =>
  state.users.error;

export const getUsersActive = (state: RootState): UsersInterfaces[] =>
  state.users.data.filter((user) => user.status === "active");
export const getUsersInactive = (state: RootState): UsersInterfaces[] =>
  state.users.data.filter((user) => user.status === "inactive");

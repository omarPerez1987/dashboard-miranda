import { createSlice } from "@reduxjs/toolkit";

import { UsersSliceInitialStateInterface } from "../../interfaces/users/userSliceInterface";
import { UsersInterfaces } from "../../interfaces/users/usersInterfaces";
import { RootState } from "../../app/store";
import {
  createUserApiThunk,
  deleteUserApiThunk,
  getAllUsersApiThunk,
  getOneUserApiThunk,
  updateUserApiThunk,
} from "./usersThunks";

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
      const index = state.data.findIndex(
        (room: any) => room.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteUser: (state, action): void => {
      state.data = state.data.filter((room: any) => room.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllUsersApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getAllUsersApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })



      .addCase(getOneUserApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getOneUserApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getOneUserApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })



      .addCase(createUserApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createUserApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = [action.payload, ...state.data]
      })
      .addCase(createUserApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })



      .addCase(updateUserApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateUserApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = state.data.map((element) =>
          element._id === action.payload._id ? action.payload : element
        );
      })
      .addCase(updateUserApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })


      
      .addCase(deleteUserApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteUserApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const { _id } = action.payload;
        state.data = state.data.filter((element) => element._id !== _id);
      })
      .addCase(deleteUserApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
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

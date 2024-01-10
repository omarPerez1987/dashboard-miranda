import { createSlice } from "@reduxjs/toolkit";
import {
  createRoomApiThunk,
  deleteRoomApiThunk,
  getAllRoomsApiThunk,
  getOneRoomApiThunk,
  updateRoomApiThunk,
} from "./roomsThunk";
import { RoomsSliceInitialStateInterface } from "../../interfaces/rooms/roomsSliceInterface";
import { RoomsInterface } from "../../interfaces/rooms/roomsInterface";
import { RootState } from "../../app/store";

const initialState: RoomsSliceInitialStateInterface = {
  data: [],
  status: "idle",
  error: undefined,
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    // addRoom: (state, action): void => {
    //   state.data = [action.payload, ...state.data];
    // },
    // updateRoom: (state, action): void => {
    //   const index = state.data.findIndex(
    //     (room) => room.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.data[index] = action.payload;
    //   }
    // },
    // deleteRoom: (state, action): void => {
    //   state.data = state.data.filter((room) => room.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoomsApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllRoomsApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getAllRoomsApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(getOneRoomApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getOneRoomApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getOneRoomApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(createRoomApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createRoomApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = [action.payload, ...state.data];
      })
      .addCase(createRoomApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(updateRoomApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateRoomApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = state.data.map((element) =>
          element._id === action.payload._id ? action.payload : element
        );
      })
      .addCase(updateRoomApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      .addCase(deleteRoomApiThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteRoomApiThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const { _id } = action.payload;
        state.data = state.data.filter((element) => element._id !== _id);
      })
      .addCase(deleteRoomApiThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getRoomsData = (state: RootState): RoomsInterface[] =>
  state.rooms.data;
export const getRoomsStatus = (state: RootState): string => state.rooms.status;
export const getRoomsError = (state: RootState): string | undefined =>
  state.rooms.error;
export const getRoomsAvailable = (state: RootState) =>
  state.rooms.data.filter((room) => room.status === "available");
export const getRoomsBooked = (state: RootState) =>
  state.rooms.data.filter((room) => room.status === "booked");

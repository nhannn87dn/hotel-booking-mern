import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  success: false,
  available: false,
  error: false,
  message: "",
};

/*
  AsyncThunk Actions
  Alway before the Slice
*/
export const checkAvailableRoom = createAsyncThunk(
  "room/checkAvailableRoom",
  async (data) => {
    try {
      const response = await axios.post(
        process.env.apiEndPoint + "/v1/rooms/search",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("filterRooms",error.response.data);
    }
  }
);


const checkAvailableRoomSlice = createSlice({
  name: "available",
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.rooms,
      };
    },
   
    [checkAvailableRoom.pending]: (state) => {
      state.loading = true;
      state.message = "pending";
    },
    [checkAvailableRoom.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.available = action.payload;
      state.error = action.payload.status !== 200 ? true : false;
      state.message = action.payload.status !== 200 ? action.payload.message : "success";
    },
    [checkAvailableRoom.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.available = false;
      state.error = true;
      state.message = action.payload.message;
    },
  },
});


//Selector List
export const availableSelector = (state) => state.available;

export default checkAvailableRoomSlice.reducer;

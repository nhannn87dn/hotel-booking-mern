import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  success: false,
  rooms: [],
  error: false,
  message: "",
};

/*
  AsyncThunk Actions
  Alway before the Slice
*/
export const filterRooms = createAsyncThunk(
  "room/filterRooms",
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

export const getAllRooms = createAsyncThunk("room/getAllRooms", async () => {
  try {
    const response = await axios.get(
      process.env.apiEndPoint + "/v1/rooms/list"
    );
    return response.data;
  } catch (error) {
    console.log("getAllRooms",error.response.data);
  }
});

const roomsSlice = createSlice({
  name: "room",
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
    [getAllRooms.pending]: (state) => {
      state.loading = true;
      state.message = "pending";
    },
    [getAllRooms.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.rooms = action.payload;
      state.error = action.payload.status !== 200 ? true : false;
      state.message = action.payload.status !== 200 ? action.payload.message : "success";
    },
    [getAllRooms.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.rooms = [];
      state.error = true;
      state.message = action.payload.message;
    },
    [filterRooms.pending]: (state) => {
      state.loading = true;
      state.message = "pending";
    },
    [filterRooms.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.rooms = action.payload;
      state.error = action.payload.status !== 200 ? true : false;
      state.message = action.payload.status !== 200 ? action.payload.message : "success";
    },
    [filterRooms.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.rooms = [];
      state.error = true;
      state.message = action.payload.message;
    },
  },
});


//Selector List
export const roomsSelector = (state) => state.room;

export default roomsSlice.reducer;

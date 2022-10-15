import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  success: false,
  rooms: [],
  error: false,
  message: ''
}

// AsyncThunk Actions | Generates pending, fulfilled and rejected action types
export const filterRooms = createAsyncThunk('room/filterRooms', (payload) => {
  console.log(payload);
  return axios
    .post(
      process.env.apiEndPoint + '/v1/rooms/search',
      payload,
      {
      headers: {
          'Content-Type': 'application/json',
      }}
    )
    .then(response => response.data)
    .catch(error => error);
})

export const getAllRooms = createAsyncThunk('room/getAllRooms', () => {
  return axios
    .get(process.env.apiEndPoint + '/v1/rooms/list')
    .then(response => response.data)
    .catch(error => error);
})

const roomsSlice = createSlice({
  name: 'room',
  initialState,
  extraReducers: builder => {
    builder.addCase(filterRooms.pending, state => {
      state.loading = true;
      state.message = "pending";
    })
    builder.addCase(filterRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.rooms = action.payload;
      state.error = action.payload.status !== 200 ?  true : false;
      state.message = action.payload.status !== 200 ?  action.payload.message : "success";
    })
    builder.addCase(filterRooms.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.rooms = [];
      state.error = true;
      state.message = action.payload.message;
    })
    builder.addCase(getAllRooms.pending, state => {
      state.loading = true;
      state.message = "pending";
    })
    builder.addCase(getAllRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.rooms = action.payload;
      state.error = action.payload.status !== 200 ?  true : false;
      state.message = action.payload.status !== 200 ?  action.payload.message : "success";
    })
    builder.addCase(getAllRooms.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.rooms = [];
      state.error = true;
      state.message = action.payload.message;
    })
  }
});


//selector
export const roomsSelector = (state) => state.room;

export default roomsSlice.reducer
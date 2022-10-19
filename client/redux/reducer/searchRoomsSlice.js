import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  startDate: "",
  endDate: "",
  adults: 1,
  children: 0,
  rooms: 1
}

export const searchRoomsSlice = createSlice({
  name: 'searchroom',
  initialState,
  reducers: {
    updateAll: (state, action) => {
      state.startDate = action.payload.startDate
      state.endDate = action.payload.endDate
      state.adults = action.payload.adults
      state.children = action.payload.children
      state.rooms = action.payload.rooms
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateAll  } = searchRoomsSlice.actions;

//selector


export default searchRoomsSlice.reducer
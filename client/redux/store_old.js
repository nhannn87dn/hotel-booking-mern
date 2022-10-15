import { configureStore } from '@reduxjs/toolkit'
import roomReducer from '../components/booking/room/roomSlice';
import searchRoomReducer from '../components/booking/SearchRooms/searchRoomsSlice'
import settingsSliceReducer from "../components/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    searchroom: searchRoomReducer,
    setting: settingsSliceReducer
  },
 devTools: process.env.NODE_ENV !== 'production',
})
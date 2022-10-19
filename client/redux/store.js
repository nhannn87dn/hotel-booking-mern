import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

import roomReducer from './reducer/roomSlice';
import searchRoomReducer from './reducer/searchRoomsSlice'
import settingsReducer from "./reducer/settingsSlice";

const makeStore = () => configureStore({
  reducer: {
    rooms: roomReducer,
    searchroom: searchRoomReducer,
    settings: settingsReducer
  },
  devtools: true
})


export const wrapper = createWrapper(makeStore,{debug: true})
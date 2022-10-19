import axios from 'axios'
import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/*
  AsyncThunk Actions
  Alway before the Slice
*/
export const getSettings = createAsyncThunk('setting/getSettings',  async () => {
  
  try {
    const response = await axios.get(
      process.env.apiEndPoint + "/v1/settings/list"
    );
    //console.log("getSettings",response.data);
    return response.data;
  } catch (error) {
    console.log("getSettings Error",error.response.data);
  }
  
})

/** Slice */
const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    loading: false,
    success: false,
    settings: {},
    error: false,
    message: ''
  },
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
          ...state,
          ...payload.settings,
      };
  },
    [getSettings.pending]: (state) => {
      state.loading = true;
      state.message = "pending";
    },
    [getSettings.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.settings = action.payload;
      state.error = action.payload.status !== 200 ? true : false;
      state.message = action.payload.status !== 200 ? action.payload.message : "success";
    },
    [getSettings.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.settings = {};
      state.error = true;
      state.message = action.payload.message;
    },
  }
});

export const { updateMessage  } = settingsSlice.actions;
//selector
export const settingSelector = (state) => state.settings;

export default settingsSlice.reducer
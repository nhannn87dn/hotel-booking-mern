import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  success: false,
  settings: {},
  error: false,
  message: ''
}

export const getSettings = createAsyncThunk('setting/getSettings', () => {
  return axios
    .get(process.env.apiEndPoint + '/v1/settings/list')
    .then(response => response.data)
    .catch(error => error);
})

const settingsSlice = createSlice({
  name: 'setting',
  initialState,
  extraReducers: builder => {
    builder.addCase(getSettings.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.settings = action.payload;
      state.error = action.payload.status !== 200 ?  true : false;
      state.message = action.payload.status !== 200 ?  action.payload.message : "success";
    })
    builder.addCase(getSettings.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.settings = {};
      state.error = true;
      state.message = action.payload.message;
    })
  }
});


//selector
export const settingSelector = (state) => state.setting;

export default settingsSlice.reducer
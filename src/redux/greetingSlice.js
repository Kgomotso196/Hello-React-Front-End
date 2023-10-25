import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/greetings/random';

const initialState = {
  greeting: {},
  status: 'idle',
  loading: false,
  error: null,
};

export const fetchgreetings = createAsyncThunk('greetings/fetchgreetings', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchgreetings.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchgreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload;
        state.loading = false;
      })
      .addCase(fetchgreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reservegreeting } = greetingsSlice.actions;

export default greetingsSlice.reducer;

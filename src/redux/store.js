import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingsSlice,
  },
});
export default store;

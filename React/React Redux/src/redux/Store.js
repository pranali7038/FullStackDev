import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/CounterSlice'; // Import the reducer, not the whole slice

export default configureStore({
  reducer: {
    counter: counterReducer, // Register the reducer under 'counter'
  },
});

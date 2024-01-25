// store.js
import { configureStore } from '@reduxjs/toolkit';
import executiveReducer from './reducers/executiveReducer'; // Adjust the path

const store = configureStore({
  reducer: {
    executive: executiveReducer,
    // Add other reducers if you have them
  },
});

export default store;

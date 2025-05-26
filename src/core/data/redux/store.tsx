import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import commonSlice from './commonSlice';

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    commonSlice: commonSlice
  },
});

export default store;

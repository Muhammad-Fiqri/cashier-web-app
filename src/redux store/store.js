import { configureStore } from '@reduxjs/toolkit';
import billSlice from './billSlice';

export default configureStore({
  reducer: {
    bill: billSlice,
  },
})
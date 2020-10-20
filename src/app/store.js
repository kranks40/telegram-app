import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import threadReducer from '../features/threadSlices';

export default configureStore({
  reducer: {
    user: userReducer,
    thread: threadReducer
  },
});

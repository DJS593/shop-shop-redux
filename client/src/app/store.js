// using example from redux tutorial: https://redux.js.org/tutorials/essentials/part-2-app-structure

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
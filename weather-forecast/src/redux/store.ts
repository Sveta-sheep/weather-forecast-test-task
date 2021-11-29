import weatherSlice from './weatherReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: weatherSlice
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
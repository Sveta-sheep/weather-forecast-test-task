import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
// const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
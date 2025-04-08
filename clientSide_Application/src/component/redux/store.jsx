import {configureStore } from '@reduxjs/toolkit';
import truthReducer  from "../redux/slice.jsx";

export const store = configureStore({
  reducer: {login: truthReducer }
  })
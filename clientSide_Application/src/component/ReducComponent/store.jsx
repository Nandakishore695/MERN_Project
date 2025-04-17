import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/authSlice.jsx';
import cartReducer from "./feature/acrtSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
import { createSlice } from "@reduxjs/toolkit";

// Define the slice
export const truthSlice = createSlice({
  name: "login", // Corrected name
  initialState: { value: null, cartValue: 0 }, // Initial value

  // Reducers defines the logic and the state
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
    cartAdd: (state) => {
      state.cartValue = state.cartValue + 1 ;
    },
  },
});

// Export actions and reducer
export const { login, logout, cartAdd } = truthSlice.actions;
export default truthSlice.reducer
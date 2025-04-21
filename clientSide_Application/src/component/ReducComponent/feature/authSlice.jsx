import { createSlice } from '@reduxjs/toolkit';

const getInitialAuthState = () => {
  const isAuth = localStorage.getItem("isAuthenticated");
  return {
    isAuthenticated: isAuth === "true" ? true : false,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialAuthState(),
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true"); // 🔐 persist
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false"); // 🧹 clear
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
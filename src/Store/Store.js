import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialValue = {
  isLogin: false
};

const loginSlice = createSlice({
  name: "Login",
  initialState: initialValue,
  reducers: {
    isLogin(state) {
      state.isLogin = true;
    }
  }
});

export const store = configureStore({
  reducer: { isLogin: loginSlice.reducer }
});

export const actionTypes = loginSlice.actions;

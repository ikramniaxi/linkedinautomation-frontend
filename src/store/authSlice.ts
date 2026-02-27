import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  userData: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  userData: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
// redux/features/user/userSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    setBiodataId: (state, action) => {
      if (state.user) {
        state.user.biodataId = action.payload;
        localStorage.setItem(
          'user',
          JSON.stringify({ ...state.user, biodataId: action.payload })
        );
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    
    loadFromStorage: (state) => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      if (token && user) {
        state.token = token;
        state.user = JSON.parse(user);
      }
    },
  },
});

// ✅ এই লাইন যোগ করো:
export const userReducer = userSlice.reducer;

export const { setCredentials, logout, loadFromStorage , setBiodataId } = userSlice.actions;

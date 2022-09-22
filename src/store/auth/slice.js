import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'no-authenticated',
  uid: null,
  rol: null,
  email: null,
  displayName: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.rol = payload.rol;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'non-authenticated';
      state.uid = null;
      state.email = null;
      state.rol = null;
      state.displayName = null;
      state.errorMessage = payload;
    },
    checking: (state) => {
      state.status = 'checking';
      state.uid = null;
      state.email = null;
      state.rol = null;
      state.displayName = null;
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checking } = authSlice.actions;

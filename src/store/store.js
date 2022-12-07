import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/slice';
import { suppliersSlice } from './suppliers/suppliersSlice';

export const store = configureStore({
  reducer: { auth: authSlice.reducer, suppliers: suppliersSlice.reducer },
});

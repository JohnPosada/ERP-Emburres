import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRouter } from './auth/router/AuthRouter';
import { HomePage } from './home/page/HomePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRouter />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from './router/PrivateRoutes';
import { LoginPage } from './auth/pages/LoginPage';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        {status === 'authenticated' ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<LoginPage />} />
        )}
        {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
      </Routes>
    </>
  );
};

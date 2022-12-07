import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from './router/PrivateRoutes';
import { LoginPage } from './auth/pages/LoginPage';
import { AuthRouter } from './auth/router/AuthRouter';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        {status === 'authenticated' ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <>
            <Route path="/*" element={<AuthRouter />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from './router/PrivateRoutes';
import { LoginPage } from './auth/pages/LoginPage';
import { VehicleHome } from './vehicleControl/pages/VehicleHome';
import Create from './vehicleControl/components/Create';
import Edit from './vehicleControl/components/Edit';
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
        {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
        <Route path="/vehicleHome" element={<VehicleHome />} />
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </>
  );
};

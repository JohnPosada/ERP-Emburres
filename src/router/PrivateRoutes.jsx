import React from 'react';
import { Header } from '../ui/layout/Header';
import { SideBar } from '../ui/layout/SideBar';

export const PrivateRoutes = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        {/* <Routes>
              <Route path="*" element={<HomePage />} />
            </Routes> */}
      </div>
    </>
  );
};

import React from 'react';
import { Header } from '../ui/layout/Header';
import { SideBar } from '../ui/layout/SideBar';
import { Footer } from '../ui/layout/Footer';

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
      <Footer />
    </>
  );
};

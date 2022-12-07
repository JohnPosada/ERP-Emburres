import React from 'react';
import { Header } from '../ui/layout/Header';
import { SideBar } from '../ui/layout/SideBar';
import { Footer } from '../ui/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { SuppliersPage } from '../suppliers/page/SuppliersPage';
import { SuppliersForm } from '../suppliers/component/SuppliersForm';

export const PrivateRoutes = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/proveedores" element={<SuppliersPage />} />
          <Route path="/proveedores/add" element={<SuppliersForm />} />
          <Route path="/proveedores/edit/:id" element={<SuppliersForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

import React from 'react';
import { SideBarItem } from '../components/SideBarItem';

export const SideBar = () => {
  const modules = [
    'Inicio',
    'Produccion',
    'Inventario',
    'Proveedores',
    'Pedidos',
    'Distribucion',
  ];
  return (
    <>
      <nav className="bg-gray-800 w-1/6 m-3 p-3 rounded-lg flex flex-col gap-1">
        {modules.map((module) => {
          return <SideBarItem key={module} title={module} />;
        })}
      </nav>
    </>
  );
};

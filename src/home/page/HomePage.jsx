import React from 'react';
import { SideBar } from '../layout/SideBar';

export const HomePage = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="text-3xl m-3">EMBURRES</h1>
        <SideBar />
      </div>
    </div>
  );
};

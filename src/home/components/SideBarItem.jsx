import React from 'react';
import { Link } from 'react-router-dom';

export const SideBarItem = ({ title }) => {
  return (
    <>
      <Link className="w-full text-white hover:bg-gray-600 p-2 rounded active:border-2 active:bg-gray-600 font-sans">
        {title}
      </Link>
    </>
  );
};

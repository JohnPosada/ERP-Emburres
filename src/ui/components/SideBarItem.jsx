import { NavLink } from 'react-router-dom';

export const SideBarItem = ({ title }) => {
  return (
    <>
      <NavLink className="overflow-hidden w-full text-white hover:bg-gray-600 p-2 rounded font-sans">
        {title}
      </NavLink>
    </>
  );
};

import React, { useState } from 'react';
import { BiLogOut, BiPlus, BiPlusMedical } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterPage } from '../../auth/pages/RegisterPage';
import { startLogout } from '../../store/auth/thunks';
import { Popup } from 'reactjs-popup';

export const Header = () => {
  const dispatch = useDispatch();
  const { displayName, rol } = useSelector((state) => state.auth);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const onCLickLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="flex justify-between w-full mb-6">
      {/* {openRegisterModal && <RegisterPage className="fixed " />} */}
      <h1 className="text-3xl m-3 w-1/5">EMBURRES</h1>
      <div className="w-4/5  flex justify-between">
        {rol === 'propietario' && (
          <Popup
            className="bg-opacity-70"
            trigger={
              <button
                className="flex self-center border border-black p-1 rounded-md bg-white font-medium hover:bg-gray-400 hover:shadow-md hover:shadow-black "
                onClick={() => setOpenRegisterModal(true)}
              >
                <BiPlus className="self-center font-semibold " />
                Añadir usuario
              </button>
            }
            modal={true}
            position="center center"
          >
            {(close) => (
              <>
                <div className="absolute top-16 right-[27rem]">
                  <button className="text-5xl" onClick={close}>
                    &times;
                  </button>
                </div>
                <RegisterPage />
              </>
            )}
          </Popup>
        )}
        <div className="flex m-3 gap-2 flex-row-reverse self-center ">
          <BiLogOut
            className="cursor-pointer self-center fill-red-600"
            onClick={onCLickLogout}
          />
          <span>{displayName}</span>
        </div>
      </div>
    </div>
  );
};

import { BiLogOut, BiPlus, BiPlusMedical } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterPage } from '../../auth/pages/RegisterPage';
import { startLogout } from '../../store/auth/thunks';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../components/Modal';

export const Header = () => {
  const dispatch = useDispatch();
  const { displayName, rol } = useSelector((state) => state.auth);
  const { isOpenModal, closeModal, openModal } = useModal();

  const onCLickLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="flex justify-between w-full mb-6">
      <h1 className="text-3xl pl-4 pt-4 m-3 w-1/5 font-logo">EMBURRES</h1>
      <div className="w-4/5  flex flex-row-reverse justify-between">
        <div className="flex m-3 gap-2 flex-row-reverse self-center ">
          <BiLogOut
            className="cursor-pointer text-xl self-center fill-red-600"
            onClick={onCLickLogout}
          />
          <span>{displayName}</span>
        </div>
        {rol === 'propietario' && (
          <button
            className="flex self-center border border-black p-1 rounded-md bg-white font-medium hover:bg-gray-400 hover:shadow-md hover:shadow-black "
            onClick={() => openModal()}
          >
            <BiPlus className="self-center font-semibold " />
            Añadir usuario
          </button>
        )}
        <Modal closeModal={closeModal} isOpen={isOpenModal}>
          <RegisterPage />
        </Modal>
      </div>
    </div>
  );
};

import { GrClose } from 'react-icons/gr';

export const Modal = ({ isOpen, closeModal, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`bg-black w-screen opacity-80 h-screen fixed top-0 left-0  ${
        isOpen ? 'flex items-center justify-end' : 'hidden'
      }`}
      onClick={closeModal}
    >
      <div
        className=" bg-black flex justify-center"
        onClick={handleModalDialogClick}
      >
        {children}
        <button
          className="text-black self-start text-5xl -ml-10"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-white px-6 py-2 my-2 rounded-lg shadow-lg relative w-11/12 max-w-4xl h-[90%] md:h-[40rem] overflow-y-auto">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;

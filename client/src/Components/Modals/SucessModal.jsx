import React from "react";

const VerificandoModal = ({
  show,
  onClose,
  title = "VERIFICANDO TU TURNO",
  text = "Aguárdanos, estamos verificando y confirmando tu turno.",
}) => {
  if (!show) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'
      onClick={handleBackgroundClick}
    >
      <div className='bg-white rounded-lg p-6 w-80'>
        <div className='text-center'>
          <div className='mb-4'>
            <span role='img' aria-label='Verificando' className='text-4xl'>
              ❤️
            </span>
          </div>
          <p className='text-lg font-semibold'>{title}</p>
          <p className='text-gray-600 mt-2'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VerificandoModal;

import React from "react";
import checkimg from "../../Assets/Imgs/checkIMG.svg";

const VerificandoModal = ({
  show,
  onClose,
  title = "VERIFICANDO TU TURNO",
  text = "Aguárdanos, estamos verificando y confirmando tu turno.",
  check,
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
      <div className='bg-white border-2 h-80 flex justify-center items-center border-secondary rounded-lg p-6 w-80'>
        <div className='text-center'>
          <div className='mb-4 flex justify-center'>
            {check ? (
              <div className='bg-secondary rounded-full w-20 h-20 flex justify-center items-center '>
                <img className='p-4' src={checkimg} alt='' />
              </div>
            ) : (
              <span role='img' aria-label='Verificando' className='text-4xl'>
                ❤️
              </span>
            )}
          </div>
          <p className='text-lg font-semibold text-secondary'>{title}</p>
          <p className='text-gray-600 mt-2'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VerificandoModal;

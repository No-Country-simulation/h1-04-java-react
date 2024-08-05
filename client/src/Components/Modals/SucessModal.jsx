/* eslint-disable react/prop-types */
import logo from "../../Assets/Imgs/logo.png";

const VerificandoModal = ({
  checkImg,
  show,
  onClose,
  title = "VERIFICANDO TU TURNO",
  text = "Aguárdanos, estamos verificando y confirmando tu turno.",
  check,
  viewButtons = false,
  confirm,
}) => {
  if (!show) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className=' fixed inset-0  bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'
      onClick={handleBackgroundClick}
    >
      <div className='bg-white border-2 max-w-[80%] border-secondary rounded-lg p-6 py-10  max-h-[50%] flex items-center justify-center'>
        <div className='text-center'>
          <button onClick={() => onClose()}>x</button>
          <div className='mb-5  flex justify-center'>
            {check ? (
              <div className='bg-secondary rounded-full w-20 h-20 flex justify-center items-center '>
                <img className='p-4' src={checkImg} alt='' />
              </div>
            ) : (
              <span role='img' aria-label='Verificando' className='text-4xl'>
                ❤️
              </span>
            )}
          </div>
          <p className='text-lg font-semibold text-secondary mb-5'>{title}</p>
          <p className='text-gray-600 mt-2 mb-5'>{text}</p>

          {viewButtons && (
            <div className='flex justify-around items-center mt-6'>
              <button
                onClick={onClose}
                className='rounded-3xl bg-secondary p-2 font-bold px-4'
              >
                Cancelar
              </button>
              <button
                onClick={confirm}
                className='rounded-3xl bg-secondary p-2 font-bold px-4'
              >
                Confirmar
              </button>
            </div>
          )}

          <img
            src={logo}
            alt='Logo Justina'
            className='w-24 h-16 mt-8 m-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default VerificandoModal;

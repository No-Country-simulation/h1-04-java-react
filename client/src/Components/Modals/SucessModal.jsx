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
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      style={{ zIndex: "1000" }}
      onClick={handleBackgroundClick}
    >
      <div
        className={`bg-white border-2 max-w-[70%] border-blueColorClear  w-full rounded-lg p-6 py-10  max-h-[60%] flex items-center justify-center ${
          viewButtons ? "max-h-[100%]" : ""
        }`}
      >
        <div className='text-center'>
          <div className='mb-5  flex justify-center'>
            {check ? (
              <div className='bg-blueColorClear rounded-full w-20 h-20 flex justify-center items-center '>
                <img className='p-4' src={checkImg} alt='' />
              </div>
            ) : (
              <span role='img' aria-label='Verificando' className='text-4xl'>
                ❤️
              </span>
            )}
          </div>
          <p className='text-lg font-semibold text-blueColorClear mb-5'>
            {title}
          </p>
          <p className='text-gray-600 mt-2 mb-5'>{text}</p>

          {viewButtons && (
            <div className='flex justify-around items-center mt-6'>
              <button
                onClick={onClose}
                className='rounded-lg bg-blueTransparent p-2 text-blueColorClear font-semibold px-4'
                style={{ boxShadow: "1px 2px 5px #00000049" }}
              >
                Cancelar
              </button>
              <button
                onClick={confirm}
                className='rounded-lg bg-blueColorClear p-2 text-white font-semibold px-4'
                style={{ boxShadow: "1px 2px 5px #00000049" }}
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

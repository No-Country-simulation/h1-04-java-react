import { useState } from 'react';
import FooterLanding from '../Landing/FooterLanding';
import NavBarDownload from "./NavBarDownload";
import logo from '../../Assets/Imgs/logo.png';
import playStore from '../../Assets/Imgs/playStore.png';
import apple from '../../Assets/Imgs/apple.png';
import microsoft from '../../Assets/Imgs/microsoft.png';

const Download = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBarDownload />
      <div className="flex-grow flex items-center justify-center bg-gray-100 pt-16 px-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Columna Izquierda */}
          <div className="flex flex-col justify-start items-start gap-6 pt-8">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col">
                <div className="text-gray-600 text-sm font-normal pb-2 pl-1">
                  Un Aplicación que reinventa el futuro de la Salud
                </div>
                <div className=" text-teal-400 text-4xl font-bold ">
                  DESCARGA JUSTINA.IO
                </div>
              </div>
              <div className=" text-gray-600 text-xl font-semibold leading-3">
                Usa JUSTINA.IO en todos tus dispositivos.
              </div>
            </div>
            {/* CUADRO ROJO */}
            <div className="w-[25rem] h-[15em] px-4 my-6 bg-[#ea526f]/10 rounded-[1.25rem] border-2 border-[#ea526f] flex flex-col justify-center items-start gap-7">
              <div className="h-[6.875rem] flex flex-col justify-center items-start gap-2.5">
                <div className="h-[1.625rem] text-[#1a1a1a] text-lg font-semibold leading-[3.125rem] mt-12">Móvil | Tableta</div>
                <div className="h-[1.625rem] text-[#ea526f] text-3xl font-bold leading-[3.125rem] mb-4">ANDROID</div>
                <div className="h-[2.375rem] text-[#1a1a1a] text-base font-semibold leading-snug mb-4">Descárgala de forma rápida y fácil para usar en tu celular con sistema android.</div>
              </div>
              <div
                className="px-4 my-2 mb-3 bg-[#1a1a1a] rounded-[0.9375rem] border-2 border-white flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#333333] transition"
                onClick={handleModalOpen}
              >
                <div className="w-[2.608125rem] h-[2.8125rem] relative">
                  <img src={playStore} alt="logo play store" />
                </div>
                <div className='flex flex-col py-2'>
                  <span className="text-white text-base font-normal">Disponible en</span>
                  <span className="text-white text-3xl font-medium ">Google Play</span>
                </div>
              </div>
            </div>
          </div>
          {/* Columna Derecha */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-[33rem]"
            />
          </div>
        </div>
      </div>

      {/* Nueva sección */}
      <div className="w-full bg-[#25ced1]/20 flex justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[1305px] mx-12 relative">
          {/* Columna 1 */}
          <div className="relative z-10 w-[22rem] pl-4 flex flex-col justify-center items-start gap-6 ">
            <div className="text-[#ea526f] text-4xl font-bold leading-tight">
              Otras opciones
              <br /> de Descarga
            </div>
            <div className="text-[#555555] text-base font-semibold leading-tight">
              Participa de manera activa en el cuidado de tu salud en todos los dispositivos que tengas.
            </div>
          </div>
          {/* Columna 2 */}
          <div className="relative inset-0 bg-gray-100 rounded-[1.25rem] z-0 h-[15em] mt-6">
            <div className="relative z-10 w-full h-[15em] px-4 bg-[#ea526f]/10 rounded-[1.25rem] border-2 border-[#ea526f] flex flex-col justify-center items-start gap-7 z-1">
              <div className="h-[6.875rem] flex flex-col justify-center items-start gap-2.5">
                <div className="h-[1.625rem] text-[#1a1a1a] text-lg font-semibold leading-[3.125rem] mt-12">PC | LAPTOP</div>
                <div className="h-[1.625rem] text-[#ea526f] text-3xl font-bold leading-[3.125rem] mb-4">WINDOWS</div>
                <div className="h-[2.375rem] text-[#1a1a1a] text-base font-semibold leading-snug mb-4">Descárgala de forma rápida y fácil para usar en tu computadora de escritorio o tu notebook.</div>
              </div>
              <div
                className="px-4 my-2 mb-3 bg-[#1a1a1a] rounded-[0.9375rem] border-2 border-white flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#333333] transition"
                onClick={handleModalOpen}
              >
                <div className="w-[2.608125rem] h-[2.8125rem] relative">
                  <img src={microsoft} alt="logo microsoft" />
                </div>
                <div className='flex flex-col py-2'>
                  <span className="text-white text-base font-normal">Consíguelo de</span>
                  <span className="text-white text-3xl font-medium ">Microsoft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="relative inset-0 bg-gray-100 rounded-[1.25rem] z-0 h-[15em] mt-6">
            <div className="relative z-10 w-full h-[15em] px-4 bg-[#ea526f]/10 rounded-[1.25rem] border-2 border-[#ea526f] flex flex-col justify-center items-start gap-7">
              <div className="h-[6.875rem] flex flex-col justify-center items-start gap-2.5">
                <div className="h-[1.625rem] text-[#1a1a1a] text-lg font-semibold leading-[3.125rem] mt-12">Móvil | Tablet</div>
                <div className="h-[1.625rem] text-[#ea526f] text-3xl font-bold leading-[3.125rem] mb-4">iOS</div>
                <div className="h-[2.375rem] text-[#1a1a1a] text-base font-semibold leading-snug mb-4">Descárgala de forma rápida y fácil para usar en tu celular con sistema iOS.</div>
              </div>
              <div
                className="px-4 my-2 mb-3 bg-[#1a1a1a] rounded-[0.9375rem] border-2 border-white flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#333333] transition"
                onClick={handleModalOpen}
              >
                <div className="w-[2.608125rem] h-[2.8125rem] relative">
                  <img src={apple} alt="logo apple" />
                </div>
                <div className='flex flex-col py-2'>
                  <span className="text-white text-base font-normal">Consíguelo en el</span>
                  <span className="text-white text-3xl font-medium ">App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Demostración */}
      <div className="w-full bg-gray-100 flex justify-center py-12">
        <div className="mx-12">
          <div className="text-[#ea526f] text-4xl font-bold text-center mb-8">
            Demostración
          </div>
          <div className="flex justify-center">
            <iframe
              width="700"
              height="393"
              src="https://www.youtube.com/embed/ozqvp1KsYoc?si=ZK4WwQm1Z3aKOjsT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <FooterLanding />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Información en Desarrollo</h2>
            <p className="mb-4">Esta funcionalidad está en desarrollo y pronto estará disponible.</p>
            <button
              className="px-4 py-2 bg-[#ea526f] text-white rounded-md"
              onClick={handleModalClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Download;

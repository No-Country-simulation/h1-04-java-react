import { MdCheckCircle } from 'react-icons/md';

import img3 from '../../Assets/Imgs/section5-img3.png';
import img4 from '../../Assets/Imgs/section5-img4.png';

const Section5 = () => {
  return (
    <div className="w-full flex flex-col items-center py-24">
      <div className="w-full max-w-xl flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-full text-center text-pink-500 text-2xl font-normal leading-normal tracking-wide">
            PARA PROFESIONALES DE LA SALUD
          </div>
          <div className="w-full text-center text-cyan-500 text-3xl font-semibold uppercase leading-tight">
            impulsa la innovación
          </div>
        </div>
        <div className="w-[98%] text-center text-gray-700 text-base font-semibold leading-tight">
          Justina.IO es una plataforma sanitaria creada a partir de tecnologías conectadas y herramientas inteligentes, para lograr la unificación de datos, que permiten conectar al paciente con el profesional de la salud, acelerando la comunicación y perfeccionando las operaciones, con el objetivo de influir en los resultados de salud, mejorando el bienestar del paciente.
        </div>
      </div>
      {/* Segunda parte */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-16 mt-20">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-10">
          {/* Primer elemento */}
          <div className="w-full max-w-[570px] h-[560px] flex flex-col gap-10">
            <div className="w-full h-40 relative">
              <div className="absolute inset-0 bg-white rounded-[10px] shadow border-2 border-[#25ced1]"></div>
              <MdCheckCircle
                className="w-6 h-6 absolute left-[18px] top-[35px] text-[#25ced1]"
              />
              <div className="absolute left-[59px] top-[30px] text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
                HISTORIA CLÍNICA
              </div>
              <div className="absolute left-[59px] top-[72px] text-[#555555] text-base font-semibold leading-tight mr-20">
              <span className="text-[#555555] text-base leading-tight">Accede y recopila datos de la </span><span className="text-[#ff8a5b] text-base leading-tight">Historia Clínica</span><span className="text-[#555555] text-base leading-tight"> en un formato amigable, fácil de usar e interpretar, en un sólo lugar, para mejorar los resultados de los tratamientos. </span>
              </div>
            </div>
            {/* Segundo elemento */}
            <div className="w-full h-40 relative">
              <div className="absolute inset-0 bg-white rounded-[10px] shadow border-2 border-[#25ced1]"></div>
              <MdCheckCircle
                className="w-6 h-6 absolute left-[18px] top-[35px] text-[#25ced1]"
              />
              <div className="absolute left-[60px] top-[30px] text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
                TURNOS MÉDICOS
              </div>
              <div className="absolute left-[59px] top-[72px] text-[#555555] text-base font-semibold leading-tight mr-20">
              <span className="text-[#555555] text-[15px]leading-tight">Tus próximos </span><span className="text-[#ff8a5b] text-[15px] leading-tight">Turnos</span><span className="text-[#555555] text-[15px] leading-tight"> se acercan, ¿necesitas cancelar? ¿No recordás la fecha? ¿A qué hora? Estas y otras consultas, pueden gestionarse en la aplicación.</span>
              </div>
            </div>
            {/* Tercer elemento */}
            <div className="w-full h-40 relative">
              <div className="absolute inset-0 bg-white rounded-[10px] shadow border-2 border-[#25ced1]"></div>
              <MdCheckCircle
                className="w-6 h-6 absolute left-[18px] top-[35px] text-[#25ced1]"
              />
              <div className="absolute left-[60px] top-[30px] text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
              Tratamientos médicos
              </div>
              <div className="absolute left-[59px] top-[72px] text-[#555555] text-base font-semibold leading-tight mr-20">
              <span className="text-[#555555] text-base leading-tight">Podes visualizar procesos y resultados de los </span><span className="text-[#ff8a5b] text-base leading-tight">Tratamientos</span><span className="text-[#555555] text-base leading-tight">, analizando la adherencia, brindando indicaciones para mejorar la salud a nivel global</span><span className="text-[#555555] text-[15px] leading-tight">.  </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center relative pl-8">
          <div className="w-full max-w-md h-[28rem] bg-pink-500/20 rounded-2xl"></div>
          <img
            className="absolute w-[18.1rem] h-[17.2rem] rounded-[1rem] left-[9.5rem] top-[10%] transform translate-x-[30%] -translate-y-[30%]"
            src={img4}
            alt="Placeholder"
          />
          <img
            className="absolute w-[21.6rem] h-[18.7rem] rounded-[1rem] left-[-3%] top-[25%]"
            src={img3}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;

import { MdCheckCircle } from 'react-icons/md';

import img1 from '../../Assets/Imgs/section2-img1.png';
import img2 from '../../Assets/Imgs/section2-img2.png';

const Section2 = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-full max-w-xl flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-full text-center text-pink-500 text-2xl font-normal leading-normal tracking-wide">
            PARA PACIENTES
          </div>
          <div className="w-full text-center text-cyan-500 text-3xl font-bold uppercase leading-tight">
            pensada para vos
          </div>
        </div>
        <div className="w-full text-center text-gray-700 text-base font-semibold leading-tight">
          Te presentamos una aplicación que te acompaña en el antes, el durante y el después de tu trasplante, brindándote toda la información y permitiéndote que te involucres de una manera activa en el cuidado de tu salud, para garantizar tu bienestar durante tu tratamiento.
        </div>
      </div>
      {/* Segunda parte */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-16 mt-20">
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="w-full max-w-md h-[30rem] bg-pink-500/20 rounded-2xl"></div>
          <img
            className="absolute w-[21.6rem] h-[18.7rem] rounded-[1rem] left-[-3%] top-[25%]"
            src={img1}
            alt="Placeholder"
          />
          <img
            className="absolute w-[18.1rem] h-[17.2rem] rounded-[1rem] left-[9.5rem] top-[10%] transform translate-x-[30%] -translate-y-[30%]"
            src={img2}
            alt="Placeholder"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-10">
          {/* Primer elemento */}
          <div className="w-full max-w-[570px] h-[560px] flex flex-col gap-10">
            <div className="w-full h-40 relative">
              <div className="absolute inset-0 bg-white rounded-[10px] shadow border-2 border-[#25ced1]"></div>
              <MdCheckCircle
                className="w-6 h-6 absolute left-[18px] top-[30px] text-[#25ced1]"
              />
              <div className="absolute left-[59px] top-[30px] text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
                HISTORIA CLÍNICA
              </div>
              <div className="absolute left-[59px] top-[72px] text-[#555555] text-base font-semibold leading-tight mr-24">
                Accede a tu <span className="text-[#ff8a5b] font-semibold">Historia Clínica</span> en un formato amigable, fácil de usar e interpretar. También podes descargarlo en PDF para presentarlo dónde lo necesites.
              </div>
            </div>
            {/* Segundo elemento */}
            <div className="w-full h-40 relative">
              <div className="absolute inset-0 bg-white rounded-[10px] shadow border-2 border-[#25ced1]"></div>
              <MdCheckCircle
                className="w-6 h-6 absolute left-[18px] top-[30px] text-[#25ced1]"
              />
              <div className="absolute left-[60px] top-[30px] text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
                TURNOS MÉDICOS
              </div>
              <div className="absolute left-[59px] top-[72px] text-[#555555] text-base font-semibold leading-tight mr-24">
                Tus próximos <span className="text-[#ff8a5b] font-semibold">Turnos</span> se acercan o necesitas sacar un nuevo… ¿No recordás la fecha? ¿A qué hora? Estas y otras consultas, pueden gestionarse en la aplicación.
              </div>
            </div>
            {/* Tercer elemento */}
            <div className="w-full h-40 relative">
              <div className="absolute inset-0 bg-white rounded-[10px] shadow border-2 border-[#25ced1]"></div>
              <MdCheckCircle
                className="w-6 h-6 absolute left-[18px] top-[30px] text-[#25ced1]"
              />
              <div className="absolute left-[60px] top-[30px] text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
                MEDICACIÓN
              </div>
              <div className="absolute left-[59px] top-[72px] text-[#555555] text-base font-semibold leading-tight mr-24">
                Ya no olvidarás la hora de tus <span className="text-[#ff8a5b] font-semibold">Medicamentos</span>, la aplicación te notifica cuáles te fueron recetados, la dosis, la frecuencia y cuando solicitar tu nueva receta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

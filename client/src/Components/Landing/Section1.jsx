import device1 from '../../Assets/Imgs/device1.png';
import device2 from '../../Assets/Imgs/device2.png';
import android from '../../Assets/Imgs/vector/android.svg';
import apple from '../../Assets/Imgs/vector/apple.svg';
import windows from '../../Assets/Imgs/vector/windows.svg';
import { FaDownload } from 'react-icons/fa';

const Section1 = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Columna Izquierda */}
        <div className="flex flex-col justify-start items-start gap-6 pt-8">
          <div className="relative flex flex-col justify-start items-start gap-6">
            <div className="relative flex flex-col">
              <div className="text-gray-600 text-sm font-normal pb-2">
                Un Aplicación que reinventa el futuro de la Salud
              </div>
              <div className="w-[23rem] text-teal-400 text-4xl font-semibold ">
                JUSTINA IO: PENSADA PARA VOS
              </div>
            </div>
            <div className="w-[27rem] text-gray-600 text-sm font-semibold leading-tight">
              Te presentamos una aplicación innovadora, amigable y de fácil uso, que posibilita a los profesionales de la salud y a los pacientes participar de una manera activa en el cuidado de la salud, a partir de la recopilación de datos que permiten tomar medidas significativas para la mejora en los resultados de la salud y el bienestar general del paciente.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
            <div className="h-8 px-4 bg-[#ea526f] border border-[#ea526f] rounded-md flex items-center justify-between space-x-2 cursor-pointer hover:bg-[#c44559]">
          <div className="text-white text-base font-semibold">
            DESCARGAR
          </div>
          <FaDownload className="text-white" />
        </div>
            </div>
            <div className="w-36 h-10 justify-center items-center gap-2 inline-flex">
              <img
                src={android}
                alt="android"
                className="w-10 h-10"
              />
              <img
                src={windows}
                alt="windows"
                className="w-10 h-10"
              />
              <img
                src={apple}
                alt="apple"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* Columna Derecha */}
        <div className="relative hidden lg:block">
          <img
            src={device1}
            alt="Device 1"
            className="w-full max-w-xs"
          />
          <img
            src={device2}
            alt="Device 2"
            className="absolute top-[10%] right-[-3%] w-[80%] max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;

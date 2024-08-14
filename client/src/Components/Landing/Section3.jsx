import historiaCli from '../../Assets/Imgs/section3-estudios.png';
import tratamiento from '../../Assets/Imgs/section3-tratamiento.png';
import medicacion from '../../Assets/Imgs/section3-medication.png';
import transplante from '../../Assets/Imgs/section3-tranplante.png';
import calendar from '../../Assets/Imgs/section3-turnos.png';
import mobile3 from '../../Assets/Imgs/mobile-section3.png';

const Section3 = () => {
  return (
    <div className="w-full bg-[#25ced1]/10 py-16 md:py-28">
      {/* Título de la sección */}
      <div className="text-[#1e999b] text-lg md:text-3xl font-bold font-['Josefin Sans'] uppercase text-center mb-6">
        FUNCIONALIDADES PRINCIPALES
      </div>

      {/* Contenedor para las columnas */}
      <div className="flex flex-row">
        {/* Columna 1 */}
        <div className="flex-1 flex flex-col justify-center mr-[-.5rem] md:mr-[-1rem] gap-4 md:gap-32">
          <div className="flex flex-col items-end text-right mt-[-4rem] md:mt-0">
            <div className="items-center justify-center mb-4">
              <img
                src={tratamiento}
                alt="tratamiento"
                className="w-7 h-7 md:w-10 md:h-10 text-[#1e999b]"
              />
            </div>
            <div className="text-[#1e999b] text-xs md:text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Tratamientos
            </div>
          </div>
          <div className="flex flex-col items-end text-right">
            <div className="items-center justify-center mb-4">
              <img
                src={historiaCli}
                alt="historiaCli"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </div>
            <div className="text-[#1e999b] text-xs md:text-2xl font-semibold font-['Josefin Sans'] uppercase mb-0 md:mb-2">
              Estudios clínicos
            </div>
          </div>
        </div>

        {/* Columna Central */}
        <div className="flex-1 flex flex-col items-center max-w-md ">
          {/* Imagen */}
          <div className="flex justify-center">
            <img
              className=" w-[90%] md:w-full max-w-lg h-auto"
              src={mobile3}
              alt="Placeholder"
            />
          </div>
          {/* Transplante Cruzado */}
          <div className="flex flex-col items-center text-center">
            <div className="items-center justify-center mb-4 md:mt-[-1.5rem]">
              <img
                src={transplante}
                alt="medicacion"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </div>
            <div className="text-[#1e999b] text-xs md:text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Transplante Cruzado
            </div>
          </div>
        </div>

        {/* Columna 3 */}
        <div className="flex-1 flex flex-col justify-center ml-[-.5rem] md:ml-[-1rem] gap-4 md:gap-32">
          {/* Estudios Clínicos */}
          <div className="flex flex-col items-start text-left mt-[-4rem] md:mt-0">
            <div className="items-center justify-center mb-4">
              <img
                src={medicacion}
                alt="medicacion"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </div>
            <div className="text-[#1e999b] text-xs md:text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
            Medicación
            </div>
          </div>
          {/* Turnos Médicos */}
          <div className="flex flex-col items-start text-left">
            <div className="items-center justify-center mb-4">
              <img
                src={calendar}
                alt="calendar"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </div>
            <div className="text-[#1e999b] text-xs md:text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Turnos médicos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

import historiaCli from '../../Assets/Imgs/vector/historyCli.svg';
import tratamiento from '../../Assets/Imgs/vector/treatment.svg';
import medicacion from '../../Assets/Imgs/vector/medication.svg';
import studies from '../../Assets/Imgs/vector/studies.svg';
import calendar from '../../Assets/Imgs/vector/calendar.svg';
import mobile3 from '../../Assets/Imgs/mobile-section3.png';

const Section3 = () => {
  return (
    <div className="w-full bg-[#25ced1]/10 py-32">
      {/* Título de la sección */}
      <div className="text-[#1e999b] text-3xl font-bold font-['Josefin Sans'] uppercase text-center mb-10">
        FUNCIONALIDADES PRINCIPALES
      </div>
      
      {/* Contenedor para las columnas */}
      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-10">
        {/* Columna 1 */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-end p-4 text-right py-28">
            <div className="items-center justify-center mb-4">
              <img
                src={tratamiento}
                alt="tratamiento"
                className="w-10 h-10 text-[#1e999b]"
              />
            </div>
            <div className="text-[#1e999b] text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Tratamientos
            </div>
            <div className="text-black text-base font-semibold">
              Podes visualizar procesos y resultados, accediendo a la información que necesitas.
            </div>
          </div>
          <div className="flex flex-col items-end p-4 text-right">
            <div className="items-center justify-center mb-4">
              <img
                src={medicacion}
                alt="medicacion"
                className="w-10 h-10"
              />
            </div>
            <div className="text-[#1e999b] text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Medicación
            </div>
            <div className="text-black text-base font-semibold">
              Podes gestionar y administrarlos, garantizando el acceso a los mismos.
            </div>
          </div>
        </div>
        
        {/* Columna Central */}
        <div className="flex-1 flex flex-col items-center gap-6">
          {/* Estudios Clínicos */}
          <div className="flex flex-col items-center p-4 text-center">
            <div className="items-center justify-center mb-4">
              <img
                src={historiaCli}
                alt="historiaCli"
                className="w-10 h-10"
              />
            </div>
            <div className="text-[#1e999b] text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Estudios clínicos
            </div>
            <div className="text-black text-base font-semibold">
              Visualízalos en forma completa y segura en la aplicación, en todo momento y en todo lugar.
            </div>
          </div>
          {/* Imagen */}
          <div className="flex justify-center mt-6">
            <img
              className="w-full max-w-lg h-auto"
              src={mobile3}
              alt="Placeholder"
            />
          </div>
        </div>
        
        {/* Columna 3 */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Estudios Clínicos */}
          <div className="flex flex-col items-start p-4 text-left py-28">
            <div className="items-center justify-center mb-4">
              <img
                src={studies}
                alt="studies"
                className="w-10 h-10"
              />
            </div>
            <div className="text-[#1e999b] text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Estudios clínicos
            </div>
            <div className="text-black text-base font-semibold">
              Visualízalos en forma completa y segura en la aplicación, en todo momento y en todo lugar.
            </div>
          </div>
          {/* Turnos Médicos */}
          <div className="flex flex-col items-start p-4 text-left">
            <div className="items-center justify-center mb-4">
              <img
                src={calendar}
                alt="calendar"
                className="w-10 h-10"
              />
            </div>
            <div className="text-[#1e999b] text-2xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Turnos médicos
            </div>
            <div className="text-black text-base font-semibold">
              Podes gestionar tus turnos desde la aplicación, de forma fácil y rápida.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

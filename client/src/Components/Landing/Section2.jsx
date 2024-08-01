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
          <div className="w-full text-center text-cyan-500 text-4xl font-bold uppercase leading-tight">
            pensada para vos
          </div>
        </div>
        <div className="w-full text-center text-gray-800 text-base font-semibold leading-tight">
          Te presentamos una aplicación que te acompaña en el antes, el durante y el después de tu trasplante, brindándote toda la información y permitiéndote que te involucres de una manera activa en el cuidado de tu salud, para garantizar tu bienestar durante tu tratamiento.
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-6 mt-10">
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="w-full max-w-sm h-80 lg:h-96 bg-pink-500/20 rounded-2xl"></div>
          <img
            className="absolute w-[417px] h-[361px] rounded-[1.2rem] border-1 border-[#ea526f] left-[-20%] top-1/2 transform -translate-y-1/2"
            src={img1}
            alt="Placeholder"
          />
          <img
            className="absolute w-[348px] h-[332px] rounded-[1.2rem] border-1 border-[#ea526f] left-0 top-[-10%] transform translate-x-[30%] -translate-y-[30%]"
            src={img2}
            alt="Placeholder"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* Aquí puedes agregar el contenido de la columna derecha */}
          <div className="w-full max-w-sm h-80 lg:h-96 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

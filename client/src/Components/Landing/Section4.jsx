import img1 from '../../Assets/Imgs/section4img1.png';
import img2 from '../../Assets/Imgs/section4img2.png';
import img3 from '../../Assets/Imgs/section4img3.png';

const Section4 = () => {
  return (
    <div className="w-full h-[34.75rem] px-[5rem] bg-[#fdeee5] flex justify-between items-center">
      {/* Columna 1 */}
      <div className=" flex justify-center items-center pr-16">
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="text-[#ea526f] text-[2.5rem] font-semibold leading-[2.75rem]">Sobre Justina Lo Cane</div>
          <div className="w-full text-[#555555] text-base font-medium leading-tight">
            Justina Lo Cane tenía un año y medio cuando recibió junto a sus padres la noticia de que padecía una cardiopatía congénita. A partir de ese momento, con controles y medicamentos, logró llevar adelante una vida normal hasta que a los 12 años, el cuadro se complicó y la llevó a la necesidad de un trasplante de corazón.
          </div>
          <a 
            href="https://www.facebook.com/multiplicatex7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-[8.4375rem] h-[2.5625rem] p-3 bg-[#ea526f] rounded-lg flex justify-center items-center gap-2 transition-colors duration-300 hover:bg-[#d84e62] hover:text-[#ffffff]"
          >
            <div className="text-white text-sm font-normal">Más Información</div>
          </a>
        </div>
      </div>
      
      {/* Columna 2: Imágenes */}
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="w-[15.625rem] h-[24.8125rem] relative">
          <img className="w-[15.625rem] h-[24.8125rem] " src={img1} alt="Imagen 1" />
        </div>
        <div className="w-[15.625rem] h-[24.8125rem] relative">
          <img className="w-[15.625rem] h-[24.8125rem] " src={img2} alt="Imagen 2" />
        </div>
        <div className="w-[15.625rem] h-[24.8125rem] relative">
          <img className="w-[15.625rem] h-[24.8125rem] " src={img3} alt="Imagen 3" />
        </div>
      </div>
    </div>
  );
};

export default Section4;

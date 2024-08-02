import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Imágenes para el carrusel (reemplaza estas URL con tus propias imágenes)
const images = [
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400"
];

const Section4 = () => {
  return (
    <div className="w-full h-full bg-[#fdeee5] flex">
      {/* Columna 1 */}
      <div className="w-5/12 flex flex-col justify-center items-start px-12 py-12 pl-24">
        <div className="text-[#ea526f] text-[40px] font-semibold leading-[44px] mb-6">
          Sobre Justina Lo Cane
        </div>
        <div className="w-[28.8rem] text-[#555555] text-base font-semibold leading-tight mb-6 py-3">
          Justina Lo Cane tenía un año y medio cuando recibió junto a sus padres la noticia de que padecía una cardiopatía congénita. A partir de ese momento, con controles y medicamentos, logró llevar adelante una vida normal hasta que a los 12 años, el cuadro se complicó y la llevó a la necesidad de un trasplante de corazón.
        </div>
        <a 
          href="https://www.facebook.com/multiplicatex7/"  // Reemplaza con la URL deseada
          target="_blank"
          rel="noopener noreferrer"
          className="w-[135px] h-[41px] p-3 bg-[#ea526f] rounded-lg flex justify-center items-center transition-colors duration-300 hover:bg-[#d84e62] hover:text-[#ffffff]"
        >
          <div className="text-white text-sm font-normal leading-[17px] transition-colors duration-300 hover:text-[#ffffff]">Más Información</div>
        </a>
      </div>

      {/* Columna 2 */}
      <div className="w-7/12 relative">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={images.length}
          visibleSlides={2}
          infinite
          isIntrinsicHeight
          dragEnabled={false} // Desactiva el arrastre si no es necesario
          interval={5000} // Tiempo de transición en ms
          className="h-full"
        >
          <Slider className="h-[90%] py-14 my-1 px-8">
            {images.map((image, index) => (
              <Slide key={index} className="w-full h-[90%] ">
                <img className="w-[22rem] h-[30rem] object-cover" src={image} alt={`Slide ${index + 1}`} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
      </div>
    </div>
  );
};

export default Section4;

import "./section6.css";
import { useRef } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "pure-react-carousel/dist/react-carousel.es.css";
import item from '../../Assets/Imgs/vector/section6-carousel-item.svg';
import img1 from '../../Assets/Imgs/carousel-img1.png';
import img2 from '../../Assets/Imgs/carousel-img2.png';
import img3 from '../../Assets/Imgs/carousel-img3.png';

const testimonials = [
  {
    quote: "«La aplicación me encantó, me ayudo un montón»",
    description: "La comunicación con mi medico es mucho más fácil y rápida. A su vez, me notifica todo a tiempo para tomar mis medicinas y no olvidarme de mis comidas, controles médicos y medicación. Me encanta, muchas gracias por ayudarme.",
    user: "Malena",
    age: "19 años",
    location: "Buenos Aires",
    image: img1,
    condition: "Paciente con Fibrosis Quística",
  },
  {
    quote: "«La aplicación me encantó, me ayudo un montón»",
    description: "La aplicación me ayuda para no olvidarme cuándo tengo mis turnos, los horarios de la medicación, también me brinda las indicaciones para saber cómo cocinar, hacer mis ejercicios... Es super fácil de usar. ¡Me encanta!",
    user: "Florencia",
    age: "20 años",
    location: "Rosario",
    image: img2,
    condition: "Paciente con Fibrosis Quística",
  },
  {
    quote: "«Muchas gracias Justina ayudarme a mejorar mi salud»",
    description: "La aplicación me brinda toda la información que necesito para enfrentar mi enfermedad y, a mejorar mi salud y calidad de vida. Muchas gracias.",
    user: "Brenda",
    age: "33 años",
    location: "Córdoba",
    image: img3,
    condition: "Paciente con Insuficiencia Renal Crónica",
  },
];

const Section6 = () => {
  const carouselRef = useRef(null);

  return (
    <div className="w-full relative bg-[#ff8a5b]/20 py-12 overflow-hidden">
      <div className="text-center text-[#c66b46] text-3xl md:text-5xl font-semibold leading-[60px] mb-4 md:mb-12">
        Testimonios de usuarios
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={testimonials.length}
        ref={carouselRef}
        className="h-[21rem] md:h-[35rem]"
      >
        <Slider className="w-[90%] h-[17rem] md:h-[35rem] md:w-full max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <div className=" h-[30rem] px-[1rem] py-1 md:py-[3rem]  bg-white rounded-[5px] shadow border-2 border-[#e2eaf2] flex flex-col md:flex-row justify-start items-start gap-[1rem]">
                <div className="flex flex-col justify-start items-start gap-2 md:gap-6 flex-1 mx-1 md:mx-16 my-2 md:my-4">
                  <div className="flex flex-col justify-start items-start gap-2 md:gap-6">
                    <div className="w-6 md:w-10 h-6 md:h-10 relative">
                      <img src={item} alt="" />
                    </div>
                    <div className="w-[90%] md:w-[23rem] stext-[#2e363e] text-lg md:text-3xl font-medium md:leading-[42.90px]">
                      {testimonial.quote}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 md:gap-6">
                    <div className=" text-[#555555] text-base font-normal leading-tight">
                      {testimonial.description}
                    </div>
                    <div className="flex flex-col justify-start items-center gap-1px">
                      <div className="text-black text-sm font-normal leading-[21px]">
                        {testimonial.condition}
                      </div>
                      <div className="w-full border-b border-dotted border-black"></div> {/* Línea intermitente */}
                    </div>
                  </div>
                </div>
                <div className="flex-col hidden md:flex justify-start items-center gap-7 mr-8">
                  <div className="w-[21rem] h-[21rem] relative">
                    <div className="w-[21rem] h-[21rem] absolute bg-[#f2f6f9] rounded-full border border-[#f2f6f9]"></div>
                    <img
                      className="w-[21rem] h-[21rem] rounded-full object-cover absolute"
                      src={testimonial.image}
                      alt={`Testimonial from ${testimonial.user}`}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center gap-1.5 mt-[-1rem]">
                    <div className="text-center text-[#2e363e] text-[21px] font-medium leading-[30.03px]">
                      {testimonial.user}
                    </div>
                    <div className="text-center text-[#a6aeb6] text-base font-normal leading-7">
                      {testimonial.age} | {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 md:top-[41rem]">
          <ButtonBack className="w-[4.1rem] h-[4.1rem] bg-white text-[#c66b46] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fceade] hover:border-white hover:border-[.1rem]">
            <FaChevronLeft size={30} />
          </ButtonBack>
          <ButtonNext className="w-[4.1rem] h-[4.1rem] bg-white text-[#c66b46] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fceade] hover:border-white hover:border-[.1rem]">
            <FaChevronRight size={30} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Section6;

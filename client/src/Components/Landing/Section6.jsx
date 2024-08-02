import "./section6.css";
import { useRef } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "pure-react-carousel/dist/react-carousel.es.css";
import item from '../../Assets/Imgs/vector/section6-carousel-item.svg';
import img1 from '../../Assets/Imgs/carousel-img1.png';

const testimonials = [
  {
    quote: "«La aplicación me encantó, me ayudo un montón»",
    description: "La comunicación con mi medico es mucho más fácil y rápida. A su vez, me notifica todo a tiempo para tomar mis medicinas y no olvidarme de mis comidas, controles médicos y medicación. Me encanta, muchas gracias por ayudarme.",
    user: "Flor",
    age: "16 años",
    location: "Buenos Aires",
    image: img1,
    condition: "Paciente con enfermedad pulmonar obstructiva crónica (EPOC)",
  },
  {
    quote: "«La app es increíble y fácil de usar»",
    description: "No solo es fácil de usar, sino que también ofrece muchas funciones útiles que mejoran mi experiencia de usuario. La recomiendo encarecidamente.",
    user: "Lucas",
    age: "29 años",
    location: "CABA",
    image: "https://via.placeholder.com/441x359",
    condition: "Paciente con diabetes tipo 1",
  },
  {
    quote: "«Una herramienta esencial para mi día a día»",
    description: "Me ayuda a mantenerme al tanto de mis medicaciones y citas médicas. La interfaz es intuitiva y los recordatorios son muy útiles.",
    user: "Ana",
    age: "45 años",
    location: "Rosario",
    image: "https://via.placeholder.com/441x359",
    condition: "Paciente con hipertensión",
  },
];

const Section6 = () => {
  const carouselRef = useRef(null);

  return (
    <div className="w-full relative bg-[#ff8a5b]/20 py-12 overflow-hidden">
      <div className="text-center text-[#c66b46] text-5xl font-normal leading-[60px] mb-12">
        Testimonios de usuarios
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={testimonials.length}
        ref={carouselRef}
        className="h-[35rem]"
      >
        <Slider className="w-full max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <div className="h-[30rem] px-[1rem] py-[3rem]  bg-white rounded-[5px] shadow border-2 border-[#e2eaf2] flex flex-col md:flex-row justify-start items-start gap-[1rem]">
                <div className="flex flex-col justify-start items-start gap-6 flex-1 mx-16 my-4">
                  <div className="flex flex-col justify-start items-start gap-6">
                    <div className="w-10 h-10 relative">
                      <img src={item} alt="" />
                    </div>
                    <div className="w-[23rem] stext-[#2e363e] text-3xl font-medium leading-[42.90px]">
                      {testimonial.quote}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-6">
                    <div className=" text-[#555555] text-base font-normal leading-tight">
                      {testimonial.description}
                    </div>
                    <div className="flex flex-col justify-start items-center gap-px">
                      <div className="text-black text-sm font-normal leading-[21px]">
                        {testimonial.condition}
                      </div>
                      <div className="w-full border-b border-dotted border-black"></div> {/* Línea intermitente */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-7 mr-8">
                  <div className="w-[21rem] h-[21rem] relative">
                    <div className="w-[21rem] h-[21rem] absolute bg-[#f2f6f9] rounded-full border border-[#f2f6f9]"></div>
                    <img
                      className="w-[21rem] h-[21rem] rounded-full object-cover absolute"
                      src={testimonial.image}
                      alt={`Testimonial from ${testimonial.user}`}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center gap-1.5 mt-[-1rem]">
                    <div className="text-center text-[#2e363e] text-[21px] font-medium font-['Montserrat'] leading-[30.03px]">
                      {testimonial.user}
                    </div>
                    <div className="text-center text-[#a6aeb6] text-base font-normal font-['Montserrat'] leading-7">
                      {testimonial.age} | {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 top-[41rem]">
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

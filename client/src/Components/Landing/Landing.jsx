import React from "react";
import NavBar from "../NavBar/NavBar";
import heart from "../../Assets/Imgs/example.png";
export default function Landing() {
  return (
    <div className=' mx-auto'>
      <NavBar />
      {/* Hero Section */}
      <section
        className='hero  bg-[#EA526F] bg-cover bg-center'
        style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
      >
        <div className='hero-overlay bg-opacity-60'>
          <div className='hero-content text-center'>
            <div className='max-w-md flex flex-col'>
              <h1 className='mb-5 text-5xl font-bold text-[#25CED1]'>
                Justina.io:   Impulsa la Innovación
              </h1>
              <p className='mb-5 text-white text-left'>
                Justina.IO es una plataforma sanitaria creada a partir de
                tecnologías conectadas y herramientas inteligentes, para lograr
                la unificación de datos, que permiten conectar al paciente con
                el profesional de la salud, acelerando la comunicación y
                perfeccionando las operaciones, con el objetivo de influir en
                los resultados de salud, mejorando el bienestar del paciente.
              </p>
              <button className=' bg-[#25CED1] text-white rounded-full px-4 py-1 self-end'>
                Descarga la App
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className=' py-4 bg-[#FCEADE] flex justify-center'>
        <div className='w-12'>
          <img src={heart} alt='' />
        </div>
        <div className='w-80 text-right text-[#EA526F] font-bold'>
          <h3>“Ayudemos a todos los que podamos” </h3>
          <p>Justina Lo Cane</p>
        </div>
      </div>

      {/* About Section */}
      <section className='py-12'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center'>
            ¿Qué es Justina.ie?
          </h2>
          <p className='text-lg text-center mt-4'>
            Justina.ie es una aplicación móvil diseñada para conectar a
            pacientes, profesionales de la salud y donantes de órganos,
            simplificando el proceso de donación y trasplante.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {/* Card 1 */}
            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h3 className='card-title'>Para Pacientes</h3>
                <p>
                  Accede a información sobre donantes, gestiona tus citas y
                  obtén apoyo emocional.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h3 className='card-title'>Para Profesionales de la Salud</h3>
                <p>
                  Simplifica la gestión de pacientes, accede a historial médico
                  y coordina trasplantes.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h3 className='card-title'>Donación de Órganos</h3>
                <p>
                  Infórmate sobre la importancia de la donación y cómo puedes
                  ayudar a salvar vidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer footer-center p-10 bg-base-200 text-base-content'>
        <div>
          <p>Copyright © 2023 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

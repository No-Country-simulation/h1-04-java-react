import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import { IoOpenOutline } from "react-icons/io5";
import miniLogo from "../../Assets/Imgs/miniLogo.png";
import camilo from "../../Assets/Imgs/team/camilo.jpg";
import cyn from "../../Assets/Imgs/team/cyn.jpg";
import diego from "../../Assets/Imgs/team/diego.png";
import facu from "../../Assets/Imgs/team/facu.jpg";
import lisandro from "../../Assets/Imgs/team/lisandro.jpg";
import marli from "../../Assets/Imgs/team/marli.jpg";
import matias from "../../Assets/Imgs/team/matias.png";
import valerie from "../../Assets/Imgs/team/valerie.jpg";

const FooterLanding = () => {
  const [email, setEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Diego Gonzalez',
      role: 'Team Leader',
      linkedin: 'https://www.linkedin.com/in/diego-gonzalez-7937aa16/',
      avatar: diego,
    },
    {
      name: 'Yosmarli Parica',
      role: 'QA Tester',
      linkedin: 'https://www.linkedin.com/in/yosmarli-parica-1156461a2/',
      avatar: marli,
    },
    {
      name: 'Cynthia Olocco',
      role: 'Diseño UX/UI',
      linkedin: 'https://www.linkedin.com/in/cynthia-olocco-141081295/',
      avatar: cyn,
    },
    {
      name: 'Lisandro Argüello',
      role: 'Diseño UX/UI',
      linkedin: 'https://www.linkedin.com/in/lisandroarguello/',
      avatar: lisandro,
    },
    {
      name: 'Facundo Bacigalupo',
      role: 'Frontend',
      linkedin: 'https://www.linkedin.com/in/diego-raul-barrionuevo/',
      avatar: facu,
    },
    {
      name: 'Camilo Martinez',
      role: 'Frontend',
      linkedin: 'https://www.linkedin.com/in/camilomartinez01/',
      avatar: camilo,
    },
    {
      name: 'Valerie Ramos',
      role: 'Backend',
      linkedin: 'https://www.linkedin.com/in/valeriedramosg/',
      avatar: valerie,
    },
    {
      name: 'Matias Acevedo',
      role: 'Backend',
      linkedin: 'https://www.linkedin.com/in/matias-nicolas-acevedo/',
      avatar: matias,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Mostrar el modal si el correo es válido
    setIsModalVisible(true);
    setEmail(''); // Limpiar el campo de email después de enviar
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <footer className="w-full bg-[#fceade] py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between px-8 md:px-14">
          {/* Logo y Descripción */}
          <div className="w-[100%] md:w-[20rem] mb-8 lg:mb-0">
            <div className="mb-4">
              <img src={miniLogo} alt="Logo" className="w-28 h-7" />
            </div>
            <div className="text-[#1a1a1a] text-base font-semibold leading-tight">
              Te presentamos una aplicación innovadora, amigable y de fácil uso,
              que posibilita a los profesionales de la salud y a los pacientes participar de
              una manera activa en el cuidado de la salud.
            </div>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/multiplicatex7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#1da1f2] transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/MultiplicateX7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#e1306c] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/zeke_lo_cane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#1da1f2] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@multiplicatex7lacampanadej631"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#ff0000] transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
            <div className='mt-2'>
              <div
                className="text-[#8163b0] text-base font-semibold cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center"
                onClick={() => setIsModalOpen(true)}
              >
                Desarrollado por &nbsp; <IoOpenOutline />
              </div>
            </div>

          </div>
          {/* Newsletter */}
          <div className="lg:w-1/3">
            <div className="text-[#ea526f] text-xl font-semibold uppercase mb-4">Newsletter</div>
            <div className="text-[#1a1a1a] font-semibold mb-4">
              Para más información sobre la aplicación como de la campaña de Justina, envianos tu correo
              y te contestaremos a la brevedad.
            </div>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Correo"
                className="w-full p-2 border border-[#25ced1] rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full px-4 bg-[#25ced1] rounded flex items-center justify-center text-white"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-[#ea526f]"></div>
        <div className="flex justify-center mt-4 text-[#ea526f] text-base font-semibold">
          <p>© Copyright 2024 .JUSTINA.IO. Todos los derechos reservados.</p>
          <p
            className="text-[#ea526f] text-base font-semibold cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            &nbsp; Equipo Desarrollo.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl max-h-[96vh] overflow-y-auto">
            <h2 className="text-black text-base text-center font-semibold mb-4">
              💗 h1-04-java-react | No Country 🌎
            </h2>
            <div className="grid grid-cols-2 gap-4 ">
              {teamMembers.map((member) => (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:scale-105 transition-transform duration-300"
                >
                  <div key={member.name} className="flex text-[#8163b0] bg-[#fceade] items-center p-2 border border-[#ea526f] rounded-lg">
                    <img
                      src={member.avatar || 'https://via.placeholder.com/150'}
                      alt={`${member.name}'s avatar`}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold  text-center">{member.name}</p>
                      <div className="flex items-center mt-1">
                        <p className="text-sm text-black font-semibold">{member.role}&nbsp; </p>
                        <div className='text-blue-500'>
                          <FaLinkedin />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-[#25ced1] text-white rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}


      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold">¡Suscripción exitosa!</h2>
            <p>Te has suscrito exitosamente al newsletter.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-[#25ced1] text-white rounded ml-auto"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterLanding;

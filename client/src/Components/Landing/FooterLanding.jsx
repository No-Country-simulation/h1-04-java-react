import miniLogo from "../../Assets/Imgs/miniLogo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const FooterLanding = () => {
  return (
    <footer className="w-full bg-[#fceade] py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between px-14">
          {/* Logo y Descripción */}
          <div className="w-[20rem] mb-8 lg:mb-0">
            <div className="mb-4 ">
              <img src={miniLogo} alt="Logo" className="w-28 h-7" />
            </div>
            <div className="text-[#1a1a1a] text-base font-semibold leading-tight">
              Te presentamos una aplicación innovadora, amigable y de fácil uso, 
              que posibilita a los profesionales de la salud y a los pacientes participar de 
              una manera activa en el cuidado de la salud.
            </div>
            <div className="flex mt-4 space-x-4">
              <div className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#1da1f2] transition-colors">
                <FaFacebookF />
              </div>
              <div className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#e1306c] transition-colors">
                <FaInstagram />
              </div>
              <div className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#1da1f2] transition-colors">
                <FaTwitter />
              </div>
              <div className="w-6 h-6 bg-[#25ced1] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#ff0000] transition-colors">
                <FaYoutube />
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
            <div className="relative">
              <input 
                type="text" 
                placeholder="Correo" 
                className="w-full p-2 border border-[#25ced1] rounded"
              />
              <button className="absolute top-0 right-0 h-full px-4 bg-[#25ced1] rounded flex items-center justify-center text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#ea526f]"></div>
        <div className="flex justify-center mt-4 text-[#ea526f] text-base font-semibold">
          <p>© Copyright 2024 .JUSTINA.IO. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;

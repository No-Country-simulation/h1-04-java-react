import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import hearth from '../../Assets/Imgs/hearthNavbar.png';

const NavBarDownload = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDownloadClick = () => {
    navigate('/download');
  };

  const handleJustinaIoClick = () => {
    navigate('/');
  };

  const handleJustinaLoCaneClick = () => {
    navigate('/');
  };

  const handleTransplanteClick = () => {
    navigate('/');
  };

  return (
    <div className="sticky top-4 z-50">
      <div className="absolute w-full h-[5.5rem] mt-[-1.5rem] backdrop-blur-sm rounded-md"></div>
      <div className="relative w-full max-w-screen-xl h-12 bg-[#fceade]/90 rounded-md shadow-md flex justify-between items-center px-4 md:px-8 mx-auto">
        <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-8">
          <img
            className='w-8 h-6 md:w-10 md:h-8 cursor-pointer'
            src={hearth}
            alt="hearth"
            onClick={handleJustinaIoClick}
          />
          <button
            onClick={handleJustinaIoClick}
            className="text-[#232233] text-sm md:text-lg font-semibold hover:underline uppercase leading-relaxed hover:text-[#ff4900] cursor-pointer"
          >
            JUSTINA.IO
          </button>
          <button
            onClick={handleJustinaLoCaneClick}
            className="hidden md:block text-[#232233] text-sm md:text-lg font-semibold hover:underline uppercase leading-relaxed hover:text-[#ff4900] cursor-pointer"
          >
            JUSTINA LO CANE
          </button>
          <button
            onClick={handleTransplanteClick}
            className="hidden md:block text-[#232233] text-sm md:text-lg font-semibold hover:underline uppercase leading-relaxed hover:text-[#ff4900] cursor-pointer"
          >
            TRASPLANTE
          </button>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
          <div
            onClick={handleLoginClick}
            className="h-8 p-1 sm:p-2 md:p-4 bg-white rounded-md border border-[#ea526f] flex justify-center items-center cursor-pointer hover:bg-[#ea526f] hover:border-[#fceade] hover:text-white transition-colors"
          >
            <div className="text-[#ea526f] text-xs sm:text-sm md:text-base font-semibold leading-tight hover:text-white">
              INICIAR SESIÓN
            </div>
          </div>
          <div
            onClick={handleDownloadClick}
            className="h-8 px-1 sm:px-2 md:px-4 bg-[#ea526f] border border-[#ea526f] rounded-md flex items-center justify-between space-x-1 md:space-x-2 cursor-pointer hover:bg-[#c44559] hover:border-[#fceade]"
          >
            <div className="text-white text-xs sm:text-sm md:text-base font-semibold">
              DESCARGAR
            </div>
            <FaDownload className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDownload;

import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBarLanding = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDownloadClick = () => {
    navigate('/download');
  };

  const handleJustinaIoClick = () => {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
  };

  const handleJustinaLoCaneClick = () => {
    document.getElementById('section4').scrollIntoView({ behavior: 'smooth' });
  };

  const handleTransplanteClick = () => {
    document.getElementById('section7').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-4 z-50">
      <div className="absolute w-full h-[5.5rem] mt-[-1.5rem] backdrop-blur-sm rounded-md"></div>
      <div className="relative w-full max-w-screen-xl h-12 bg-[#fceade]/90 rounded-md shadow-md flex justify-between items-center px-8 mx-auto">
        <div className="flex justify-between items-center space-x-8">
          <button
            onClick={handleJustinaIoClick}
            className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-relaxed hover:text-[#ff4900] cursor-pointer"
          >
            JUSTINA.IO
          </button>
          <button
            onClick={handleJustinaLoCaneClick}
            className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer"
          >
            JUSTINA LO CANE
          </button>
          <button
            onClick={handleTransplanteClick}
            className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer"
          >
            TRASPLANTE
          </button>
        </div>
        <div className="flex justify-between items-center space-x-6">
          <div
            onClick={handleLoginClick}
            className="h-8 p-4 bg-white rounded-md border border-[#ea526f] flex justify-center items-center cursor-pointer hover:bg-[#ea526f] hover:border-[#fceade] hover:text-white transition-colors"
          >
            <div className="text-[#ea526f] text-base font-semibold leading-tight hover:text-white">
              INICIAR SESIÓN
            </div>
          </div>
          <div
            onClick={handleDownloadClick}
            className="h-8 px-4 bg-[#ea526f] border border-[#ea526f] rounded-md flex items-center justify-between space-x-2 cursor-pointer hover:bg-[#c44559] hover:border-[#fceade]"
          >
            <div className="text-white text-base font-semibold">
              DESCARGAR
            </div>
            <FaDownload className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLanding;

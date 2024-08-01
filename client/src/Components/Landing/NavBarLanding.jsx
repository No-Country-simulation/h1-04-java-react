import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBarLanding = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="w-full max-w-screen-xl h-12 bg-[#fceade] rounded-md shadow-md flex justify-between items-center px-8 mx-auto sticky top-6 z-50">
      <div className="flex justify-between items-center space-x-8">
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-relaxed hover:text-[#ff4900] cursor-pointer">
          JUSTINA.IO
        </button>
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer">
          JUSTINA LO CANE
        </button>
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer">
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
        <div className="h-8 px-4 bg-[#ea526f] border border-[#ea526f] rounded-md flex items-center justify-between space-x-2 cursor-pointer hover:bg-[#c44559] hover:border-[#fceade]">
          <div className="text-white text-base font-semibold">
            DESCARGAR
          </div>
          <FaDownload className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavBarLanding;

import { FaDownload } from 'react-icons/fa';

const NavBarLanding = () => {
  return (
    <div className="w-full max-w-screen-xl h-12 bg-[#fceade] rounded-md shadow-md flex justify-between items-center px-8 mx-auto sticky top-6 z-50">
      <div className="flex justify-between items-center space-x-8">
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-relaxed hover:text-[#ff4900] cursor-pointer">
          JUSTINA.IO
        </button>
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer">
          JUSTINA lO cANE
        </button>
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer">
          TRASPLANTE
        </button>
      </div>
      <div className="flex justify-between items-center space-x-8">
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer">
          Contacto
        </button>
        <button className="text-[#232233] text-lg font-semibold hover:underline uppercase leading-[30px] hover:text-[#ff4900] cursor-pointer">
          FAQs
        </button>
        <div className="h-9 px-4 bg-[#ea526f] rounded-md flex items-center justify-between space-x-2 cursor-pointer hover:bg-[#c44559]">
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

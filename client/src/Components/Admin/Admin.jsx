import { useState } from 'react';
import { FaBars, FaCalendarAlt, FaUser, FaUserMd, FaExchangeAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Appointments from './Appointments';
import Patients from './Patients';
import Doctors from './Doctors';
import CrossTransplant from './CrossTransplant';
import Settings from './Settings';
import Logo from '../../Assets/Imgs/miniLogo.png';
import './admin.css';

const Admin = () => {
  const [activeComponent, setActiveComponent] = useState('Appointments');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (component) => {
    setActiveComponent(component);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Appointments':
        return <Appointments />;
      case 'Patients':
        return <Patients />;
      case 'Doctors':
        return <Doctors />;
      case 'CrossTransplant':
        return <CrossTransplant />;
      case 'Settings':
        return <Settings />;
      default:
        return <Appointments />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`w-64 bg-white text-black flex flex-col fixed top-0 left-0 h-full z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-200 ease-in-out p-4`}>
        <div className="flex justify-center mb-6">
          <img className='w-40' src={Logo} alt="logo-justina" />
        </div>
        
        <button className="flex items-center p-4 pl-6 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Appointments')}>
          <FaCalendarAlt className="mr-2" /> Turnos
        </button>
        <button className="flex items-center p-4 pl-6 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Patients')}>
          <FaUser className="mr-2" /> Pacientes
        </button>
        <button className="flex items-center p-4 pl-6 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Doctors')}>
          <FaUserMd className="mr-2" /> Médicos
        </button>
        <button className="flex items-center p-4 pl-6 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('CrossTransplant')}>
          <FaExchangeAlt className="mr-2" /> Transplante Cruzado
        </button>
        <button className="flex items-center p-4 pl-6 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Settings')}>
          <FaCog className="mr-2" /> Configuración
        </button>
        <button className="flex items-center p-4 pl-6 hover:bg-[#fde0e0] hover:text-red-600 mt-4" onClick={handleLogout}>
          <FaSignOutAlt className="mr-2" /> Cerrar Sesión
        </button>
      </aside>

      {/* Mobile Menu Button */}
      <button className="md:hidden w-10 h-10 fixed top-3 left-1 bg-white flex items-center justify-center z-50" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FaBars />
      </button>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 md:ml-64"> {/* Aca necesito que cuando el break point sea mobile el ml-64 este en 0 */}
        {renderComponent()}
      </main>
    </div>
  );
}

export default Admin;

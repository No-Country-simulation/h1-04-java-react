import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
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

  const handleMenuClick = (component) => {
    setActiveComponent(component);
    setSidebarOpen(false); // Cierra el menú después de seleccionar una opción
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`w-64 bg-white text-black flex flex-col absolute md:relative transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-200 ease-in-out p-4`}>
        <div className="flex justify-center mb-6">
          <img className='w-40' src={Logo} alt="logo-justina" />
        </div>
        
        <button className="p-4 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Appointments')}>Turnos</button>
        <button className="p-4 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Patients')}>Pacientes</button>
        <button className="p-4 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Doctors')}>Médicos</button>
        <button className="p-4 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('CrossTransplant')}>Transplante Cruzado</button>
        <button className="p-4 hover:bg-[#d9f2ff] hover:text-[#0087d0]" onClick={() => handleMenuClick('Settings')}>Configuración</button>
      </aside>

      {/* Mobile Menu Button */}
      <button className="md:hidden w-10 h-10 absolute top-3 left-1 bg-white flex items-center justify-center" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FaBars />
      </button>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {renderComponent()}
      </main>
    </div>
  );
}

export default Admin;

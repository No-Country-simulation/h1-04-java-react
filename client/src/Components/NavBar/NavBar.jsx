import { useContext, useState } from "react";
import miniLogo from "../../Assets/Imgs/miniLogo.png";
import logo from "../../Assets/Imgs/logo.png";
import searchIcon from "../../Assets/Imgs/search.png";
import hamburgerIcon from "../../Assets/Imgs/navBar.png";
import notificationIcon from "../../Assets/Imgs/notifications.png";
import calendarIcon from "../../Assets/Imgs/calendar.png";
import treatmentIcon from "../../Assets/Imgs/treatment.png";
import progressIcon from "../../Assets/Imgs/progress.png";
import exitIcon from "../../Assets/Imgs/exit.png";
import DoctorContext from "../../context/DoctorContext";
import "./navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useContext(DoctorContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-top flex justify-between items-center p-4'>
        <img src={hamburgerIcon} alt='menu' className='w-6 h-6 cursor-pointer' onClick={toggleMenu} />
        <a href='/patient'><img src={miniLogo} alt='logo' className='w-32' /></a>
        <img src={notificationIcon} alt='notifications' className='w-6 h-6' />
      </div>
      
      { isMenuOpen && (
        // <div className='navbar-menu flex flex-col justify-between h-full w-64 p-4 fixed top-0 left-0 z-50'>
        <div className='navbar-menu flex flex-col justify-between h-screen p-4 fixed top-0 left-0 z-50'>
          <div>
            <div className='search-bar flex items-center px-2 mb-4'>
              <input
                type='text'
                placeholder='Buscar'
                className='bg-transparent flex-grow outline-none'
              />
              <img src={searchIcon} alt='search' className='w-4 h-4' />
            </div>
            
            <ul className='space-y-4'>
              <a href='/turn-calendar' className='flex items-center'>
                <img src={calendarIcon} alt='turnos' className='w-6 h-6 mr-2' />
                Turnos <span className='badge ml-auto'>1</span>
              </a>
              <a href='/treatments' className='flex items-center'>
                <img
                  src={treatmentIcon}
                  alt='tratamiento'
                  className='w-6 h-6 mr-2'
                />
                Tratamiento <span className='badge ml-auto'>2</span>
              </a>
              <a href='#' className='flex items-center'>
                <img
                  src={progressIcon}
                  alt='avances'
                  className='w-6 h-6 mr-2'
                />
                Adherencia <span className='badge ml-auto'>2</span>
              </a>
              <a href='/login' className='flex items-center' onClick={logout}>
                <img src={exitIcon} alt='salir' className='w-6 h-6 mr-2' />
                Salir
              </a>
            </ul>
          </div>
          <img src={logo} alt='footer logo' className='w-48 mx-auto' />
        </div>
      ) }
    </div>
  );
};

export default NavBar;
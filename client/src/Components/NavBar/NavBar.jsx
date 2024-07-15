import { useState } from "react";
import miniLogo from "../../Assets/Imgs/miniLogo.png";
import logo from "../../Assets/Imgs/logo.png";
import searchIcon from "../../Assets/Imgs/search.png";
import hamburgerIcon from "../../Assets/Imgs/navBar.png";
import notificationIcon from "../../Assets/Imgs/notifications.png";
import calendarIcon from "../../Assets/Imgs/calendar.png";
import treatmentIcon from "../../Assets/Imgs/treatment.png";
import progressIcon from "../../Assets/Imgs/progress.png";
import exitIcon from "../../Assets/Imgs/exit.png";
import "./navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-top flex justify-between items-center p-4'>
        <img
          src={hamburgerIcon}
          alt='menu'
          className='w-6 h-6 cursor-pointer'
          onClick={toggleMenu}
        />
        <img src={miniLogo} alt='logo' className='w-32' />
        <img src={notificationIcon} alt='notifications' className='w-6 h-6' />
      </div>
      
      {isMenuOpen && (
        <div className='navbar-menu flex flex-col justify-between h-screen w-64 p-4 absolute top-0 left-0 z-50'>
          <div>
            <div className='search-bar flex items-center px-2 mb-4'>
              <input type='text' placeholder='Buscar' className='bg-transparent flex-grow outline-none' />
              <img src={searchIcon} alt='search' className='w-4 h-4' />
            </div>
            
            <ul className='space-y-4'>
              <a href='/new-turn' className='flex items-center'>
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
                Avances <span className='badge ml-auto'>2</span>
              </a>
              <a href='#' className='flex items-center' onClick={toggleMenu}>
                <img src={exitIcon} alt='salir' className='w-6 h-6 mr-2' />
                Salir
              </a>
            </ul>
          </div>
          <img src={logo} alt='footer logo' className='w-48 mx-auto' />
        </div>
      )}
    </div>
  );
};

export default NavBar;
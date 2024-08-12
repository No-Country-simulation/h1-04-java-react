import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Imgs/logo.png";
import menu from "../../Assets/Imgs/menuHamburguesa.png";
import out from "../../Assets/Imgs/out.svg";
import DoctorContext from "../../context/DoctorContext";
import img1 from "../../Assets/Imgs/doctorFooter1.png";
import img2 from "../../Assets/Imgs/doctorFooter2.png";
import img3 from "../../Assets/Imgs/doctorFooter3.png";
import img4 from "../../Assets/Imgs/doctorFooter4.png";
import "./otherNavBarDoctor.css";

const OtherNavBarDoctor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { logout } = useContext(DoctorContext);
  const navigate = useNavigate();

  function log() {
    logout();
    navigate("/");
  }

  return (
    <div className='otherContainerOtherNavBar'>
      <span className='icon-container' onClick={toggleSidebar}>
        <img
          src={menu}
          alt={isSidebarOpen ? "close menu" : "open menu"}
          className='menu-icon'
        />
      </span>

      <div
        className={`sidebarDoctor ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className='containerImgNavBar'>
          <img src={logo} alt='logo' className='mb-4' />
        </div>

        <div className='sidebar-content'>
          <Link
            to='/transplantHome'
            className='buttonsOtherNavBarDoctor p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer'
          >
            <img src={img1} alt='img' />
            <p>TRANSPLANTE</p>
          </Link>
          <Link
            to='/doctorPatient'
            className='buttonsOtherNavBarDoctor p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer'
          >
            <img src={img2} alt='img' />
            <p>TURNOS</p>
          </Link>
          <Link
            to='/patientLists'
            className='buttonsOtherNavBarDoctor p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer'
          >
            <img src={img3} alt='img' />
            <p>PACIENTES</p>
          </Link>
          <Link
            to='/doctorConfiguration'
            className='buttonsOtherNavBarDoctor p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer'
          >
            <img src={img4} alt='img' />
            <p>AJUSTES</p>
          </Link>
        </div>

        <div className='sidebar-footer'>
          <button
            onClick={() => log()}
            className='buttonsOtherNavBarDoctor p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer'
          >
            <img src={out} alt='img' />
            <p>CERRAR SESION</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherNavBarDoctor;

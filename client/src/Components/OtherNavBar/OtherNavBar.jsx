import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Imgs/logo.png"
import settings from "../../Assets/Imgs/settings.png";
import treatBlack from "../../Assets/Imgs/treatBlack.png"
import turno from "../../Assets/Imgs/calendar.png";
import home from "../../Assets/Imgs/home.png";
import menu from "../../Assets/Imgs/menuHamburguesa.png";
import out from "../../Assets/Imgs/out.svg"
import DoctorContext from "../../context/DoctorContext";
import "./otherNavBar.css"

const OtherNavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const { logout } = useContext(DoctorContext);
    const navigate = useNavigate();

    function log() {
        logout();
        navigate("/");
    }

    return (
        <div className="containerOtherNavBar">
            <span className="icon-container" onClick={toggleSidebar}>
                <img src={menu} alt={isSidebarOpen ? "close menu" : "open menu"} className="menu-icon" />
            </span>
            
            <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="containerImgNavBar">
                    <img src={logo} alt="logo" className="mb-4" />
                </div>
                
                <div className="sidebar-content">
                    <Link to='/treatments' className="buttonsOtherNavBar p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                        <img src={treatBlack} alt="img" />
                        <p>TRATAMIENTO</p>
                    </Link>
                    <Link to='/turn-calendar' className="buttonsOtherNavBar p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                        <img src={turno} alt="img" />
                        <p>TURNOS</p>
                    </Link>
                    <Link to='/profile-configuration' className="buttonsOtherNavBar p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                        <img src={settings} alt="img" />
                        <p>AJUSTES</p>
                    </Link>
                    <Link to='/patient' className="buttonsOtherNavBar p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                        <img src={home} alt="img" />
                        <p>INICIO</p>
                    </Link>
                </div>
                
                <div className="sidebar-footer">
                    <button onClick={() => log()} className="buttonsOtherNavBar p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                        <img src={out} alt="img" />
                        <p>CERRAR SESION</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtherNavBar
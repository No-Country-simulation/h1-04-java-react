import { useState } from "react";
import { Link } from "react-router-dom";
import home from "../../Assets/Imgs/home.png";
import urgency from "../../Assets/Imgs/buttonFooter.png";
import settings from "../../Assets/Imgs/settings.png";
import turno from "../../Assets/Imgs/calendar.png";
import treatBlack from "../../Assets/Imgs/treatBlack.png"
import loading from "../../Assets/Imgs/loading.svg"
import "./footer.css";

const Footer = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const ViewPopUp = () => (
      <section className="viewPopUpFooter">
          <div className="popUpContentFooter">
              <h2>Llamando...</h2>
              <img src={loading} alt="Cargando"/>
              <div className="btn">
                  <button onClick={() => setIsPopUpVisible(false)}>Dejar de llamar</button>
              </div>
          </div>
      </section>
  );

  return (
    <div className="containerFooter">
        <Link to='/profile-configuration'>
          <img src={settings} alt='settings img' />
          <p>Ajustes</p>
        </Link>
        <Link to='/treatments'>
          <img src={treatBlack} alt='settings img' />
          <p>Tratamiento</p>
        </Link>
        <button onClick={() => setIsPopUpVisible(true)} className='urgency'>
          <img src={urgency} alt='urgency img' />
          <p>Urgencia</p>
        </button>
        <Link to='/turn-calendar'>
          <img src={turno} alt='settings img' />
          <p>Turnos</p>
        </Link>
        <Link to='/patient'>
          <img src={home} alt='home img' />
          <p>Inicio</p>
        </Link>
      
      { isPopUpVisible && <ViewPopUp /> }
    </div>
  );
};

export default Footer;

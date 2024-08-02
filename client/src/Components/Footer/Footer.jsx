import home from "../../Assets/Imgs/home.png";
import urgency from "../../Assets/Imgs/buttonFooter.png";
import settings from "../../Assets/Imgs/settings.png";
import turno from "../../Assets/Imgs/calendar.png";
import treatment from "../../Assets/Imgs/treatment.png";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className='containerFooter'>
      <Link to='/profile-configuration'>
        <img src={settings} alt='settings img' />
        <p>Ajustes</p>
      </Link>
      <Link to='/treatments'>
        <img src={treatment} alt='settings img' />
        <p>Tratamiento</p>
      </Link>
      <Link to='Aca va numero o url' className='urgency'>
        <img src={urgency} alt='urgency img' />
        <p>Urgencia</p>
      </Link>
      <Link to='/turn-calendar'>
        <img src={turno} alt='settings img' />
        <p>Turnos</p>
      </Link>
      <Link to='/patient'>
        <img src={home} alt='home img' />
        <p>Inicio</p>
      </Link>
    </div>
  );
};

export default Footer;

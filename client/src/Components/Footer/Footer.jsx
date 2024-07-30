import home from "../../Assets/Imgs/home.png";
import urgency from "../../Assets/Imgs/buttonFooter.png";
import settings from "../../Assets/Imgs/settings.png";
import turno from "../../Assets/Imgs/calendar.png"
import treatment from "../../Assets/Imgs/treatment.png"
import "./footer.css";

const Footer = () => {
    return (
        <div className="containerFooter">
            <a href='/profile-configuration'>
                <img src={settings} alt="settings img" />
                <p>Ajustes</p>
            </a>
            <a href='/treatments'>
                <img src={treatment} alt="settings img" />
                <p>Tratamiento</p>
            </a>
            <a href='Aca va numero o url' className="urgency">
                <img src={urgency} alt="urgency img" />
                <p>Urgencia</p>
            </a>
            <a href='/turn-calendar'>
                <img src={turno} alt="settings img" />
                <p>Turnos</p>
            </a>
            <a href='/patient'>
                <img src={home} alt="home img" />
                <p>Inicio</p>
            </a>
        </div>
    )
};

export default Footer
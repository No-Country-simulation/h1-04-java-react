import home from "../../Assets/Imgs/home.png";
import urgency from "../../Assets/Imgs/urgency.png";
import settings from "../../Assets/Imgs/settings.png";
import "./footer.css";

const Footer = () => {
    return (
        <div className="containerFooter">
            <a href="/patient">
                <img src={home} alt="home img" />
            </a>
            <a className="urgency" href="Aca va numero o url">
                <img src={urgency} alt="urgency img" />
                <p>Urgencia</p>
            </a>
            <a href="#">
                <img src={settings} alt="settings img" />
            </a>
        </div>
    )
};

export default Footer
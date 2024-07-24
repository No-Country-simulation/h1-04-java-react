import { useNavigate } from "react-router-dom"
import { useState } from "react"
import arrowLeft from "../../../Assets/Imgs/anotherArrowLeft.png"
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png"
import tratamiento from "../../../Assets/Imgs/tratamiento.png"
import speak from "../../../Assets/Imgs/speak.png"
import "./consultation.css"

const Consultation = () => {
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate()

    return (
        <div className="consultation">
            <button className="backPage" onClick={() => navigate(-1)}>
                <img src={arrowLeft} alt="back" />
                <p>Consulta</p>
            </button>
            
            <div className="header">
                <div>
                    <img src={profileDoctor} alt="Laura Gomez" />
                </div>
                <div className="detailsHeader">
                    <h2>Laura Gomez</h2>
                    <p>Consulta por control</p>
                </div>
            </div>
            
            <section className="containerTreatments newColors">
                <a href='/' className="treatmentsStyles">
                    <img src={tratamiento} alt="Tratamiento" />
                    <p>Tratamiento</p>
                </a>
                <a href='/' className="treatmentsStyles">
                    <img src={tratamiento} alt="Historia Clinica" />
                    <p>Historia Clinica</p>
                </a>
                <a href='/' className="treatmentsStyles">
                    <img src={tratamiento} alt="Estudios" />
                    <p>Estudios</p>
                </a>
                <a href='/' className="treatmentsStyles">
                    <img src={tratamiento} alt="Medicación" />
                    <p>Medicación</p>
                </a>
            </section>
            
            <section className="writeText">
                <p>Notas</p>
                <textarea name="text" id="text" className={isFocused ? "focused" : ""} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}></textarea>
                <div>
                    <img src={speak} alt="Hablar" />
                </div>
            </section>
            
            <button id="start-consultation">Finalizar consulta</button>
        </div>
    )
}

export default Consultation
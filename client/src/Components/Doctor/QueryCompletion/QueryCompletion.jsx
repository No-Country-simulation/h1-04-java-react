import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import DoctorContext from "../../../context/DoctorContext";
import arrowLeft from "../../../Assets/Imgs/anotherArrowLeft.png"
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png"
import "./queryCompletion.css"

const QueryCompletion = () => {
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate()
    const { notes } = useContext(DoctorContext);


    return (
        <div className="query-completion">
            <button className="backPage" onClick={() => navigate(-1)}>
                <img src={arrowLeft} alt="back" />
                <p>Recomendaciones y recetas</p>
            </button>
            
            <section className="header">
                <div>
                    <img src={profileDoctor} alt="Laura Gomez" />
                </div>
                <div className="detailsHeader">
                    <h2>Laura Gomez</h2>
                    <p>Consulta por control</p>
                </div>
            </section>
            
            <section className="mt-10">
                <p>Resumen de la consulta</p>
                <div className="queryNotes">
                    <h2>Notas...</h2>
                    <p>{ notes }</p>
                </div>
            </section>
            
            <section className="footer-query-buttons">
                <button>Proximo turno</button>
                <button>Receta</button>
            </section>
            
            <section className="writeTextQuery">
                <p>Indicaciones</p>
                <textarea name="text" id="text" className={isFocused ? "focused" : ""} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}></textarea>
            </section>
            
            <button id="start-consultation">Enviar</button>
        </div>
    )
}

export default QueryCompletion
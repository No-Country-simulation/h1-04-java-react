import treatment from "../../../Assets/Imgs/treatment.png"
import treatmentt from "../../../Assets/Imgs/tratamiento.png"
import studies from "../../../Assets/Imgs/studies.png"
import nutricion from "../../../Assets/Imgs/nutricion.png"
import gim from "../../../Assets/Imgs/gim.png"
import historiaCli from "../../../Assets/Imgs/historiaCli.png"
import medicacion from "../../../Assets/Imgs/medicacion.png"
import psicologia from "../../../Assets/Imgs/psicologia.png"
import trabajoSocial from "../../../Assets/Imgs/trabajoSocial.png"
import physiotherapy from "../../../Assets/Imgs/fisioterapia.png"
import others from "../../../Assets/Imgs/otros.png"
import "./treatments.css"

const Treatments = () => {
    return (
        <article>
            <div className="containerTitle">
                <img src={treatment} alt="Tratamiento" />
                <h1>Tratamientos</h1>
            </div>
            
            <section className="containerTreatments">
                <a href='/treatment-treatment' className="treatmentsStyles">
                    <img src={treatmentt} alt="Tratamiento" />
                    <p>Tratamiento</p>
                </a>
                <a href='/treatment-studies' className="treatmentsStyles">
                    <img src={studies} alt="Tratamiento" />
                    <p>Estudios Clínicos</p>
                </a>
                <a href='/treatment-nutrition' className="treatmentsStyles">
                    <img src={nutricion} alt="Tratamiento" />
                    <p>Nutrición</p>
                </a>
                <a href='/treatment-physical-activity' className="treatmentsStyles">
                    <img src={gim} alt="Tratamiento" />
                    <p>Actividad Física</p>
                </a>
                <a href='/treatment-medication' className="treatmentsStyles">
                    <img src={medicacion} alt="Tratamiento" />
                    <p>Medicación</p>
                </a>
                <a href='/treatment-clinical-history' className="treatmentsStyles">
                    <img src={historiaCli} alt="Tratamiento" />
                    <p>Historial Clinico</p>
                </a>
                <a href='/treatment-psychology' className="treatmentsStyles">
                    <img src={psicologia} alt="Tratamiento" />
                    <p>Psicología</p>
                </a>
                <a href='/treatment-social-work' className="treatmentsStyles">
                    <img src={trabajoSocial} alt="Tratamiento" />
                    <p>Trabajo Social</p>
                </a>
                <a href='/treatment-physiotherapy' className="treatmentsStyles">
                    <img src={physiotherapy} alt="Tratamiento" />
                    <p>Fisioterapia</p>
                </a>
                <a href='/treatment-others' className="treatmentsStyles">
                    <img src={others} alt="Tratamiento" />
                    <p>Otros</p>
                </a>
            </section>
        </article>
    )
}

export default Treatments
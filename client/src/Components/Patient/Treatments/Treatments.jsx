import treatment from "../../../Assets/Imgs/treatment.png"
import "./treatments.css"

const Treatments = () => {
    return (
        <article>
            <div className="containerTitle">
                <img src={treatment} alt="Tratamiento" />
                <h1>Tratamiento</h1>
            </div>
            
            <section className="containerTreatments">
                <a href='/treatment-nutrition' className="treatments">
                    <p>Nutrición</p>
                </a>
                <a href='/treatment-physical-activity' className="treatments">
                    <p>Actividad Física</p>
                </a>
                <a href='/treatment-clinical-history' className="treatments">
                    <p>Historial Clinico</p>
                </a>
                <a href='/treatment-medication' className="treatments">
                    <p>Medicación</p>
                </a>
                <a href='/treatment-psychology' className="treatments">
                    <p>Psicología</p>
                </a>
                <a href='/treatment-social-work' className="treatments">
                    <p>Trabajo Social</p>
                </a>
                <a href='/treatment-physiotherapy' className="treatments">
                    <p>Fisioterapia</p>
                </a>
                <a href='/treatment-others' className="treatments">
                    <p>Otros</p>
                </a>
            </section>
        </article>
    )
}

export default Treatments
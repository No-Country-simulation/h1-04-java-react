import treat from "../../../Assets/Imgs/treat.png";
import treatment from "../../../Assets/Imgs/treatment.png";
import studies from "../../../Assets/Imgs/studies.png";
import nutricion from "../../../Assets/Imgs/nutricion.png";
import gim from "../../../Assets/Imgs/gim.png";
import historiaCli from "../../../Assets/Imgs/historiaCli.png";
import medicacion from "../../../Assets/Imgs/medicacion.png";
import psicologia from "../../../Assets/Imgs/psicologia.png";
import trabajoSocial from "../../../Assets/Imgs/trabajoSocial.png";
import physiotherapy from "../../../Assets/Imgs/fisioterapia.png";
import turns from "../../../Assets/Imgs/turns.png";
import "./treatments.css";
import { Link } from "react-router-dom";

const Treatments = () => {
  return (
    <article>
      <div className='containerTitle'>
        <img src={treat} alt='Tratamiento' />
        <h1>Tratamientos</h1>
      </div>

      <section className='containerTreatments'>
        <Link to='/treatment-treatment' className='treatmentsStyles'>
          <img src={treatment} alt='Tratamiento' />
          <p>Tratamiento</p>
        </Link>
        <Link to='/treatment-studies' className='treatmentsStyles'>
          <img src={studies} alt='Tratamiento' />
          <p>Estudios Clínicos</p>
        </Link>
        <Link to='/treatment-nutrition' className='treatmentsStyles'>
          <img src={nutricion} alt='Tratamiento' />
          <p>Nutrición</p>
        </Link>
        <Link to='/treatment-physical-activity' className='treatmentsStyles'>
          <img src={gim} alt='Tratamiento' />
          <p>Actividad Física</p>
        </Link>
        <Link to='/treatment-medication' className='treatmentsStyles'>
          <img src={medicacion} alt='Tratamiento' />
          <p>Medicación</p>
        </Link>
        <Link to='/treatment-clinical-history' className='treatmentsStyles'>
          <img src={historiaCli} alt='Tratamiento' />
          <p>Historial Clinico</p>
        </Link>
        <Link to='#' className='treatmentsStyles'>
          <img src={psicologia} alt='Tratamiento' />
          <p>Psicología</p>
        </Link>
        <Link to='#' className='treatmentsStyles'>
          <img src={trabajoSocial} alt='Tratamiento' />
          <p>Trabajo Social</p>
        </Link>
        <Link to='#' className='treatmentsStyles'>
          <img src={physiotherapy} alt='Tratamiento' />
          <p>Fisioterapia</p>
        </Link>
        <Link to='/turn-calendar' className='treatmentsStyles'>
          <img src={turns} alt='Tratamiento' />
          <p>Turnos</p>
        </Link>
      </section>
    </article>
  );
};

export default Treatments;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import "./previousConsultation.css";

const PreviousConsultation = () => {
  const [activeTab, setActiveTab] = useState("Motivo de la cita");
  const location = useLocation();
  const { patient } = location.state || {};

  console.log(patient);

  return (
    <div className='previous-consultation'>
      <DoctorHeader text={"Pre-Consulta"} />

      <section className='boxCotent'>
        <div className='header'>
          <div>
            <img
              src={profileDoctor}
              alt={patient?.fullnamePatient || "Doctor"}
            />
          </div>
          <div className='detailsHeader'>
            <h2>{patient?.name || "Nombre del Doctor"}</h2>
            <p>{patient?.description || "Descripción de la consulta"}</p>
          </div>
        </div>
        <div>
          <div className='appointment-info'>
            <p>{patient?.date || "Fecha de la consulta"}</p>
            <p>{patient?.time || "Hora de la consulta"}</p>
          </div>
          <div className='buttons'>
            <button>Reagendar</button>
            <button>Cancelar</button>
          </div>
        </div>
      </section>

      <section className='boxCotent'>
        <div className='tabs'>
          <button
            className={activeTab === "Motivo de la cita" ? "active" : ""}
            onClick={() => setActiveTab("Motivo de la cita")}
          >
            Motivo de la cita
          </button>
          <button
            className={activeTab === "Tratamiento" ? "active" : ""}
            onClick={() => setActiveTab("Tratamiento")}
          >
            Tratamiento
          </button>
        </div>
        <div className='content'>
          {activeTab === "Motivo de la cita" ? (
            <>
              <h3>Introduction</h3>
              <p>Re-usable components built using Figr Design System</p>
              <br />
              <h3>Installation</h3>
              <p>How to install dependencies and structure your app.</p>
              <br />
              <h3>Typography</h3>
              <p>Styles for headings, paragraphs, lists...etc</p>
            </>
          ) : (
            <>
              <h3>Tratament</h3>
              <p>Re-usable components built using Figr Design System</p>
              <br />
              <h3>Tratament Installation</h3>
              <p>How to install dependencies and structure your app.</p>
              <br />
              <h3>Tratament Typography</h3>
              <p>Styles for headings, paragraphs, lists...etc</p>
            </>
          )}
        </div>
      </section>

      <div className='footer-buttons'>
        <button>Historia clínica</button>
        <button>Medicamentos</button>
      </div>
      <Link to={"/consultation"}>
        <button className='start-consultation'>Iniciar consulta</button>
      </Link>
    </div>
  );
};

export default PreviousConsultation;

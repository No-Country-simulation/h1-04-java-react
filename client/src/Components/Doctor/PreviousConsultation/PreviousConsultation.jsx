import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import "./previousConsultation.css";
import { getAppointmentById } from "../../../services/appointmentService";
import {
  formatHour,
  translateDay,
  translateAppointmentType,
  translateSpecialty,
} from "../../../utils/hourMapping";
import DoctorContext from "../../../context/DoctorContext";
const PreviousConsultation = () => {
  const [activeTab, setActiveTab] = useState("Motivo de la cita");
  const location = useLocation();
  const { patient } = location.state || {};
  const [isOpen, setIsOpen] = useState([]);

  const { fetchPatientById, authData } = useContext(DoctorContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState(null);
  const [dataAppointments, setDataAppointments] = useState([]);

  // console.log(patient);

  useEffect(() => {
    const handleGetAppointment = async () => {
      try {
        let datAppointment = await getAppointmentById(
          authData.token,
          authData.id
        );
        setDataAppointments(datAppointment);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch appointments");
      }
    };
    // console.log(dataAppointments);

    handleGetAppointment();
  }, [authData]);
  useEffect(() => {
    const loadPatientData = async () => {
      if (authData) {
        try {
          const data = await fetchPatientById(patient.id);
          setPatientData(data.patient.treatments);
          setIsOpen(Array(data.patient.treatments.length).fill(false));
          setError(null);
        } catch (error) {
          setError(error.message);
          setPatientData([]);
          console.log(error);
        }
      }
    };

    loadPatientData();
  }, []);

  return (
    <div className='previous-consultation'>
      <DoctorHeader text={"Pre-Consulta"} />

      <section className='boxCotent bg-white'>
        <div className='header'>
          <div>
            <img
              src={profileDoctor}
              alt={patient?.fullnamePatient || "Doctor"}
            />
          </div>
          <div className='detailsHeader'>
            <h2>{patient?.name || "Nombre del Doctor"}</h2>
            <p>
              {translateAppointmentType(patient?.description) ||
                "Descripción de la consulta"}
            </p>
          </div>
        </div>
        <div>
          <div className='appointment-info'>
            <p>{translateDay(patient?.date) || "Fecha de la consulta"}</p>
            <p>{formatHour(patient?.time) || "Hora de la consulta"}</p>
          </div>
          <div className='buttons'>
            <button>Reagendar</button>
            <button>Cancelar</button>
          </div>
        </div>
      </section>

      <section className='boxCotent bg-white'>
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
              <h3>Motivos</h3>
              {patientData.map((treatment, index) => (
                <p key={index}>{treatment.treatmentName}</p>
              ))}
              <br />
              <h3>Tratamiento</h3>
              {patientData.map((treatment, index) => (
                <p key={index}>{treatment.indications}</p>
              ))}
            </>
          ) : (
            <>
              <h3>Medicacion</h3>
              {patientData.map((treatment, index) => (
                <div key={index}>
                  {treatment.medicalPrescriptions.map((prescription, index) => (
                    <div key={index} className='border-t-2'>
                      <p>{prescription.medication.medicationName}</p>
                      <p>{prescription.indications}</p>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
        <Link to={"/consultation"}>
          <button className='start-consultation'>Iniciar consulta</button>
        </Link>
      </section>

      {/* <div className='footer-buttons'>
        <button>Historia clínica</button>
        <button>Medicamentos</button>
      </div> */}
    </div>
  );
};

export default PreviousConsultation;

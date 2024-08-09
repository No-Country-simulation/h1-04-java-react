import { useLocation, useNavigate } from "react-router-dom";
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import "./previousConsultation.css";
import { getAppointmentById } from "../../../services/appointmentService";
import {
  formatHour,
  translateDay,
  translateAppointmentType,
} from "../../../utils/hourMapping";
import SuccesModal from "../../Modals/SucessModal";
import DoctorContext from "../../../context/DoctorContext";
import { useContext, useEffect, useState } from "react";

const PreviousConsultation = () => {
  const [activeTab, setActiveTab] = useState("Motivo de la cita");
  const location = useLocation();
  const { patient } = location.state || {};
  const [isOpen, setIsOpen] = useState([]);
  const [showVerificando, setShowVerificando] = useState(false);

  const { fetchPatientById, authData } = useContext(DoctorContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState(null);
  const [dataAppointments, setDataAppointments] = useState([]);

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

    handleGetAppointment();
  }, [authData]);

  useEffect(() => {
    const loadPatientData = async () => {
      if (authData && patient) {
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
  }, [authData, patient]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consultation", { state: { patient: patient } });
  };

  return (
    <div className='previous-consultation flex flex-col justify-between h-full'>
      <div>
        <DoctorHeader text={"Pre-Consulta"} />

        <section className='boxCotent bg-white'>
          <div className='header'>
            <div>
              <img
                src={patient?.image || profileDoctor} // Usa la imagen pasada desde CardPatient
                alt={patient?.fullnamePatient || "Doctor"}
              />
            </div>
            <div className='detailsHeader'>
              <h2>{patient?.name || "Nombre del Doctor"}</h2>
              <p className='text-[#5A5555]'>
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
            <div className='flex justify-between '>
              <button
                className='text-blueColor font-bold'
                onClick={() => setShowVerificando(true)}
              >
                Reagendar
              </button>
            </div>
          </div>
        </section>

        <section className='boxCotent min-h-40  bg-white'>
          <div className=''>
            <h4 className={"font-bold mb-2"}>Motivo de la cita</h4>
          </div>

          <div className=''>
            <>
              {patientData.map((treatment, index) => (
                <p key={index}>{treatment.indications}.</p>
              ))}
              {patientData.map((treatment, index) => (
                <p key={index}>{treatment.treatmentName}.</p>
              ))}
            </>
          </div>
        </section>
      </div>
      <div>
        <div className='footer-buttons  '>
          <button className='A' onClick={() => setShowVerificando(true)}>
            Historia clínica
          </button>
        </div>

        <button onClick={handleClick} className='start-consultation'>
          Iniciar consulta
        </button>
      </div>

      <SuccesModal
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
        none
        title='No disponible'
        text='Estamos trabajando en esta característica'
      />
    </div>
  );
};

export default PreviousConsultation;

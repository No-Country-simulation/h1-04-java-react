import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DoctorContext from "../../../context/DoctorContext";
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png";
import SpeechRecognition from "./SpeechRecognition";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import consultation1 from "../../../Assets/Imgs/imgConsultation1.svg";
import consultation2 from "../../../Assets/Imgs/imgConsultation2.svg";
import consultation3 from "../../../Assets/Imgs/imgConsultation3.svg";
import consultation4 from "../../../Assets/Imgs/imgConsultation4.svg";
import SuccesModal from "../../Modals/SucessModal";
import "./consultation.css";
import {
  formatHour,
  translateDay,
  translateAppointmentType,
} from "../../../utils/hourMapping";

const Consultation = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showVerificando, setShowVerificando] = useState(false);

  const location = useLocation();
  const { patient } = location.state || {}; // Access patient data from location state

  const navigate = useNavigate();
  const { setNotes, recognizedText } = useContext(DoctorContext);

  const handleSubmitNotes = () => {
    setNotes(recognizedText);
    navigate("/query-completion");
  };

  return (
    <div className='consultation'>
      <DoctorHeader text={"Consulta"} />
      <div className='header'>
        <div>
          <img src={profileDoctor} alt={patient?.name || "Paciente"} />
        </div>
        <div className='detailsHeader'>
          <h2>{patient?.name || "Nombre del Paciente"}</h2>
          <p className='text-[#5A5555]'>
            {translateAppointmentType(patient?.description) ||
              "Descripción de la consulta"}
          </p>
        </div>
      </div>
      <section className='containerTreatments'>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor bg-[#FF8A5B26] text-[#FF8A5B]'
        >
          <img className='text-red-600' src={consultation1} alt='Tratamiento' />
          <p>Tratamiento</p>
        </button>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor bg-[#03A8AB26] text-[#03A8AB]'
        >
          <img src={consultation2} alt='Historia Clinica' />
          <p>Historia Clinica</p>
        </button>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor bg-[#8163B026] text-[#8163B0]'
        >
          <img src={consultation3} alt='Estudios' />
          <p>Estudios</p>
        </button>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor bg-[#EA526F26] text-[#EA526F]'
        >
          <img
            className='text-[#EA526F]'
            src={consultation4}
            alt='Medicación'
          />
          <p>Medicación</p>
        </button>
      </section>
      <SpeechRecognition />
      <button className='start-consultation mb-20' onClick={handleSubmitNotes}>
        Finalizar consulta
      </button>
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

export default Consultation;

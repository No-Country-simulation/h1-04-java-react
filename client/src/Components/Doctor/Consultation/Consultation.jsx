import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Consultation = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showVerificando, setShowVerificando] = useState(false);

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
          <img src={profileDoctor} alt='Laura Gomez' />
        </div>
        <div className='detailsHeader'>
          <h2>Laura Gomez</h2>
          <p>Consulta por control</p>
        </div>
      </div>

      <section className='containerTreatments'>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor'
        >
          <img src={consultation1} alt='Tratamiento' />
          <p>Tratamiento</p>
        </button>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor'
        >
          <img src={consultation2} alt='Historia Clinica' />
          <p>Historia Clinica</p>
        </button>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor'
        >
          <img src={consultation3} alt='Estudios' />
          <p>Estudios</p>
        </button>
        <button
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesDoctor'
        >
          <img src={consultation4} alt='Medicación' />
          <p>Medicación</p>
        </button>
      </section>

      <section className='writeText'>
        <p className='font-bold text-lg'>Notas</p>
        <div className='w-full'>
          <SpeechRecognition />
        </div>
      </section>
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

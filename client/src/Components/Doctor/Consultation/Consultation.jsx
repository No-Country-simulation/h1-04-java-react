import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import DoctorContext from "../../../context/DoctorContext";
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png";
import tratamiento from "../../../Assets/Imgs/tratamiento.png";
import SpeechRecognition from "./SpeechRecognition";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import "./consultation.css";

const Consultation = () => {
  // const [isFocused, setIsFocused] = useState(false);
  const [currentNotes, setCurrentNotes] = useState("");

  const navigate = useNavigate();
  const { setNotes } = useContext(DoctorContext);

  const handleSubmitNotes = () => {
    setNotes(currentNotes);
    setCurrentNotes("");
    navigate("/query-completion");
  };

  return (
    <div className='consultation'>
      {/* <button className='backPage' onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt='back' />
        <p>Consulta</p>
      </button> */}
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
        <button className='treatmentsStylesDoctor'>
          <img src={tratamiento} alt='Tratamiento' />
          <p>Tratamiento</p>
        </button>
        <button className='treatmentsStylesDoctor'>
          <img src={tratamiento} alt='Historia Clinica' />
          <p>Historia Clinica</p>
        </button>
        <button className='treatmentsStylesDoctor'>
          <img src={tratamiento} alt='Estudios' />
          <p>Estudios</p>
        </button>
        <button className='treatmentsStylesDoctor'>
          <img src={tratamiento} alt='Medicación' />
          <p>Medicación</p>
        </button>
      </section>

      <section className='writeText'>
        <p>Notas</p>
        {/* <textarea
          name='text'
          id='text'
          className={isFocused ? "focused" : ""}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setCurrentNotes(e.target.value)}
          value={currentNotes}
        /> */}
        {/* <div>
          <img src={speak} alt='Hablar' />
        </div> */}
      </section>
      <SpeechRecognition />
      <button id='start-consultation' onClick={handleSubmitNotes}>
        Finalizar consulta
      </button>
    </div>
  );
};

export default Consultation;

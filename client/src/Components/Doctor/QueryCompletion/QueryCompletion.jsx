import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoctorContext from "../../../context/DoctorContext";
import profileDoctor from "../../../Assets/Imgs/profileDoctor.png";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import SuccesModal from "../../Modals/SucessModal";
import agendarTurno from "../../../Assets/Imgs/agendarTurno.svg";
import agregarReceta from "../../../Assets/Imgs/agregarReceta.svg";
import "./queryCompletion.css";

const QueryCompletion = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();

  const { notes } = useContext(DoctorContext);

  const handlePopUp = () => {
    setShowPopUp(true);
  };

  const handleCloseModal = () => {
    setShowPopUp(false);
    navigate("/doctorPatient");
  };

  return (
    <div className='m-5 query-completion'>
      <DoctorHeader text={"Recomendaciones y recetas"} />

      <section className='header'>
        <div>
          <img src={profileDoctor} alt='Laura Gomez' />
        </div>
        <div className='detailsHeader'>
          <h2>Laura Gomez</h2>
          <p>Consulta por control</p>
        </div>
      </section>

      <section className='mt-10'>
        <p>Resumen de la consulta</p>
        <div className='queryNotes bg-white'>
          <h2>Notas...</h2>
          <p>{notes}</p>
        </div>
      </section>

      <section className='footer-query-buttons'>
        <Link to='/doctorCalendar' className='B'>
          <img src={agendarTurno} alt='AgendarTurno' />
          Agendar turno
        </Link>
        <Link to='/doctorRecipe' className='A'>
          <img src={agregarReceta} alt='agregarReceta' />
          Agregar receta
        </Link>
      </section>
      {/* 
      <section className='writeTextQuery'>
        <p>Indicaciones</p>
        <textarea
          name='text'
          id='text'
          className={isFocused ? "focused" : ""}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></textarea>
      </section> */}

      <button className='start-consultation' onClick={handlePopUp}>
        Enviar
      </button>

      <SuccesModal
        title={"Listo!"}
        text={"Se agendo la proxima cita y se envio la receta exitosamente"}
        show={showPopUp}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default QueryCompletion;

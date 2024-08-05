import { Link } from "react-router-dom";
import foldier from "../../../Assets/Imgs/foldier.svg";
import consultation1 from "../../../Assets/Imgs/imgConsultation1.svg";
import consultation2 from "../../../Assets/Imgs/imgConsultation2.svg";
import consultation3 from "../../../Assets/Imgs/imgConsultation3.svg";
import consultation4 from "../../../Assets/Imgs/imgConsultation4.svg";
import anotaciones from "../../../Assets/Imgs/anotaciones.svg";
import turnoPrevios from "../../../Assets/Imgs/turnoPrevios.svg";
import proximoTurno from "../../../Assets/Imgs/proximoTurno.svg";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import SuccesModal from "../../Modals/SucessModal";
import "./patientRecords.css";
import { useState } from "react";

const PatientRecords = () => {
  const [showVerificando, setShowVerificando] = useState(false);
  return (
    <section className='m-5'>
      <DoctorHeader text={"Ficha paciente"} />
      <section className='space-x-4  p-3 rounded mb-2'>
        <div
          style={{ backgroundColor: "#009FF5", margin: "auto" }}
          className='text-white rounded-full w-20 h-20 flex items-center justify-center'
        >
          Undo
        </div>

        <div className='flex justify-center items-center'>
          <div>
            <p>Event has been scheduled</p>
            <div className='flex text-gray-500'>
              <p className=' text-sm'>Sunday, December</p>
            </div>
          </div>
        </div>
      </section>

      <section className='containerTreatments'>
        <Link to={"/medicalHistory"} className='treatmentsStylesRecords'>
          <img src={consultation2} alt='Tratamiento' />
          <p>Historial Medico</p>
        </Link>
        <Link to={"/treatmentFollowUp"} className='treatmentsStylesRecords'>
          <img src={consultation1} alt='Tratamiento' />
          <p>Tratamiento</p>
        </Link>
        <Link to={"/patientStudy"} className='treatmentsStylesRecords'>
          <img src={consultation3} alt='Tratamiento' />
          <p>Estudios</p>
        </Link>
        <Link to={"/patientMedication"} className='treatmentsStylesRecords'>
          <img src={consultation4} alt='Tratamiento' />
          <p>Medicación</p>
        </Link>
        <Link
          to={"#"}
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesRecords'
        >
          <img src={foldier} alt='Tratamiento' />
          <p>Contacto</p>
        </Link>
        <Link
          to={"#"}
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesRecords'
        >
          <img src={anotaciones} alt='Tratamiento' />
          <p>Anotaciones</p>
        </Link>
        <Link
          to={"#"}
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesRecords'
        >
          <img src={turnoPrevios} alt='Tratamiento' />
          <p>Turnos previos</p>
        </Link>
        <Link
          to={"#"}
          onClick={() => setShowVerificando(true)}
          className='treatmentsStylesRecords'
        >
          <img src={proximoTurno} alt='Tratamiento' />
          <p>Proximos turnos</p>
        </Link>
      </section>
      <SuccesModal
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
        none
        title='No disponible'
        text='Estamos trabajando en esta característica'
      />
    </section>
  );
};

export default PatientRecords;

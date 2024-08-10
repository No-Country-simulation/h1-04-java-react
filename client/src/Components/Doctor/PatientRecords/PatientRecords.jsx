import { Link, useLocation } from "react-router-dom";
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
import MainRecords from "./MainRecords";
import Record from "./Record";

const PatientRecords = () => {
  const [showVerificando, setShowVerificando] = useState(false);
  const location = useLocation();
  const { patient } = location.state || {};

  return (
    <section className=''>
      <DoctorHeader text={"Ficha paciente"} />
      <section className='  p-3 rounded mb-2 flex flex-col items-center justify-center'>
        <div className='bg-blue-100 text-white rounded-full w-16 h-16  '>
          <img src={patient.image} alt='Patient' />
        </div>

        <div className='text-center'>
          <p className='font-bold'>{patient.name}</p>
          <p className='text-[#5A5555]'>Paciente en tratamiento</p>
        </div>
      </section>
      <MainRecords patient={patient} />

      {/* <Link to={"/medicalHistory"} className='treatmentsStylesRecords'>
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
          </Link> */}

      <section className='flex flex-wrap gap-5 mt-5'>
        <Record
          imgSrc={foldier}
          text='Contacto'
          onClick={() => setShowVerificando(true)}
        />
        <Record
          imgSrc={anotaciones}
          text='Anotaciones'
          onClick={() => setShowVerificando(true)}
        />
        <Record
          imgSrc={foldier}
          text='Transplante cruzado'
          link={`/transplantProfile/${patient.id}`}
        />

        <Record
          imgSrc={proximoTurno}
          text='Proximos turnos'
          onClick={() => setShowVerificando(true)}
        />
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

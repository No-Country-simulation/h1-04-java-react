import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import arrowOrange from "../../../Assets/Imgs/arrowOrange.svg";
import privateImg from "../../../Assets/Imgs/private.png";
import profile from "../../../Assets/Imgs/pepitaExample.png";
import PersonalData from "../../PersonalData/PersonalData";
import Notifications from "../../Notifications/Notifications";

import DoctorContext from "../../../context/DoctorContext";
import PatientHeader from "../PatientHeader/PatientHeader";
import "./profileConfiguration.css"

const DoctorConfiguration = () => {
  const [personalData, setPersonalData] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(Array(2).fill(false));

  const toggleDropdown = (index) => {
    setIsOpen(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
    });
};

  const navigate = useNavigate();
  const { logout, fetchPatientById, authData } = useContext(DoctorContext);

  useEffect(() => {
    const loadPatientData = async () => {
      if (authData) {
        try {
          const data = await fetchPatientById(authData.id);
          
          setPatientData(data.patient.user);
          setError(null);
        } catch (error) {
          setError(error.message);
          console.log(error);
          setPatientData(null);
        }
      }
    };
    
    loadPatientData();
  }, [authData, fetchPatientById]);

  function log() {
    logout();
    navigate("/");
  }

  const handlechange = (type) => {
    if (patientData) {
      if (type === "personalData") {
        setPersonalData(!personalData);
      } else {
        setNotifications(!notifications);
      }
    }
  };

  return (
    <section className='container mt-5'>
      <PatientHeader text="Configuración" />

      <article className='userPictureName'>
        <img
          src={profile}
          alt='Paciente img'
          className='h-28 w-28 m-auto mt-5'
        />
        <p className='font-bold text-center mb-5 mt-1' style={{color:"#5A5555", fontSize:"23px"}}>
          {patientData
            ? patientData.firstName + " " + patientData.lastName
            : "Cargando..."}
        </p>
      </article>

      <article className='optionsContainer'>
        <div>
          <button className='flex justify-between optionBlue'
            onClick={() => { handlechange("personalData"); toggleDropdown(1)}}
          >
            <p>Datos Personales</p>
            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageBlue ${isOpen[1] ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
          </button>
          { personalData && (
            <div className='containerPersonalData'>
              <PersonalData user={patientData} />
            </div>
          ) }
        </div>

        <div>
          <button className='flex justify-between optionBlue'
            onClick={() => { handlechange("notifications"); toggleDropdown(2) }}
          >
            <p>Notificaciones</p>
            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageBlue ${isOpen[2] ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
          </button>
          { notifications && (
            <div className='mb-5'>
              <Notifications />
            </div>
          ) }
        </div>

        <button className='flex justify-between optionBlue'>
          <p>Seguridad Privacidad</p>
          <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
        </button>

        <button onClick={() => log()} className='w-full self-end rounded py-2 mt-10 optionBlue'>
          Cerrar sesion
        </button> 
      </article>
    </section>
  );
};

export default DoctorConfiguration;

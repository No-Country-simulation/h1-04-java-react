import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import arrowRight from "../../../Assets/Imgs/arrowRight.png";
import arrowLeft from "../../../Assets/Imgs/otraArrowLeft.png";
import arrowOrange from "../../../Assets/Imgs/arrowOrange.svg";
import privateImg from "../../../Assets/Imgs/private.png";
import profile from "../../../Assets/Imgs/pepitaExample.png";
import settings from "../../../Assets/Imgs/settings.png";
import PersonalData from "../../PersonalData/PersonalData";
import Notifications from "../../Notifications/Notifications";

import DoctorContext from "../../../context/DoctorContext";
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
    <section className='container'>
      <div className='flex items-center m-4 mainProfileConfiguration'>
        <img src={settings} alt='configuration' className='h-6 w-6' />
        <p className='ml-3 font-bold text-lg'>Configuración</p>
      </div>

      <article className='userPictureName'>
        <img
          src={profile}
          alt='Paciente img'
          className='h-28 w-28 m-auto mt-5'
        />
        <p className='font-bold text-lg text-center mb-10'>
          {patientData
            ? patientData.firstName + " " + patientData.lastName
            : "Cargando..."}
        </p>
      </article>

      <article className='optionsContainer'>
        <div>
          <button
            className='option font-bold flex justify-between p-2'
            onClick={() => { handlechange("personalData"); toggleDropdown(1)}}
          >
            <p>Datos Personales</p>
            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 ${isOpen[1] ? 'more-more-arrow-rotate' : 'more-arrow-rotate'}`} />
          </button>
          {personalData && (
            <div className='mb-5 containerPersonalData'>
              <PersonalData user={patientData} />
            </div>
          )}
        </div>

        <div>
          <button
            className='option font-bold flex justify-between p-2'
            onClick={() => { handlechange("notifications"); toggleDropdown(2) }}
          >
            <p>Notificaciones</p>
            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 ${isOpen[2] ? 'more-more-arrow-rotate' : 'more-arrow-rotate'}`} />
          </button>
          {notifications && (
            <div className='mb-5'>
              <Notifications />
            </div>
          )}
        </div>

        <button className='option font-bold flex justify-between p-2'>
          <p>Seguridad</p>
          <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
        </button>

        <button className='option font-bold flex justify-between p-2'>
          <p>Privacidad</p>
          <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
        </button>

        <button
          onClick={() => log()}
          className='w-full self-end bg-red-500 rounded py-2 font-semibold text-white'
        >
          Cerrar sesion
        </button>
      </article>

      <div className='backContainer'>
        <button className='back' onClick={() => navigate(-1)}>
          <img src={arrowLeft} alt='back' />
        </button>
      </div>
    </section>
  );
};

export default DoctorConfiguration;

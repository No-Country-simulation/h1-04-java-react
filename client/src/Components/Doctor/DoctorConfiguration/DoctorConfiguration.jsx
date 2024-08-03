import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import arrowRight from "../../../Assets/Imgs/arrowRight.png";
import privateImg from "../../../Assets/Imgs/private.png";
import profile from "../../../Assets/Imgs/pepitaExample.png";
import PersonalData from "../../PersonalData/PersonalData";
import Notifications from "../../Notifications/Notifications";

import DoctorContext from "../../../context/DoctorContext";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import "./doctorConfiguration.css"

const DoctorConfiguration = () => {
  const [personalData, setPersonalData] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const navigate = useNavigate();
  const { logout, fetchDoctorById, authData } = useContext(DoctorContext);
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatientData = async () => {
      if (authData) {
        try {
          const data = await fetchDoctorById(authData.id);

          setPatientData(data.doctor.user);
          console.log(patientData);

          setError(null);
        } catch (error) {
          setError(error.message);
          console.log(error);
          setPatientData(null);
        }
      }
    };

    loadPatientData();
  }, []);

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
      <div className="m-5">
        <DoctorHeader text={"Configuración de cuenta"} />
        <article className='userPictureNameDoctor'>
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
          <div className="styleDoctor">
            <button
              className='option font-bold flex justify-between p-2 styleDoctorButton'
              onClick={() => handlechange("personalData")}
            >
              <p>Datos Personales</p>
              <img src={arrowRight} alt='arrow' className='w-6 h-6 ml-4' />
            </button>
            {personalData && (
              <div className='mb-5 containerPersonalData'>
                <PersonalData user={patientData} />
              </div>
            )}
          </div>

          <div className="styleDoctor">
            <button
              className='option font-bold flex justify-between p-2 styleDoctorButton'
              onClick={() => handlechange("notifications")}
            >
              <p>Notificaciones</p>
              <img src={arrowRight} alt='arrow' className='w-6 h-6 ml-4' />
            </button>
            {notifications && (
              <div className='mb-5'>
                <Notifications />
              </div>
            )}
          </div>

          <button className='option font-bold flex justify-between p-2 styleDoctorButton'>
            <p>Seguridad</p>
            <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
          </button>

          <button className='option font-bold flex justify-between p-2 styleDoctorButton'>
            <p>Privacidad</p>
            <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
          </button>

          <button
            onClick={() => log()}
            className='w-full self-end bg-sky-600 rounded py-2 font-semibold text-white'
          >
            Log out
          </button>
        </article>
      </div>
    </section>
  );
};

export default DoctorConfiguration;

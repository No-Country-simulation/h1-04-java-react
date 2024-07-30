import React, { useContext, useEffect, useState } from "react";
import Calendar from "../../../../helpers/atoms/Calendar";
import Turns from "../Turns";
import { Link } from "react-router-dom";
import SuccesModal from "../../../Modals/SucessModal";
import { getAppointmentById } from "../../../../services/appointmentService"; // Asegúrate de usar la ruta correcta
import DoctorContext from "../../../../context/DoctorContext";

export default function TurnCalendar() {
  const [showVerificando, setShowVerificando] = useState(false);

  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);

  const { authData } = useContext(DoctorContext);

  useEffect(() => {
    if (authData) {
      setAuthLoading(false);
    }
  }, [authData]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!authLoading) {
        try {
          const data = await getAppointmentById(authData.token, authData.id);
          setAppointments(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAppointments();
  }, [authLoading, authData]);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  if (loading || authLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='mt-0'>
      <Calendar />
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <Turns
            key={appointment.appointmentId}
            doctor={appointment.fullnameDoctor}
            time={appointment.appointmentHour}
            href={"/"}
            type={appointment.typeOfAppointment}
          />
        ))
      ) : (
        <p>No appointments found</p>
      )}
      <button className='rounded-full border-black border w-10 h-10 text-3xl pb-9 bottom-3 sticky bg-white'>
        <Link to={"/new-turn"}>+</Link>
      </button>
      <div className='App'>
        <button onClick={() => setShowVerificando(true)} className='btn'>
          Verificando
        </button>

        <SuccesModal
          show={showVerificando}
          onClose={() => setShowVerificando(false)}
        />
      </div>
    </div>
  );
}

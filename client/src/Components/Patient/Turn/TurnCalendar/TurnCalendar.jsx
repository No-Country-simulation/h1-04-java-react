import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAppointmentById } from "../../../../services/appointmentService";
import Calendar from "../../../../helpers/atoms/Calendar";
import Turns from "../Turns";
import DoctorContext from "../../../../context/DoctorContext";

export default function TurnCalendar() {
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
    <div className='mt-0 flex flex-col'>
      <Calendar />
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <Turns
            key={appointment.appointmentId}
            doctor={appointment.fullnameDoctor}
            time={appointment.appointmentHour}
            href={"/new-turn"}
            type={appointment.typeOfAppointment}
          />
        ))
      ) : (
        <p>No appointments found</p>
      )}
      <button className='rounded-full self-end mr-5 mt-5 mb-5 flex justify-center items-center pb-1 border-primary text-primary border-2 w-10 h-10 text-3xl bg-white'>
        <Link to={"/new-turn"}>+</Link>
      </button>
      {/* <div className='App'>
        <button onClick={() => setShowVerificando(true)} className='btn'>
          Verificando
        </button>

        <SuccesModal
          show={showVerificando}
          onClose={() => setShowVerificando(false)}
        />
      </div> */}
    </div>
  );
}

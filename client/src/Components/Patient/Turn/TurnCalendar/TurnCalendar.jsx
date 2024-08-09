import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAppointmentById } from "../../../../services/appointmentService";
import Calendar from "../../../../helpers/atoms/Calendar";
import Turns from "../Turns";
import DoctorContext from "../../../../context/DoctorContext";
import { translateDay } from "../../../../utils/hourMapping";
import Spinner from "../../../../helpers/atoms/Spinner";
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

  if (loading || authLoading) return <Spinner/>;
  if (error) return <p>Error: {error}</p>;

  // Group appointments by day
  const groupedAppointments = appointments.reduce((acc, appointment) => {
    const { appointmentDay } = appointment;
    if (!acc[appointmentDay]) {
      acc[appointmentDay] = [];
    }
    acc[appointmentDay].push(appointment);
    return acc;
  }, {});

  return (
    <div className='mt-0 flex flex-col'>
      <Calendar />
      <button className='rounded-full mb-3 w-full flex justify-center items-center pb-1 bg-primary border-2 text-xl font-bold text-white'>
        <Link to={"/new-turn"}>Nuevo turno</Link>
      </button>
      {Object.keys(groupedAppointments).length > 0 ? (
        Object.keys(groupedAppointments).map((day) => (
          <div key={day} className='mb-6'>
            <h3 className='text-lg font-extrabold ml-4 text-orangeColor  mb-2'>
              {translateDay(day)}...
            </h3>
            {groupedAppointments[day].map((appointment) => (
              <Turns
                key={appointment.appointmentId}
                doctor={appointment.fullnameDoctor}
                time={appointment.appointmentHour}
                href={"/view-turn"}
                type={appointment.typeOfAppointment}
              />
            ))}
          </div>
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
}

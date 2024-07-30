import React, { useContext, useEffect, useState } from "react";
import CardPatient from "../../../helpers/atoms/CardPatient";
import DoctorContext from "../../../context/DoctorContext";
import { getAppointmentByDoctor } from "../../../services/appointmentService";

const CalendarPage = () => {
  const getFormattedDate = (date) => {
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    return `${day} ${dayOfMonth}`;
  };

  const today = new Date();
  const days = Array.from({ length: 6 }, (_, i) => {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() - 1 + i);
    return newDate;
  });

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
          const data = await getAppointmentByDoctor(
            authData.token,
            authData.id
          );
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

  if (loading || authLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='p-4 flex flex-col'>
      <button className='bg-white border-blue-400 border-2 self-end mb-3  px-3 py-1 rounded'>
        Calendario
      </button>

      <div className='flex justify-between items-center'>
        <div className='flex space-x-2'>
          {days.map((day, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded ${
                index === 1
                  ? "bg-blue-400 text-white"
                  : "bg-white border-blue-400 border-2"
              }`}
            >
              {getFormattedDate(day)}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <CardPatient
              key={appointment.appointmentId}
              time={appointment.appointmentHour}
              name={appointment.fullnamePatient}
              description={appointment.typeOfAppointment}
              date={appointment.appointmentDay}
            />
          ))
        ) : (
          <p>No appointments found</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;

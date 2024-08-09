import { useContext, useEffect, useState } from "react";
import DoctorContext from "../../../context/DoctorContext";
import { getAppointmentByDoctor } from "../../../services/appointmentService";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import CardPatientList from "./CardPatientList";
import Spinner from "../../../helpers/atoms/Spinner";

const PatientLists = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    // Ensure unique patients before filtering
    const uniquePatients = {};
    const uniqueAppointments = [];

    appointments.forEach((appointment) => {
      if (!uniquePatients[appointment.fullnamePatient]) {
        uniquePatients[appointment.fullnamePatient] = true;
        uniqueAppointments.push(appointment);
      }
    });

    setFilteredAppointments(uniqueAppointments);
  }, [appointments]);

  useEffect(() => {
    const filterAppointments = () => {
      const uniquePatients = {};
      const uniqueAppointments = [];

      appointments.forEach((appointment) => {
        if (!uniquePatients[appointment.fullnamePatient]) {
          uniquePatients[appointment.fullnamePatient] = true;
          if (
            appointment.fullnamePatient
              .toLowerCase()
              .startsWith(search.toLowerCase())
          ) {
            uniqueAppointments.push(appointment);
          }
        }
      });

      setFilteredAppointments(uniqueAppointments);
    };

    filterAppointments();
  }, [search, appointments]);

  if (loading || authLoading) return <Spinner/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex flex-col'>
      <DoctorHeader text={"Pacientes"} />
      <input
        type='text'
        placeholder='Buscar paciente...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=' p-2 border rounded shadow-lg py-3'
      />
      <div className='mt-4'>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <CardPatientList
              key={appointment.appointmentId}
              id={appointment.patientId}
              time={`A`}
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

export default PatientLists;

import React, { useContext, useState, useEffect } from "react";
import check from "../../../../Assets/Imgs/check.png";
import DoctorContext from "../../../../context/DoctorContext";
import { createAppointment } from "../../../../services/appointmentService"; // Asegúrate de usar la ruta correcta

const daysOfWeek = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const hourMappings = {
  SEVEN_AM: "7:00 AM",
  EIGHT_AM: "8:00 AM",
  NINE_AM: "9:00 AM",
  TEN_AM: "10:00 AM",
  ELEVEN_AM: "11:00 AM",
  TWELVE_PM: "12:00 PM",
  ONE_PM: "1:00 PM",
  TWO_PM: "2:00 PM",
  THREE_PM: "3:00 PM",
  FOUR_PM: "4:00 PM",
  FIVE_PM: "5:00 PM",
  SIX_PM: "6:00 PM",
  SEVEN_PM: "7:00 PM",
  EIGHT_PM: "8:00 PM",
  NINE_PM: "9:00 PM",
  TEN_PM: "10:00 PM",
  ELEVEN_PM: "11:00 PM",
  TWELVE_AM: "12:00 AM",
};

const NewTurn = () => {
  const [selectedEspecialidad, setSelectedEspecialidad] = useState("");
  const [selectedProfesional, setSelectedProfesional] = useState("");
  const [selectedTipoCita, setSelectedTipoCita] = useState("");
  const [isEspecialidadOpen, setIsEspecialidadOpen] = useState(true);
  const [isProfesionalOpen, setIsProfesionalOpen] = useState(false);
  const [isTipoCitaOpen, setIsTipoCitaOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const tiposCita = [
    "OFFICE_VISIT", // Consulta en el consultorio
    "FOLLOW_UP", // Seguimiento
    "PSYCHOTHERAPY", // Psicoterapia
    "TREATMENTS", // Tratamientos
    "LAB", // Laboratorio
    "VACCINATION", // Vacunación
    "IMAGING", // Estudios por imágenes (radiografía, ecografía, etc.)
    "SURGERY", // Cirugía
    "TELEMEDICINE", // Consulta a distancia (telemedicina)
    "PREVENTIVE_CARE", // Cuidado preventivo
    "PHYSICAL_THERAPY", // Terapia física
    "SPECIALIST_CONSULTATION", // Consulta con especialista
    "DENTAL_CARE", // Cuidado dental
    "NUTRITIONAL_COUNSELING", // Asesoramiento nutricional
    "PRENATAL_CARE", // Cuidado prenatal
    "POSTNATAL_CARE", // Cuidado postnatal
  ];

  const {
    doctors,
    loading,
    error: doctorError,
    authData,
  } = useContext(DoctorContext);
  const uniqueSpecialties =
    doctors && doctors.doctors
      ? Array.from(
          new Set(doctors.doctors.flatMap((doctor) => doctor.specialties))
        )
      : [];

  const professionals = {};
  if (doctors && doctors.doctors) {
    doctors.doctors.forEach((doctor) => {
      const fullName = `${doctor.user.firstName} ${doctor.user.lastName}`;
      doctor.specialties.forEach((specialty) => {
        if (!professionals[specialty]) {
          professionals[specialty] = [];
        }
        professionals[specialty].push(fullName);
      });
    });
  }

  const updateAvailableHours = (selectedDoctor, day) => {
    if (selectedDoctor && day) {
      const allHours = selectedDoctor.schedule || [];
      const occupiedHours = selectedDoctor.appointments
        .filter((appt) => appt.isActive && appt.appointmentDay === day)
        .map((appt) => appt.appointmentHour);

      // Filtra las horas ocupadas
      const available = allHours.filter(
        (hour) => !occupiedHours.includes(hour)
      );
      setAvailableHours(available);
    }
  };

  useEffect(() => {
    if (doctor && selectedDay) {
      updateAvailableHours(doctor, selectedDay);
    }
  }, [doctor, selectedDay]);

  const handleProfesionalSelect = (prof) => {
    const selectedDoctor = doctors.doctors.find(
      (doc) => `${doc.user.firstName} ${doc.user.lastName}` === prof
    );
    setSelectedProfesional(prof);
    setDoctor(selectedDoctor);
    setIsProfesionalOpen(false);
    setIsTipoCitaOpen(true);
    setAvailableHours([]); // Reset available hours when selecting a new professional
  };

  const formatHour = (hour) => hourMappings[hour] || hour;

  const handleCreateAppointment = async () => {
    if (!selectedDay || !selectedHour || !selectedTipoCita || !doctor) {
      setError("Please select all fields.");
      return;
    }

    const appointmentData = {
      doctorId: doctor.doctorId,
      patientId: authData.id,
      appointmentDay: selectedDay,
      appointmentHour: selectedHour,
      typeOfAppointment: selectedTipoCita,
      appointmentDescription: "Consulta programada",
    };

    console.log("Creating appointment with data:", appointmentData); // Log the appointment data

    try {
      await createAppointment(authData.token, appointmentData);
      setSuccess("Appointment created successfully!");
    } catch (err) {
      setError(`Failed to create appointment: ${err.message}`);
    }
  };

  if (loading) return <div className='text-center mt-10'>Loading...</div>;
  if (doctorError)
    return <div className='text-center mt-10'>{doctorError}</div>;

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Turnos</h2>

      {/* Selección de Especialidad */}
      <label className='block mb-4'>
        <input
          className='peer/especialidad hidden'
          type='checkbox'
          checked={isEspecialidadOpen}
          onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
          onChange={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
        />
        <span className='block rounded-lg bg-[#D9D9D9] px-4 shadow-lg h-8 transition-all duration-300 overflow-hidden peer-checked/especialidad:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedEspecialidad ? (
              <div className='flex justify-between items-center w-full'>
                <p>{selectedEspecialidad}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Especialidad"
            )}
          </h3>
          <div className='mt-2 space-y-2'>
            {uniqueSpecialties.map((esp, index) => (
              <div
                key={index}
                className='flex items-center'
                onClick={() => {
                  setSelectedEspecialidad(esp);
                  setSelectedProfesional("");
                  setSelectedTipoCita("");
                  setIsEspecialidadOpen(false);
                  setIsProfesionalOpen(true);
                }}
              >
                <input
                  type='radio'
                  id={`especialidad-${index}`}
                  name='especialidad'
                  value={esp}
                  checked={selectedEspecialidad === esp}
                  className='mr-2'
                  onChange={() => setSelectedEspecialidad(esp)}
                />
                <label htmlFor={`especialidad-${index}`}>{esp}</label>
              </div>
            ))}
          </div>
        </span>
      </label>

      {/* Selección de Profesional */}
      <label className='block mb-4'>
        <input
          className='peer/profesional hidden'
          type='checkbox'
          checked={isProfesionalOpen}
          onClick={() => setIsProfesionalOpen(!isProfesionalOpen)}
          onChange={() => setIsProfesionalOpen(!isProfesionalOpen)}
          disabled={!selectedEspecialidad}
        />
        <span className='block rounded-lg bg-[#D9D9D9] px-4 shadow-lg transition-all duration-300 h-8 overflow-hidden peer-checked/profesional:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedProfesional ? (
              <div className='flex justify-between items-center w-full'>
                <p>{selectedProfesional}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Profesional"
            )}
          </h3>
          <div className='mt-2 space-y-2'>
            {selectedEspecialidad &&
              professionals[selectedEspecialidad]?.map((prof, index) => (
                <div
                  key={index}
                  className='flex items-center'
                  onClick={() => handleProfesionalSelect(prof)}
                >
                  <input
                    type='radio'
                    id={`profesional-${index}`}
                    name='profesional'
                    value={prof}
                    checked={selectedProfesional === prof}
                    className='mr-2'
                    onChange={() => setSelectedProfesional(prof)}
                  />
                  <label htmlFor={`profesional-${index}`}>{prof}</label>
                </div>
              ))}
          </div>
        </span>
      </label>

      {/* Selección de Tipo de Cita */}
      <label className='block mb-4'>
        <input
          className='peer/tipoCita hidden'
          type='checkbox'
          checked={isTipoCitaOpen}
          onClick={() => setIsTipoCitaOpen(!isTipoCitaOpen)}
          onChange={() => setIsTipoCitaOpen(!isTipoCitaOpen)}
          disabled={!selectedProfesional}
        />
        <span className='block rounded-lg bg-[#D9D9D9] px-4 shadow-lg h-8 transition-all duration-700 overflow-hidden peer-checked/tipoCita:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedTipoCita ? (
              <div className='flex justify-between items-center w-full'>
                <p>{selectedTipoCita}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Tipo de Cita"
            )}
          </h3>
          <div className='mt-2 space-y-2'>
            {selectedProfesional &&
              tiposCita.map((tipo, index) => (
                <div
                  key={index}
                  className='flex items-center'
                  onClick={() => {
                    setSelectedTipoCita(tipo);
                    setIsTipoCitaOpen(false);
                  }}
                >
                  <input
                    type='radio'
                    id={`tipoCita-${index}`}
                    name='tipoCita'
                    value={tipo}
                    checked={selectedTipoCita === tipo}
                    className='mr-2'
                    onChange={() => setSelectedTipoCita(tipo)}
                  />
                  <label htmlFor={`tipoCita-${index}`}>{tipo}</label>
                </div>
              ))}
          </div>
        </span>
      </label>

      {/* Selección de Día */}
      {selectedTipoCita && (
        <div className='block mb-4'>
          <h3 className='font-bold mb-2'>Seleccionar Día</h3>
          <div className='flex space-x-2'>
            {daysOfWeek.map((day, index) =>
              doctor.workdays.includes(day) ? (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg ${
                    selectedDay === day
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedDay(day);
                    updateAvailableHours(doctor, day);
                  }}
                >
                  {day}
                </button>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* Mostrar Horas Disponibles */}
      {selectedDay && availableHours.length > 0 && (
        <div className='block mb-4'>
          <h3 className='font-bold mb-2'>Horas Disponibles</h3>
          <div className='space-y-2'>
            {availableHours.map((hour, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-lg border border-gray-300 ${
                  selectedHour === hour
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedHour(hour)}
              >
                {formatHour(hour)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Botón para Crear Cita */}
      {selectedHour && (
        <button
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg'
          onClick={handleCreateAppointment}
        >
          Crear Cita
        </button>
      )}

      {/* Mensajes de Error o Éxito */}
      {error && <div className='mt-4 text-red-500'>{error}</div>}
      {success && <div className='mt-4 text-green-500'>{success}</div>}
    </div>
  );
};

export default NewTurn;

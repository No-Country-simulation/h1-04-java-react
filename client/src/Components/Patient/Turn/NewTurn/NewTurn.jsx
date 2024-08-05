import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../../../../services/appointmentService"; // Asegúrate de usar la ruta correcta
import check from "../../../../Assets/Imgs/checkOrange.svg";
import DoctorContext from "../../../../context/DoctorContext";
import SuccesModal from "../../../../Components/Modals/SucessModal";
import turns from "../../../../Assets/Imgs/turns.png";
import checkImgSuccess from "../../../../Assets/Imgs/checkImgSuccess.svg";
import checkImgError from "../../../../Assets/Imgs/checkImgVerify.svg";
import checkImgVerify from "../../../../Assets/Imgs/checkImgError.svg";
import anotherArrowLeft from "../../../../Assets/Imgs/otraArrowLeft.png";
import {
  formatHour,
  translateDay,
  translateAppointmentType,
  translateSpecialty,
} from "../../../../utils/hourMapping";
const daysOfWeek = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

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
  const [showVerificando, setShowVerificando] = useState();
  const navigate = useNavigate();
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
  console.log(uniqueSpecialties);

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
      setShowVerificando(true);
    } catch (err) {
      setError(`Failed to create appointment: ${err.message}`);
    }
  };

  function closeModal() {
    setShowVerificando(false);
    navigate("/view-turn");
  }

  if (loading) return <div className='text-center mt-10'>Loading...</div>;
  if (doctorError)
    return <div className='text-center mt-10'>{doctorError}</div>;

  return (
    <section className='m-4'>
      <div className='flex items-center text-center mb-5 text-secondary'>
        <img src={turns} alt='turno img' className='w-8 h-8' />
        <h2 className='text-xl font-bold mb-4 mt-3 ml-2'>Turnos</h2>
      </div>

      {/* Selección de Especialidad */}
      <label className='block mb-4'>
        <input
          className='peer/especialidad hidden'
          type='checkbox'
          checked={isEspecialidadOpen}
          onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
          onChange={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
        />
        <span className='block rounded-lg bg-orangeTransparent border-orangeColor border-2 text-orangeColor font-semibold px-5  shadow-lg h-8 transition-all duration-300 overflow-hidden peer-checked/especialidad:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedEspecialidad ? (
              <div className='flex justify-between items-center w-full'>
                <p>{translateSpecialty(selectedEspecialidad)}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Especialidad"
            )}
          </h3>
          <div className='mt-2 mb-0 space-y-2'>
            {uniqueSpecialties.map((esp, index) => (
              <div
                key={index}
                className='flex items-center border-b-2 cursor-pointer'
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
                <label className='cursor-pointer'>
                  {translateSpecialty(esp)}
                </label>
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
        <span className='block rounded-lg bg-orangeTransparent border-orangeColor border-2 text-orangeColor font-semibold px-5 shadow-lg transition-all duration-300 h-8 overflow-hidden peer-checked/profesional:h-auto'>
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
                  className='flex items-center border-b-2 cursor-pointer'
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
                  <label className='cursor-pointer'>{prof}</label>
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
        <span className='block rounded-lg bg-orangeTransparent border-orangeColor border-2 text-orangeColor font-semibold px-4 shadow-lg h-8 transition-all duration-700 overflow-hidden peer-checked/tipoCita:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedTipoCita ? (
              <div className='flex justify-between items-center w-full'>
                <p>{translateAppointmentType(selectedTipoCita)}</p>
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
                  className='flex items-center border-b-2 cursor-pointer'
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
                  <label className='cursor-pointer'>
                    {translateAppointmentType(tipo)}
                  </label>
                </div>
              ))}
          </div>
        </span>
      </label>

      {/* Selección de Día */}
      {selectedTipoCita && (
        <div className='block mb-4'>
          <h3 className='font-bold mb-2 text-secondaryDark'>
            Días Disponibles
          </h3>
          <div className='flex space-x-2'>
            {daysOfWeek.map((day, index) =>
              doctor.workdays.includes(day) ? (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg ${
                    selectedDay === day
                      ? "bg-secondary text-white"
                      : "border-2 border-secondary"
                  }`}
                  onClick={() => {
                    setSelectedDay(day);
                    updateAvailableHours(doctor, day);
                  }}
                >
                  {translateDay(day)}
                </button>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* Mostrar Horas Disponibles */}
      {selectedDay && availableHours.length > 0 && (
        <div className='block mb-4 cursor-pointer'>
          <h3 className='font-bold mb-2 text-secondaryDark'>
            Horario Disponible
          </h3>
          <div className='flex flex-wrap gap-2 max-w-[500px]'>
            {availableHours.map((hour, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-lg border  ${
                  selectedHour === hour
                    ? "bg-secondary text-white"
                    : "border-2 border-secondary"
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
          className='mt-4 px-4 py-2 w-full bg-primary rounded-3xl font-semibold mb-5'
          onClick={handleCreateAppointment}
        >
          Confirmar
        </button>
      )}

      <div className='backContainer'>
        <button className='back' onClick={() => navigate(-1)}>
          <img src={anotherArrowLeft} alt='back' />
        </button>
      </div>

      {/* Mensaje Verificando */}
      {/* <SuccesModal
        checkImg={checkImgVerify}
        show={showVerificando}
        onClose={() => closeModal()}
        check
      /> */}

      {/* Mensaje Éxito */}
      {success && (
        <SuccesModal
          checkImg={checkImgSuccess}
          title={"¡FELICITACIONES! SE AGENDO TU TURNO"}
          text={"Te esperamos"}
          show={showVerificando}
          onClose={() => closeModal()}
          check
        />
      )}

      {/* Mensaje Error */}
      {/* {error && (
        <SuccesModal
          checkImg={checkImgError}
          title={"¡FELICITACIONES! SE AGENDO TU TURNO"}
          text={"Te esperamos"}
          show={showVerificando}
          onClose={() => closeModal()}
          check
        />
      )} */}
    </section>
  );
};

export default NewTurn;

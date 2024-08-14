import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAppointment,
  getAppointmentsByPatient,
} from "../../../../services/appointmentService";
import {
  formatHour,
  translateDay,
  translateAppointmentType,
  translateSpecialty,
} from "../../../../utils/hourMapping";
import check from "../../../../Assets/Imgs/checkOrange.svg";
import DoctorContext from "../../../../context/DoctorContext";
import SuccesModal from "../../../../Components/Modals/SucessModal";
import checkImgSuccess from "../../../../Assets/Imgs/checkImgSuccess.svg";
// import checkImgError from "../../../../Assets/Imgs/checkImgVerify.svg";
// import checkImgVerify from "../../../../Assets/Imgs/checkImgError.svg";
import Spinner from "../../../../helpers/atoms/Spinner";
import PatientHeader from "../../PatientHeader/PatientHeader";
import Calendar from "../../../../helpers/atoms/Calendar";
import CalendarTurn from "./CalendarTurn";

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
  const [isDateOpen, setIsDateOpen] = useState(true);
  const [isEspecialidadOpen, setIsEspecialidadOpen] = useState(false);
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

  const [selectedRange, setSelectedRange] = useState(null);

  const handleRangeChange = (start, end) => {
    setSelectedRange({ start, end });
  };

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

  const updateAvailableHours = async (selectedDoctor, day) => {
    if (selectedDoctor && day) {
      const allHours = selectedDoctor.schedule || [];
      const doctorAppointments = selectedDoctor.appointments
        .filter((appt) => appt.appointmentDay === day)
        .map((appt) => appt.appointmentHour);

      const patientAppointments = await getAppointmentsByPatient(
        authData.token,
        authData.id
      );
      const patientAppointmentsOnDay = patientAppointments
        .filter((appt) => appt.appointmentDay === day)
        .map((appt) => appt.appointmentHour);

      const occupiedHours = [
        ...new Set([...doctorAppointments, ...patientAppointmentsOnDay]),
      ];

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

  if (loading) return <Spinner />;
  if (doctorError)
    return <div className='text-center mt-10'>{doctorError}</div>;

  return (
    <div className='md:m-4  '>
      <PatientHeader text='Turnos' color='#5A5555' />
      <div className='bg-purpleTransparent py-4 md:px-4 px-0   rounded-lg shadow-lg text-purple'>
        <h1 className='font-medium ml-5'>Agenda un turno</h1>

        {/* Selección de Semana */}
        <label className='block'>
          <input
            className='peer/date hidden'
            type='text'
            onClick={() => setIsDateOpen(true)}
          />
          <span
            className={`block transition-all duration-300 overflow-hidden ${
              isDateOpen ? "h-auto" : "h-0"
            } optionPurple`}
          >
            <h3 className='flex h-8 cursor-pointer items-center'>
              {selectedRange
                ? `${selectedRange.start.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })} - ${selectedRange.end.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}`
                : "Seleccione un rango de fechas"}
            </h3>
            <div className='mt-2 mb-0'>
              <CalendarTurn
                bgColor='#8163B0CC'
                textColor='#fff'
                onRangeChange={handleRangeChange}
              />
            </div>
            <div className='flex mt-5 w-full justify-around gap-5'>
              <button className='bg-[#8163B033] font-semibold text-purple flex-1 rounded-[10px] py-2'>
                Borrar
              </button>
              <button
                onClick={() => {
                  setIsDateOpen(false);
                  setIsEspecialidadOpen(true);
                }}
                className='bg-purple font-semibold text-white flex-1 rounded-[10px] py-2'
              >
                Aplicar
              </button>
            </div>
          </span>
        </label>

        {/* Selección de Especialidad */}
        <label className='block'>
          <input
            className='peer/especialidad hidden'
            type='checkbox'
            checked={isEspecialidadOpen}
            onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
            onChange={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
          />
          <span className='block h-8 transition-all duration-300 overflow-hidden peer-checked/especialidad:h-auto optionPurple'>
            <h3 className='flex h-8 cursor-pointer items-center'>
              {selectedEspecialidad ? (
                <div className='flex justify-between items-center w-full'>
                  <p>{translateSpecialty(selectedEspecialidad)}</p>
                  <img className='h-4 imagePurple' src={check} alt='' />
                </div>
              ) : (
                "Especialidad"
              )}
            </h3>
            <div className='mt-2 mb-0 space-y-2'>
              {uniqueSpecialties.map((esp, index) => (
                <div
                  key={index}
                  className='flex w-full  justify-between items-center cursor-pointer'
                  onClick={() => {
                    setSelectedEspecialidad(esp);
                    setSelectedProfesional("");
                    setSelectedTipoCita("");
                    setIsProfesionalOpen(true);
                  }}
                >
                  <h1 className=' my-1'>{translateSpecialty(esp)}</h1>
                  <input
                    type='radio'
                    id={`especialidad-${index}`}
                    name='especialidad'
                    value={esp}
                    checked={selectedEspecialidad === esp}
                    className='custom-radio'
                    onChange={() => {
                      setSelectedEspecialidad(esp);
                      setIsProfesionalOpen(true);
                      setIsEspecialidadOpen(false);
                    }}
                  />
                </div>
              ))}
            </div>
          </span>
        </label>

        {/* Selección de Profesional */}
        <label className='block'>
          <input
            className='peer/profesional hidden'
            type='checkbox'
            checked={isProfesionalOpen}
            onClick={() => setIsProfesionalOpen(!isProfesionalOpen)}
            onChange={() => setIsProfesionalOpen(!isProfesionalOpen)}
            disabled={!selectedEspecialidad}
          />
          <span className='block rounded-lg transition-all duration-300 h-8 overflow-hidden peer-checked/profesional:h-auto optionPurple'>
            <h3 className='flex h-8 cursor-pointer items-center'>
              {selectedProfesional ? (
                <div className='flex justify-between items-center w-full'>
                  <p>{selectedProfesional}</p>
                  <img className='h-4 imagePurple' src={check} alt='' />
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
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => handleProfesionalSelect(prof)}
                  >
                    <h1 className='cursor-pointer'>{prof}</h1>
                    <input
                      type='radio'
                      id={`profesional-${index}`}
                      name='profesional'
                      value={prof}
                      checked={selectedProfesional === prof}
                      className='custom-radio'
                      onChange={() => {
                        setSelectedProfesional(prof);
                        setIsProfesionalOpen(false);
                        setIsTipoCitaOpen(true);
                      }}
                    />
                  </div>
                ))}
            </div>
          </span>
        </label>

        {/* Selección de Tipo de Cita */}
        <label className='block'>
          <input
            className='peer/tipoCita hidden'
            type='checkbox'
            checked={isTipoCitaOpen}
            onClick={() => setIsTipoCitaOpen(!isTipoCitaOpen)}
            onChange={() => setIsTipoCitaOpen(!isTipoCitaOpen)}
            disabled={!selectedProfesional}
          />
          <span className='block rounded-lg h-8 transition-all duration-700 overflow-hidden peer-checked/tipoCita:h-auto optionPurple'>
            <h3 className='flex h-8 cursor-pointer items-center'>
              {selectedTipoCita ? (
                <div className='flex justify-between items-center w-full'>
                  <p>{translateAppointmentType(selectedTipoCita)}</p>
                  <img className='h-4 imagePurple' src={check} alt='' />
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
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => {
                      setSelectedTipoCita(tipo);
                    }}
                  >
                    <h1 className='cursor-pointer'>
                      {translateAppointmentType(tipo)}
                    </h1>
                    <input
                      type='radio'
                      id={`tipoCita-${index}`}
                      name='tipoCita'
                      value={tipo}
                      checked={selectedTipoCita === tipo}
                      className='custom-radio'
                      onChange={() => {
                        setSelectedTipoCita(tipo);
                        setIsTipoCitaOpen(false);
                      }}
                    />
                  </div>
                ))}
            </div>
          </span>
        </label>
      </div>

      {/* Selección de Día */}
      {selectedTipoCita && (
        <div className='block mb-4 mt-10 md:ml-0 ml-5  '>
          <h3 className='mb-2 text-gray font-medium'>Días Disponibles</h3>

          <div className='flex space-x-2'>
            {daysOfWeek.map((day, index) =>
              doctor.workdays.includes(day) ? (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg ${
                    selectedDay === day
                      ? "bg-purpleClear text-white"
                      : "bg-purpleTransparent text-purpleClear"
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
        <div className='block mb-4 cursor-pointer mt-10  md:ml-0 ml-5  '>
          <h3 className='mb-2 text-gray font-medium'>Horario Disponible</h3>

          <div className='flex flex-wrap gap-2 max-w-[500px]'>
            {availableHours.map((hour, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-lg  ${
                  selectedHour === hour
                    ? "bg-purpleClear text-white"
                    : "bg-purpleTransparent text-purpleClear"
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
          className='mt-4 w-full  py-3 rounded-xl mb-5 bg-purpleClear text-white'
          onClick={handleCreateAppointment}
        >
          Confirmar
        </button>
      )}

      {/* Mensaje Verificando */}
      {/* <SuccesModal
        checkImg={checkImgVerify}
        show={showVerificando}
        onClose={() => closeModal()}
        check
      /> */}

      {/* Mensaje Éxito */}
      {showVerificando && (
        <>
          <div className='overlay'></div>
          <SuccesModal
            checkImg={checkImgSuccess}
            title={"¡FELICITACIONES! SE AGENDO TU TURNO"}
            text={"Te esperamos"}
            show={showVerificando}
            onClose={() => closeModal()}
            check
          />
        </>
      )}

      {/* Mensaje Error */}
      {error && (
        <SuccesModal
          title={error}
          text={""}
          show={showVerificando}
          onClose={() => closeModal()}
          check
        />
      )}
    </div>
  );
};

export default NewTurn;

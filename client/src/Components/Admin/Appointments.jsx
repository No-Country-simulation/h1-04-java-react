import React, { useState, useEffect } from 'react';
import avatar from '../../Assets/Imgs/avatar.png';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Datos hardcodeados con descripciones
    const hardcodedAppointments = [
      { id: 1, day: 'Lunes', hour: '09:00', doctorName: 'Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Consulta', appointmentDescription: 'Revisión general y chequeo de signos vitales.' },
      { id: 2, day: 'Lunes', hour: '11:00', doctorName: 'María López', patientName: 'Carlos Fernández', appointmentType: 'Seguimiento', appointmentDescription: 'Control de evolución postoperatoria.' },
      { id: 3, day: 'Lunes', hour: '07:00', doctorName: 'Pedro García', patientName: 'Laura Martínez', appointmentType: 'Laboratorio', appointmentDescription: 'Análisis de sangre y otros exámenes de laboratorio.' },
      { id: 4, day: 'Martes', hour: '10:00', doctorName: 'Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Consulta', appointmentDescription: 'Consulta de rutina y actualización de historial médico.' },
      { id: 5, day: 'Martes', hour: '13:00', doctorName: 'Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Psicoterapia', appointmentDescription: 'Sesión de terapia para manejo de estrés.' },
      { id: 6, day: 'Martes', hour: '16:00', doctorName: 'Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Laboratorio', appointmentDescription: 'Exámenes de laboratorio y pruebas adicionales.' },
      { id: 7, day: 'Miércoles', hour: '09:00', doctorName: 'María López', patientName: 'Carlos Fernández', appointmentType: 'Cirugía', appointmentDescription: 'Cirugía programada para extracción de apéndice.' },
      { id: 8, day: 'Miércoles', hour: '11:00', doctorName: 'Pedro García', patientName: 'Laura Martínez', appointmentType: 'Seguimiento', appointmentDescription: 'Revisión postoperatoria y control de puntos.' },
      { id: 9, day: 'Miércoles', hour: '14:00', doctorName: 'Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Consulta a distancia', appointmentDescription: 'Consulta virtual para actualización de medicación.' },
      { id: 10, day: 'Jueves', hour: '10:00', doctorName: 'Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Consulta', appointmentDescription: 'Consulta de seguimiento y ajuste de tratamiento.' },
      { id: 11, day: 'Jueves', hour: '13:00', doctorName: 'Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Cirugía', appointmentDescription: 'Cirugía menor para extracción de quiste.' },
      { id: 12, day: 'Jueves', hour: '07:00', doctorName: 'María López', patientName: 'Carlos Fernández', appointmentType: 'Laboratorio', appointmentDescription: 'Recolección de muestras para análisis completo.' },
      { id: 13, day: 'Viernes', hour: '09:00', doctorName: 'Pedro García', patientName: 'Laura Martínez', appointmentType: 'Consulta', appointmentDescription: 'Consulta para evaluación de síntomas recientes.' },
      { id: 14, day: 'Viernes', hour: '12:00', doctorName: 'Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Psicoterapia', appointmentDescription: 'Sesión de terapia para ansiedad y depresión.' },
      { id: 15, day: 'Viernes', hour: '16:00', doctorName: 'Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Cirugía', appointmentDescription: 'Intervención quirúrgica para reparación de hernia.' },
      { id: 16, day: 'Sábado', hour: '08:00', doctorName: 'Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Consulta', appointmentDescription: 'Revisión médica y control de rutina.' },
      { id: 17, day: 'Sábado', hour: '10:00', doctorName: 'María López', patientName: 'Carlos Fernández', appointmentType: 'Seguimiento', appointmentDescription: 'Evaluación de recuperación y recomendaciones.' },
      { id: 18, day: 'Sábado', hour: '14:00', doctorName: 'Pedro García', patientName: 'Laura Martínez', appointmentType: 'Laboratorio', appointmentDescription: 'Pruebas de laboratorio y análisis de resultados.' },
      { id: 19, day: 'Domingo', hour: '09:00', doctorName: 'Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Cirugía', appointmentDescription: 'Cirugía de emergencia para apendicitis.' },
      { id: 20, day: 'Domingo', hour: '11:00', doctorName: 'Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Psicoterapia', appointmentDescription: 'Terapia psicológica para manejo del estrés.' },
      { id: 21, day: 'Domingo', hour: '13:00', doctorName: 'Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Laboratorio', appointmentDescription: 'Análisis de laboratorio para control general.' }
    ];

    setAppointments(hardcodedAppointments);
  }, []);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const hours = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const handleClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleClose = () => {
    setSelectedAppointment(null);
  };

  return (
    <div className="pt-2">
      {/* Tabla para Desktop */}
      <div className="hidden md:block overflow-x-auto max-h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-[auto_repeat(7,_minmax(0,_1fr))] grid-rows-[auto_repeat(12,_auto)] gap-3 min-w-max">
          {/* Header con los días de la semana */}
          <div className="p-2"></div>
          {daysOfWeek.map(day => (
            <div
              key={day}
              className="w-56 h-12 bg-white rounded-tr-md rounded-br-md shadow border-l-2 border-[#bdc112] flex items-center justify-start text-right text-[#4d5e80] font-semibold pl-3"
            >
              {day}
            </div>
          ))}

          {/* Columnas de horarios */}
          {hours.map((hour, index) => (
            <React.Fragment key={index}>
              <div className="h-16 px-0 md:px-2.5 font-semibold justify-center items-center gap-2.5 inline-flex">
                <div className='border-l-2 border-[#009ff5] h-12 justify-center items-center inline-flex pl-3'>
                  {parseInt(hour.split(':')[0], 10) < 12 ? `${hour} AM` : `${hour} PM`}
                </div>
              </div>

              {/* Columna de turnos para cada día */}
              {daysOfWeek.map((day, dayIndex) => (
                <div key={dayIndex} className="h-16 flex items-center">
                  {/* Mostrar los turnos hardcodeados */}
                  {appointments
                    .filter(appointment => appointment.day === day && appointment.hour === hour)
                    .map(filteredAppointment => (
                      <div 
                        key={filteredAppointment.id} 
                        className="bg-white flex flex-row w-full h-5/6 justify-start items-center border rounded-md font-semibold text-gray-600 text-xs px-2 cursor-pointer shadow"
                        onClick={() => handleClick(filteredAppointment)}
                      >
                        <div className="flex-shrink-0 mr-2">
                          <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                        </div>
                        <div>
                          <div>Medico: {filteredAppointment.doctorName}</div>
                          <div>Paciente: {filteredAppointment.patientName}</div>
                          <div>Turno: {filteredAppointment.appointmentType}</div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tabla para Mobile */}
      <div className="block md:hidden overflow-x-auto max-h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-[auto_1fr] gap-3 min-w-max">
          {/* Header con el día actual */}
          <div className="col-span-2 w-[70%] h-12 bg-white rounded-md shadow border-l-2 border-[#bdc112] flex items-center justify-start text-right text-[#4d5e80] font-semibold pl-3 ml-24">
            {daysOfWeek[new Date().getDay() - 1]}
          </div>

          {/* Filas de horarios con turnos */}
          {hours.map((hour, index) => (
            <React.Fragment key={index}>
              <div className="h-16 px-2 font-semibold justify-center items-center gap-2.5 flex">
                <div className='border-l-2 border-[#009ff5] h-12 justify-center items-center inline-flex pl-3'>
                  {parseInt(hour.split(':')[0], 10) < 12 ? `${hour} AM` : `${hour} PM`}
                </div>
              </div>
              <div className="h-16 flex items-center">
                {/* Mostrar los turnos hardcodeados solo para el día actual */}
                {appointments
                  .filter(appointment => appointment.day === daysOfWeek[new Date().getDay() - 1] && appointment.hour === hour)
                  .map(filteredAppointment => (
                    <div 
                      key={filteredAppointment.id} 
                      className="bg-white flex flex-row w-[90%] h-5/6 justify-start items-center border rounded-md font-semibold text-gray-600 text-xs px-2 cursor-pointer shadow"
                      onClick={() => handleClick(filteredAppointment)}
                    >
                      <div className="flex-shrink-0 mr-2">
                        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                      </div>
                      <div>
                        <div>Medico: {filteredAppointment.doctorName}</div>
                        <div>Paciente: {filteredAppointment.patientName}</div>
                        <div>Turno: {filteredAppointment.appointmentType}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-2/5 relative border border-[#009ff5]">
            <button
              onClick={handleClose}
              className="absolute w-10 h-10 top-2 right-2 bg-[#25ced1] hover:bg-[#1da9b0] text-white p-2 rounded-full flex items-center justify-center"
            >
              X
            </button>
            <h2 className="text-lg font-bold mb-4 text-[#009ff5]">Detalles del Turno</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className='font-semibold'>Día: <span className='font-normal'>{selectedAppointment.day}</span></p>
                <p className='font-semibold'>Médico: <span className='font-normal'>{selectedAppointment.doctorName}</span></p>
                <p className='font-semibold'>Tipo de Turno: <span className='font-normal'>{selectedAppointment.appointmentType}</span></p>
              </div>
              <div>
                <p className='font-semibold'>Hora: <span className='font-normal'>{selectedAppointment.hour}</span></p>
                <p className='font-semibold'>Paciente: <span className='font-normal'>{selectedAppointment.patientName}</span></p>
              </div>
            </div>
            <p className='font-semibold mt-4'>Descripción: <span className='font-normal'>{selectedAppointment.appointmentDescription}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;

import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Datos hardcodeados
    const hardcodedAppointments = [
      { id: 1, day: 'Lunes', hour: '09:00', doctorName: 'Dr. Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Consulta' },
      { id: 2, day: 'Lunes', hour: '11:00', doctorName: 'Dr. María López', patientName: 'Carlos Fernández', appointmentType: 'Seguimiento' },
      { id: 3, day: 'Lunes', hour: '07:00', doctorName: 'Dr. Pedro García', patientName: 'Laura Martínez', appointmentType: 'Laboratorio' },
      { id: 4, day: 'Martes', hour: '10:00', doctorName: 'Dr. Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Consulta' },
      { id: 5, day: 'Martes', hour: '13:00', doctorName: 'Dr. Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Psicoterapia' },
      { id: 6, day: 'Martes', hour: '16:00', doctorName: 'Dr. Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Laboratorio' },
      { id: 7, day: 'Miércoles', hour: '09:00', doctorName: 'Dr. María López', patientName: 'Carlos Fernández', appointmentType: 'Cirugía' },
      { id: 8, day: 'Miércoles', hour: '11:00', doctorName: 'Dr. Pedro García', patientName: 'Laura Martínez', appointmentType: 'Seguimiento' },
      { id: 9, day: 'Miércoles', hour: '14:00', doctorName: 'Dr. Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Consulta a distancia' },
      { id: 10, day: 'Jueves', hour: '10:00', doctorName: 'Dr. Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Consulta' },
      { id: 11, day: 'Jueves', hour: '13:00', doctorName: 'Dr. Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Cirugía' },
      { id: 12, day: 'Jueves', hour: '07:00', doctorName: 'Dr. María López', patientName: 'Carlos Fernández', appointmentType: 'Laboratorio' },
      { id: 13, day: 'Viernes', hour: '09:00', doctorName: 'Dr. Pedro García', patientName: 'Laura Martínez', appointmentType: 'Consulta' },
      { id: 14, day: 'Viernes', hour: '12:00', doctorName: 'Dr. Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Psicoterapia' },
      { id: 15, day: 'Viernes', hour: '16:00', doctorName: 'Dr. Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Cirugía' },
      { id: 16, day: 'Sábado', hour: '08:00', doctorName: 'Dr. Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Consulta' },
      { id: 17, day: 'Sábado', hour: '10:00', doctorName: 'Dr. María López', patientName: 'Carlos Fernández', appointmentType: 'Seguimiento' },
      { id: 18, day: 'Sábado', hour: '14:00', doctorName: 'Dr. Pedro García', patientName: 'Laura Martínez', appointmentType: 'Laboratorio' },
      { id: 19, day: 'Domingo', hour: '09:00', doctorName: 'Dr. Elena Ruiz', patientName: 'Miguel Rodríguez', appointmentType: 'Cirugía' },
      { id: 20, day: 'Domingo', hour: '11:00', doctorName: 'Dr. Ricardo Sánchez', patientName: 'Lucía Morales', appointmentType: 'Psicoterapia' },
      { id: 21, day: 'Domingo', hour: '13:00', doctorName: 'Dr. Juan Pérez', patientName: 'Ana Gómez', appointmentType: 'Laboratorio' }
    ];

    setAppointments(hardcodedAppointments);
  }, []);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const hours = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <div className="p-4">
      <div className="overflow-auto">
        <div className="grid grid-cols-[auto_repeat(7,_minmax(0,_1fr))] grid-rows-[auto_repeat(12,_auto)] gap-3 min-w-max">
          {/* Header con los días de la semana */}
          <div className="p-2"></div>
          {daysOfWeek.map(day => (
            <div
              key={day}
              className="w-48 h-12 bg-white rounded-tr-md rounded-br-md shadow border-l-2 border-[#bdc112] flex items-center justify-start text-right text-[#4d5e80] font-semibold pl-3"
            >
              {day}
            </div>
          ))}

          {/* Columnas de horarios */}
          {hours.map((hour, index) => (
            <React.Fragment key={index}>
              <div className="h-[70px] px-2.5 py-5 border-l-2 border-[#009ff5] font-semibold justify-center items-center gap-2.5 inline-flex">
                {parseInt(hour.split(':')[0], 10) < 12 ? `${hour} AM` : `${hour} PM`}
              </div>

              {/* Columna de turnos para cada día */}
              {daysOfWeek.map((day, dayIndex) => (
                <div key={dayIndex} className="border p-2 h-20 flex items-center">
                  {/* Mostrar los turnos hardcodeados */}
                  {appointments
                    .filter(appointment => appointment.day === day && appointment.hour === hour)
                    .map(filteredAppointment => (
                      <div key={filteredAppointment.id} className="bg-[#f9ddfa] w-full h-full rounded font-semibold text-gray-600 text-sm">
                        <div>Medico: {filteredAppointment.doctorName}</div>
                        <div>Paciente: {filteredAppointment.patientName}</div>
                        <div>Turno: {filteredAppointment.appointmentType}</div>
                      </div>
                    ))}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appointments;

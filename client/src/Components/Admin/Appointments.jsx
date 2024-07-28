import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Lógica para obtener los turnos desde el backend
    fetch('http://localhost:4000/api/appointments')
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.error('Error fetching appointments:', error));
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
              className="w-40 h-12 bg-white rounded-tr-md rounded-br-md shadow border-l-2 border-[#bdc112] flex items-center justify-start text-right text-[#4d5e80] font-semibold pl-3"
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
                  {/* Mostrar los turnos obtenidos del backend */}
                  {appointments
                    .filter(appointment => appointment.day === day && appointment.hour === hour)
                    .map(filteredAppointment => (
                      <div key={filteredAppointment.id} className="bg-blue-200 p-2 mb-2 rounded">
                        {filteredAppointment.patientName}
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

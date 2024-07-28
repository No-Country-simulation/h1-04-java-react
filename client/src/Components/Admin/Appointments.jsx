import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Lógica para obtener los turnos desde el backend
    // Reemplaza esta URL con la URL real de tu API
    fetch('http://localhost:4000/api/appointments')
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const hours = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Turnos</h2>
      <div className="overflow-auto">
        <div className="grid grid-cols-8 gap-4 min-w-max space-x-4">
          {/* Header con los días de la semana */}
          <div className="bg-gray-200 p-2"></div>
          {daysOfWeek.map(day => (
            <div 
              key={day} 
              className="w-40 h-12 bg-white rounded-tr-md rounded-br-md shadow border-l-2 border-[#bdc112] flex items-center justify-center text-center font-semibold mx-2"
            >
              {day}
            </div>
          ))}

          {/* Columnas de horarios y turnos */}
          {hours.map((hour, index) => (
            <React.Fragment key={index}>
              {/* Columna de horas */}
              <div className="bg-gray-100 p-2 text-right font-semibold">{hour}</div>
              {/* Columna de turnos para cada día */}
              {daysOfWeek.map((day, dayIndex) => (
                <div key={dayIndex} className="border p-2 h-20 min-w-max">
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

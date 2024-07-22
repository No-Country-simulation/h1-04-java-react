import React from "react";
import CardPatient from "../../../helpers/atoms/CardPatient";

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

  const events = Array(6).fill({
    time: "8:00 AM",
    description: "Event has been scheduled",
    date: "Sunday, December",
  });

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
        {events.map((event, index) => (
          <CardPatient
            time={event.time}
            key={index}
            description={event.description}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;

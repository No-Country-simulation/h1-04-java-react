import { useState } from "react";

const CalendarTurn = ({ bgColor, textColor, onRangeChange }) => {
  const now = new Date();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const daysOfWeek = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  const month = now.getMonth();
  const year = now.getFullYear();
  const today = now.getDate();

  // Get first day of the month
  const firstDay = new Date(year, month, 1).getDay();
  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create a matrix for the calendar days
  const calendarDays = [];
  let week = Array(firstDay === 0 ? 6 : firstDay - 1).fill(""); // Fill initial empty days
  for (let day = 1; day <= daysInMonth; day++) {
    if (week.length === 7) {
      calendarDays.push(week);
      week = [];
    }
    week.push(day);
  }
  while (week.length < 7) {
    week.push("");
  }
  calendarDays.push(week);

  // Helper function to get start and end dates of the week
  const getWeekRange = (date) => {
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();
    const start = new Date(selectedDate);
    start.setDate(start.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    if (start.getMonth() !== month) {
      start.setDate(1);
    }
    if (end.getMonth() !== month) {
      end.setDate(daysInMonth);
    }

    return { start, end };
  };

  const [selectedDay, setSelectedDay] = useState(null);
  const [weekRange, setWeekRange] = useState(null);

  const handleDayClick = (day) => {
    if (day) {
      const selectedDate = new Date(year, month, day);
      const { start, end } = getWeekRange(selectedDate);
      setSelectedDay(selectedDate);
      setWeekRange({ start, end });
      if (onRangeChange) {
        onRangeChange(start, end);
      }
    }
  };

  const formatDateRange = (start, end) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return `${start.toLocaleDateString(
      "es-ES",
      options
    )} - ${end.toLocaleDateString("es-ES", options)}`;
  };

  return (
    <div
      className={` w-full mx-auto p-4 shadow-lg rounded-3xl mt-5`}
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
    >
      <div className='text-center font-bold text-xl mb-4'>
        {monthNames[month]} {year}
      </div>
      <div className='text-center mb-4'>
        {weekRange ? (
          <div>Semana: {formatDateRange(weekRange.start, weekRange.end)}</div>
        ) : (
          <div>Seleccione un día para ver la semana</div>
        )}
      </div>
      <div className='grid grid-cols-7 text-center gap-y-2'>
        {daysOfWeek.map((day, index) => (
          <div key={index} className='text-gray-500'>
            {day}
          </div>
        ))}
        {calendarDays.flat().map((day, index) => (
          <div
            key={index}
            className={`h-10 flex items-center justify-center text-lg cursor-pointer
              ${
                day ? "" : "text-transparent"
              }  // Use 'text-transparent' to hide empty days
              ${
                day &&
                selectedDay &&
                new Date(year, month, day).getTime() >=
                  (weekRange?.start?.getTime() || 0) &&
                new Date(year, month, day).getTime() <=
                  (weekRange?.end?.getTime() || 0)
                  ? "bg-[#E7E2F1] text-black rounded-xl"
                  : ""
              }
              ${day === today ? "bg-purple rounded-xl" : ""}
            `}
            onClick={() => day && handleDayClick(day)} // Only trigger click event if day is present
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarTurn;

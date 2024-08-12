/* eslint-disable react/prop-types */
const Calendar = ({bgColor}) => {
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

  return (
    <div className={`w-80 mx-auto p-4 shadow-lg rounded-3xl mb-5 mt-5`} style={{backgroundColor:`${bgColor}`}}>
      <div className='text-center font-bold text-xl mb-4'>
        {monthNames[month]} {year}
      </div>
      <div className='grid grid-cols-7 text-center gap-y-2'>
        {daysOfWeek.map((day, index) => (
          <div key={index} className='font-semibold text-gray-500'>
            {day}
          </div>
        ))}
        {calendarDays.flat().map((day, index) => (
          <div key={index} className={`h-10 flex items-center justify-center text-lg
              ${day ? "" : ""}
              ${day === today ? "bg-purpleClear text-white rounded-xl" : ""}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
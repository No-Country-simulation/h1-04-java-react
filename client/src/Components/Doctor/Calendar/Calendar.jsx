import Calendar from "../../../helpers/atoms/Calendar";
import Dates from "./Dates";
import DoctorHeader from "../DoctorHeader/DoctorHeader";

export default function CalendarDoctor() {
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
  ];
  return (
    <div className='mt-2 flex flex-col items-center'>
      <DoctorHeader text={"Proxima consulta"} />
      
      <Calendar />
      
      <div className='flex flex-wrap justify-center mt-5 md:w-1/2  gap-2'>
        {times.map((time, index) => (
          <Dates time={time} key={index} />
        ))}
      </div>
    </div>
  );
}

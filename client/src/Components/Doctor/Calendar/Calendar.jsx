import { useState } from "react";
import Calendar from "../../../helpers/atoms/Calendar";
import Dates from "./Dates";
import DoctorHeader from "../DoctorHeader/DoctorHeader";

export default function CalendarDoctor() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelected = (index) => {
    setSelectedButton(index);
  };

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
  {selectedButton === "todos"
    ? { backgroundColor: "#0087D0", color: "#fff", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "5px" }
    : { border: "1px solid #0087D0", color: "#0087D0", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "5px" }}

  return (
    <div className='mt-5 flex flex-col'>
      <DoctorHeader text={"Proxima consulta"} />
      
      <Calendar />
      
      <div className='flex flex-wrap justify-center mt-5 gap-2 mb-10'>
        {times.map((time, index) => (
          <button key={index} onClick={() => handleSelected(index)}>
            <Dates time={time} key={index} clas={`rounded-md border-2 inline-block w-32 text-center py-2 ${selectedButton === index ? "bg-blue-500 text-white border-blue-500" : "border-blue-300 text-blue-400"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

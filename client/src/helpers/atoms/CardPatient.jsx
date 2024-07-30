import React from "react";
import { Link } from "react-router-dom";

export default function CardPatient(props) {
  const hourMappings = {
    SEVEN_AM: "7:00 AM",
    EIGHT_AM: "8:00 AM",
    NINE_AM: "9:00 AM",
    TEN_AM: "10:00 AM",
    ELEVEN_AM: "11:00 AM",
    TWELVE_PM: "12:00 PM",
    ONE_PM: "1:00 PM",
    TWO_PM: "2:00 PM",
    THREE_PM: "3:00 PM",
    FOUR_PM: "4:00 PM",
    FIVE_PM: "5:00 PM",
    SIX_PM: "6:00 PM",
    SEVEN_PM: "7:00 PM",
    EIGHT_PM: "8:00 PM",
    NINE_PM: "9:00 PM",
    TEN_PM: "10:00 PM",
    ELEVEN_PM: "11:00 PM",
    TWELVE_AM: "12:00 AM",
  };
  const formatHour = (hour) => hourMappings[hour] || hour;

  return (
    <Link to={"/previous-consultation"}>
      <div className='flex items-center w-full'>
        <div className=' text-gray-500 border-l-2 border-gray-800 pl-5'>
          {formatHour(`${props.time}`)}
        </div>

        <div
          key={props.index}
          className='flex w-full shadow items-center space-x-4  p-3 rounded mb-2'
        >
          <div className='bg-purple-300 text-white rounded-full w-10 h-10 flex items-center justify-center'>
            Undo
          </div>
          <div>
            <div className='text-blue-600 '>{props.name}</div>
            <div className='flex text-gray-500'>
              <div className=' text-sm'>{props.date} </div>
              <p className=' text-sm'> - {props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

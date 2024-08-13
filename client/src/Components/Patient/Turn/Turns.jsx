/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import arrow from "../../../Assets/Imgs/arrowWhite.png";
import calendar from "../../../Assets/Imgs/calendarOther.svg";
import { formatHour, translateAppointmentType } from "../../../utils/hourMapping";

const Turns = ({ doctor, time, href, type }) => {
  return (
    <div className='flex items-center justify-between shadow-lg px-4 py-2 rounded-lg border-2 mx-3 my-1 mb-6' style={{backgroundColor:"#8163B026"}}>
      <div className='flex gap-6'>
        <img src={calendar} alt='calendar' className='w-6' />
        
        <div style={{color:"#8163B0"}}>
          <p className='font-bold text-sm'>{translateAppointmentType(type)}</p>
          <b />
          
          <p>
            Dr. {doctor} | {formatHour(`${time}`)}.
          </p>
        </div>
      </div>
      
      <Link to={href}>
        <img src={arrow} alt='arrow' className='w-8 h-8 rounded-full p-3' style={{backgroundColor:"#8163B0"}} />
      </Link>
    </div>
  );
};

export default Turns;

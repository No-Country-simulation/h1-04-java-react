/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import arrow from "../../../Assets/Imgs/arrowWhite.png";
import calendar from "../../../Assets/Imgs/otherCalendar.svg";
import {
  formatHour,
  translateAppointmentType,
} from "../../../utils/hourMapping";
const Turns = ({ doctor, time, href, type }) => {
  return (
    <div className='bg-white shadow-lg justify-between px-3 border-secondary rounded-lg border-2 flex items-center py-4 mx-3 my-1'>
      <div className='flex gap-3'>
        <div>
          <img src={calendar} alt='calendar' className=' ' />
        </div>

        <div className='text-secondary'>
          <p className='font-bold text-sm'>{translateAppointmentType(type)}</p>
          <b />

          <p className=''>
            Dr. {doctor} | {formatHour(`${time}`)}.
          </p>
        </div>
      </div>

      <Link to={href}>
        <img
          src={arrow}
          alt='arrow'
          className='w-6 h-6 bg-secondary rounded-full p-1'
        />
      </Link>
    </div>
  );
};

export default Turns;

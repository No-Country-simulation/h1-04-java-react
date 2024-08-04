/* eslint-disable react/prop-types */
import arrow from "../../../Assets/Imgs/arrowWhite.png";
import calendar from "../../../Assets/Imgs/otherCalendar.svg";

const Turns = ({ doctor, time, href, type }) => {
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
    <div className='bg-white shadow-lg justify-between px-3 border-secondary rounded-lg border-2 flex items-center py-4 mx-3 my-4'>
      <div className='flex gap-3'>
        <div>
          <img src={calendar} alt='calendar' className=' ' />
        </div>

        <div className='text-secondary'>
          <p className='font-bold text-sm'>Turno al Médico: {type}</p>

          <p className=''>
            Dr. {doctor} | {formatHour(`${time}`)}.
          </p>
        </div>
      </div>

      <a href={href}>
        <img
          src={arrow}
          alt='arrow'
          className='w-6 h-6 bg-secondary rounded-full p-1'
        />
      </a>
    </div>
  );
};

export default Turns;
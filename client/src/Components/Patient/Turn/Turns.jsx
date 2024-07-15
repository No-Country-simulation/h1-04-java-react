import PropTypes from "prop-types";
import arrow from "../../../Assets/Imgs/arrow.png";

const Turns = ({ doctor, time, href, type }) => {
  return (
    <div className='bg-stone-300  flex justify-between items-center py-2 m-3'>
      <div>
        <p className='ml-2'>{doctor}</p>
      </div>
      <div>
        <p className=''>{type}</p>
      </div>
      <div className='flex items-center'>
        <div>
          <p>Viernes</p>
          <p>{time}</p>
        </div>

        <a href={href}>
          <img src={arrow} alt='arrow' className='w-6 h-6 ml-4' />
        </a>
      </div>
    </div>
  );
};

export default Turns;

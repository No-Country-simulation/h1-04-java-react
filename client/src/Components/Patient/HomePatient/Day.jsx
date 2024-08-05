import PropTypes from "prop-types";
import arrowRight from "../../../Assets/Imgs/arrowWhite.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Day = ({ image, activity, time, href, backColor }) => {
  return (
    <div
      className='flex items-center justify-between p-4 m-3 bg-white'
      style={{ border: `solid 3px ${backColor}`, borderRadius: "15px" }}
    >
      <div className='flex'>
        <img src={image} alt={activity} />
        <div className='flex flex-col'>
          <p className='ml-2 font-bold' style={{ color: `${backColor}` }}>
            {activity}
          </p>
          <p style={{ color: `${backColor}`, marginLeft: "9px" }}>{time}</p>
        </div>
      </div>
      <Link to={href}>
        <img
          src={arrowRight}
          alt='arrow'
          className='w-6 h-6 ml-4'
          style={{
            backgroundColor: `${backColor}`,
            borderRadius: "20px",
            padding: "8px",
          }}
        />
      </Link>
    </div>
  );
};

Day.propTypes = {
  activity: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
};

export default Day;

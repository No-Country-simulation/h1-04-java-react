import arrowRight from "../../../Assets/Imgs/arrowWhite.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Day = ({ image, activity, time, href, backColor, color }) => {
  return (
    <div className='flex items-center justify-between p-4 m-3' style={{ borderRadius:"10px", backgroundColor:`${backColor}` }}>
      <div className='flex items-center'>
        <img src={image} alt={activity} className="w-8 h-8" />
        <div className='flex flex-col ml-4'>
          <p className='font-semibold' style={{ color: `${color}` }}>
            {activity}
          </p>
          <p style={{ color: `${color}` }}>{time}</p>
        </div>
      </div>
      
      <Link to={href}>
        <img
          src={arrowRight} alt='arrow' className='w-10 h-10 ml-4'
          style={{ backgroundColor: `${color}`, borderRadius: "20px", padding: "15px" }}
        />
      </Link>
    </div>
  );
};


export default Day;
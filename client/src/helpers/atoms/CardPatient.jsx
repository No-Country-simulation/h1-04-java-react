import { useNavigate } from "react-router-dom";
import img from "../../Assets/Imgs/profileDoctor.png";
import { formatHour, translateDay } from "../../utils/hourMapping";

export default function CardPatient(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/previous-consultation", { state: { patient: props } });
  };

  return (
    <div
      onClick={handleClick}
      className='flex items-center w-full cursor-pointer'
    >
      <div className='text-blue-400 border-l-2 border-blue-500 pl-5'>
        {formatHour(props.time)}
      </div>
      <div className='flex w-full shadow-md items-center space-x-4 p-3 rounded mb-2'>
        <div className='bg-purple-300 text-white rounded-full w-10 h-10 flex items-center justify-center'>
          <img src={img} alt='' />
        </div>
        <div>
          <div className='text-blue-600'>{props.name}</div>
          <div className='flex text-gray-500'>
            <div className='text-sm'>{translateDay(props.date)}</div>
            <p className='text-sm'> - {props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { getImageById } from "../../Assets/images"; // Ajusta la ruta según tu estructura de carpetas
import {
  formatHour,
  translateDay,
  translateAppointmentType,
} from "../../utils/hourMapping";

export default function CardPatient(props) {
  const navigate = useNavigate();
  const image = getImageById(props.id); // Obtén la imagen basada en el ID del paciente

  const handleClick = () => {
    navigate("/previous-consultation", { state: { patient: props } });
  };

  return (
    <div
      onClick={handleClick}
      className='flex gap-2  items-center w-full cursor-pointer'
    >
      <div className='text-blue-400 w-1/5 border-l-2 border-blue-500 pl-5'>
        {formatHour(props.time)}
      </div>
      <div className='flex bg-white w-full shadow-md items-center space-x-4 p-3 rounded mb-2'>
        <div className='bg-purple-300 text-white rounded-full w-10 h-10 flex items-center justify-center'>
          <img src={image} alt='Patient' />
        </div>
        <div>
          <div className='text-blue-600'>{props.name}</div>
          <div className='flex text-gray-500'>
            <div className='text-sm'>{translateDay(props.date)}</div>
            <p className='text-sm'>
              - {translateAppointmentType(props.description)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

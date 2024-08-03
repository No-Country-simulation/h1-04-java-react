/* eslint-disable react/prop-types */
import arrowLeft from "../../../Assets/Imgs/anotherArrowLeft.png";
import { useNavigate } from "react-router-dom";

export default function DoctorHeader(props) {
  const navigate = useNavigate();

  return (
    <button className='backPage' onClick={() => navigate(-1)}>
      <img src={arrowLeft} alt='back' />
      <p>{props.text}</p>
    </button>
  );
}

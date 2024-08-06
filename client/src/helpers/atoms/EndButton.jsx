/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function EndButton(props) {
  const navigate = useNavigate();

  const handleRedirect = () =>{
    navigate("/query-completion");
  }

  return (
    <button
      onClick={() => { props.show(true); handleRedirect() }}
      className='bg-blueColor text-white md:w-1/2 mt-10 py-2 w-full text-center rounded'
    >
      {props.text}
    </button>
  );
}
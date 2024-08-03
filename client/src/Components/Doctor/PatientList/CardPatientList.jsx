/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../../../Assets/Imgs/doctorFooter3.png";

export default function CardPatientList(props) {
  return (
    <Link to={"/patientRecord"}>
      <div className='flex items-center w-full'>
        <div
          key={props.index}
          className='flex w-full shadow-xl border-2 items-center  space-x-4  p-3 rounded mb-2'
        >
          <div className='bg-blue-100 text-white rounded-full w-10 h-10 flex items-center justify-center'>
            <img src={img} alt='' />
          </div>
          <div>
            <div className='text-blue-600 '>{props.name}</div>
            {/* <div className='flex text-gray-500'>
              <div className=' text-sm'>{props.date} </div>
              <p className=' text-sm'> - {props.description}</p>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

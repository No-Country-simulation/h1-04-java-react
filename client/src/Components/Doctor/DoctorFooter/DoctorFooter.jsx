import { Link } from "react-router-dom";
import img1 from "../../../Assets/Imgs/doctorFooter1.png";
import img2 from "../../../Assets/Imgs/doctorFooter2.png";
import img3 from "../../../Assets/Imgs/doctorFooter3.png";
import img4 from "../../../Assets/Imgs/doctorFooter4.png";

export default function DoctorFooter() {
  return (
    <div className='w-full flex justify-around border-t-2 pt-3  bg-white'>
      <Link to={"/doctorPatient"}>
        <div className='flex flex-grow flex-col justify-center items-center text-[#0087D0]'>
          <img className='w-6' src={img1} alt='home img' />
          <p>Tratamientos</p>
        </div>
      </Link>
      <Link to={"/doctorPatient"}>
        <div className='flex flex-grow flex-col justify-center items-center text-[#0087D0]'>
          <img className='w-6' src={img2} alt='home img' />
          <p>Turnos</p>
        </div>
      </Link>
      <Link to={"/patientLists"}>
        <div className='flex flex-grow flex-col justify-center items-center text-[#0087D0]'>
          <img className='w-6' src={img3} alt='home img' />
          <p>Pacientes</p>
        </div>
      </Link>
      <Link to={"/doctorConfiguration"}>
        <div className='flex flex-grow flex-col justify-center items-center text-[#0087D0]'>
          <img className='w-6' src={img4} alt='settings img' />
          <p>Ajustes</p>
        </div>
      </Link>
    </div>
  );
}

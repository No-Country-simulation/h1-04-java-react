import React from "react";
import home from "../../../Assets/Imgs/home.png";
import urgency from "../../../Assets/Imgs/urgency.png";
import settings from "../../../Assets/Imgs/settings.png";
import { Link } from "react-router-dom";

export default function DoctorFooter() {
  return (
    <div className='w-full flex justify-around mb-3 border-t-2 pt-3'>
      <Link to={"/doctorPatient"}>
        <div className='flex flex-grow flex-col justify-center items-center text-primary'>
          <img className='w-6' src={home} alt='home img' />
          <p>Tratamientos</p>
        </div>
      </Link>
      <Link to={"/doctorConfiguration"}>
        <div className='flex flex-grow flex-col justify-center items-center text-primary'>
          <img className='w-6' src={home} alt='home img' />
          <p>Turnos</p>
        </div>
      </Link>
      <Link to={"/doctorConfiguration"}>
        <div className='flex flex-grow flex-col justify-center items-center text-primary'>
          <img className='w-6' src={home} alt='home img' />
          <p>Pacientes</p>
        </div>
      </Link>
      <Link to={"/doctorConfiguration"}>
        <div className='flex flex-grow flex-col justify-center items-center text-primary'>
          <img className='w-6' src={settings} alt='settings img' />
          <p>Ajustes</p>
        </div>
      </Link>
    </div>
  );
}

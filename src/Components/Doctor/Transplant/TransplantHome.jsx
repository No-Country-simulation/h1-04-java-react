import React from "react";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import data from "./transplantData";
import img from "../../../Assets/Imgs/userProfileIMG.png";
import { Link } from "react-router-dom";

function TransplantHome() {
  return (
    <div>
      <DoctorHeader text={"Pacientes"} />

      {data.map((patient, index) => (
        <Link key={index} to={`/transplantProfile/${index}`}>
          <div className='flex bg-white w-full shadow-lg items-center space-x-4 p-3 rounded-[10px] mb-2'>
            <div className='text-white rounded-full w-14 h-14 flex items-center justify-center'>
              <img src={img} alt='Patient' />
            </div>
            <div>
              <div className='text-blue-600'>{patient.nombre}</div>
              <div className='text-gray-500'>
                <p className='text-sm'>
                  Órgano necesario: {patient.organo_necesario}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TransplantHome;

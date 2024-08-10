import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "./transplantData";
import img from "../../../Assets/Imgs/userProfileIMG.png";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import imgPatient from "../../../Assets/Imgs/doctorFooter3.png";
import imgSearch from "../../../Assets/Imgs/searchPatient.png";

function TransplantProfile() {
  const { id } = useParams(); // Obtener el ID del paciente desde la URL
  const patient = data[id]; // Encontrar al paciente en los datos usando el ID

  if (!patient) {
    return <div>Paciente no encontrado</div>;
  }

  return (
    <div className=''>
      <DoctorHeader text={"Ficha paciente"} />

      <div className='flex flex-col items-center'>
        <div className='text-white rounded-full w-16 h-16 flex items-center justify-center mb-0'>
          <img
            src={img}
            alt='Patient'
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div className=' font-semibold text-center mb-10'>
          {patient.nombre}
          <p className='font-normal text-[#5A5555] '>Paciente en tratamiento</p>
        </div>

        <div className='w-full flex-col justify-center  flex gap-5'>
          <Link to={`/transplantMedicalData/${id}`}>
            <div className='bg-[#D9F2FF] py-5 gap-2 rounded-[10px] text-blueColor font-semibold w-full justify-center flex-col items-center flex'>
              <img src={imgPatient} alt='Patient' className=' w-8' />
              <h4>Ficha medica del donante cruzado</h4>
            </div>
          </Link>
          <Link to={`/transplantSearch/${id}`}>
            <div className='bg-[#D9F2FF] py-5 gap-2 rounded-[10px] text-blueColor font-semibold w-full justify-center flex-col items-center flex'>
              <img src={imgSearch} alt='Patient' className='w-8' />
              <h4>Busqueda de compatibilidad</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TransplantProfile;

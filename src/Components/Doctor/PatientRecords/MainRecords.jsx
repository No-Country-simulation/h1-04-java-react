import React from "react";
import consultation1 from "../../../Assets/Imgs/imgConsultation1.svg";
import consultation2 from "../../../Assets/Imgs/imgConsultation2.svg";
import consultation3 from "../../../Assets/Imgs/imgConsultation3.svg";
import consultation4 from "../../../Assets/Imgs/imgConsultation4.svg";
import { Link } from "react-router-dom";
export default function MainRecords({ patient }) {
  return (
    <div className='flex flex-wrap gap-5'>
      <Link
        to={"/medicalHistory"}
        state={{ patient }}
        className='treatmentsStylesDoctor bg-[#03A8AB26] text-[#03A8AB]'
      >
        <img src={consultation2} alt='Historia Clinica' />
        <p>Historia Clinica</p>
      </Link>
      <Link
        to={"/treatmentFollowUp"}
        className='treatmentsStylesDoctor bg-[#FF8A5B26] text-[#FF8A5B]'
      >
        <img className='text-red-600' src={consultation1} alt='Tratamiento' />
        <p>Tratamiento</p>
      </Link>
      <Link
        to={"/patientStudy"}
        className='treatmentsStylesDoctor bg-[#8163B026] text-[#8163B0]'
      >
        <img src={consultation3} alt='Estudios' />
        <p>Estudios</p>
      </Link>
      <Link
        to={"/patientMedication"}
        className='treatmentsStylesDoctor bg-[#EA526F26] text-[#EA526F]'
      >
        <img className='text-[#EA526F]' src={consultation4} alt='Medicación' />
        <p>Medicación</p>
      </Link>
    </div>
  );
}

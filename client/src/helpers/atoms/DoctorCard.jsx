// src/components/DoctorCard.jsx
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='p-6'>
        <h2 className='text-xl font-bold text-gray-800'>
          {doctor.firstName} {doctor.lastName}
        </h2>
        <p className='text-gray-600'>Ciudad: {doctor.city}</p>
        <div className='mt-4'>
          <h3 className='text-lg font-semibold text-gray-800'>
            Especialidades:
          </h3>
          <ul className='list-disc list-inside'>
            {doctor.specialties.map((specialty, index) => (
              <li key={index} className='text-gray-600'>
                {specialty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

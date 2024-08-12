import React, { useState } from "react";
import patientData from "./transplantData"; // Datos de pacientes que necesitan órganos
import donorData from "./donorData"; // Datos de donantes
import { useParams } from "react-router-dom";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import img from "../../../Assets/Imgs/userProfileIMG.png";

// Función para verificar compatibilidad de tipo de sangre
const isCompatible = (bloodType1, bloodType2) => {
  const compatibleBloodTypes = {
    "O-": ["O-"],
    "O+": ["O-", "O+"],
    "A-": ["A-", "O-"],
    "A+": ["A-", "A+", "O-", "O+"],
    "B-": ["B-", "O-"],
    "B+": ["B-", "B+", "O-", "O+"],
    "AB-": ["AB-", "A-", "B-", "O-"],
    "AB+": ["AB-", "AB+", "A-", "A+", "B-", "B+", "O-", "O+"],
  };
  return compatibleBloodTypes[bloodType1].includes(bloodType2);
};


export default function TransplantSearch() {
  const { id } = useParams();
  const patient = patientData[id];

  // Estado para manejar los filtros
  const [filterByBloodType, setFilterByBloodType] = useState(true);
  const [filterByOrgan, setFilterByOrgan] = useState(false);
  const [filterByAge, setFilterByAge] = useState(false);
  const [ageRange, setAgeRange] = useState([0, 100]);

  // Filtrar donantes
  const filteredDonors = donorData.filter((d) => {
    let isValid = true;

    // Filtrar por tipo de sangre
    if (filterByBloodType) {
      isValid = isCompatible(patient.tipo_sangre, d.tipo_sangre);
    }

    // Filtrar por órgano si se activa el filtro
    if (filterByOrgan) {
      isValid = isValid && d.organo_donante === patient.organo_necesario;
    }

    // Filtrar por rango de edad si se activa el filtro
    if (filterByAge) {
      isValid = isValid && d.edad >= ageRange[0] && d.edad <= ageRange[1];
    }

    return isValid;
  });

  return (
    <div>
      <DoctorHeader text={"Posibles donantes"} />
      <h2 className='text-lg font-semibold mb-4'>Paciente</h2>

      <div className='flex bg-[#ffffff] w-full shadow-lg items-center space-x-4 p-3 rounded-[10px] mb-2'>
        <div className='text-white rounded-full w-14 h-14 flex items-center justify-center'>
          <img src={img} alt='Patient' />
        </div>
        <div>
          <div className='text-blue-600'>{patient.nombre}</div>

          <div className='text-gray-500'>
            <p className='text-sm'>Edad: {patient.edad}</p>

            <p className='text-sm'>
              Órgano necesario: {patient.organo_necesario}
            </p>
            <p className='text-sm'>Tipo de sangre: {patient.tipo_sangre}</p>
          </div>
        </div>
      </div>

      <h1 className='text-lg font-semibold mb-2'>Filtros</h1>
      <div className='mb-4 flex gap-4'>
        <button
          onClick={() => setFilterByBloodType(!filterByBloodType)}
          className={`shadow-lg rounded-lg px-4 py-2 ${
            filterByBloodType ? "bg-blueColor text-white" : "bg-white "
          }`}
        >
          Tipo de Sangre
        </button>
        <button
          onClick={() => setFilterByOrgan(!filterByOrgan)}
          className={`shadow-lg rounded-lg px-4 py-2 ${
            filterByOrgan ? "bg-blueColor text-white" : "bg-white "
          }`}
        >
          Órgano
        </button>
        <button
          onClick={() => setFilterByAge(!filterByAge)}
          className={`shadow-lg rounded-lg px-4 py-2 ${
            filterByAge ? "bg-blueColor text-white" : "bg-white "
          }`}
        >
          Edad
        </button>
      </div>

      {filterByAge && (
        <div className='mb-4'>
          <label className='block font-semibold text-lg mb-2'>
            Rango de Edad: {ageRange[0]} - {ageRange[1]}
          </label>
          <div className='flex items-center justify-evenly '>
            <div className='flex items-center space-x-2'>
              <button
                onClick={() => {
                  if (ageRange[0] > 0) {
                    setAgeRange([ageRange[0] - 10, ageRange[1]]);
                  }
                }}
                className='w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'
              >
                -
              </button>
              <span>{ageRange[0]} años</span>
              <button
                onClick={() => {
                  if (ageRange[0] < ageRange[1] - 10) {
                    setAgeRange([ageRange[0] + 10, ageRange[1]]);
                  }
                }}
                className='w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'
              >
                +
              </button>
            </div>
            <div className='flex items-center space-x-2'>
              <button
                onClick={() => {
                  if (ageRange[1] > ageRange[0] + 10) {
                    setAgeRange([ageRange[0], ageRange[1] - 10]);
                  }
                }}
                className='w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'
              >
                -
              </button>
              <span>{ageRange[1]} años</span>
              <button
                onClick={() => {
                  if (ageRange[1] < 100) {
                    setAgeRange([ageRange[0], ageRange[1] + 10]);
                  }
                }}
                className='w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <h2 className='text-lg font-semibold mb-4'>Donantes Compatibles</h2>
        {filteredDonors.length > 0 ? (
          filteredDonors.map((d, index) => (
            <div
              key={index}
              className='flex bg-white w-full shadow-lg items-center space-x-4 p-3 rounded-[10px] mb-2'
            >
              <div className='text-white rounded-full w-14 h-14 flex items-center justify-center'>
                <img src={img} alt='Donor' />
              </div>
              <div>
                <div className='text-blue-600'>{d.nombre}</div>
                <div className='text-gray-500'>
                  <p className='text-sm'>Edad: {d.edad}</p>
                  <p className='text-sm'>
                    Órgano disponible: {d.organo_donante}
                  </p>
                  <p className='text-sm'>Tipo de sangre: {d.tipo_sangre}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>
            No se encontraron donantes compatibles.
          </p>
        )}
      </div>
    </div>
  );
}

import React from "react";
import data from "./transplantData";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import { useParams } from "react-router-dom";

export default function TransplantMedicalData() {
  const { id } = useParams();
  const patient = data[id];

  return (
    <div>
      <DoctorHeader text={"Ficha paciente"} />
      <div className='w-full bg-white shadow-xl p-4 rounded-[10px]'>
        <h1 className='font-bold'>{patient.fecha_nacimiento}</h1>
        <p>Edad: {patient.edad}</p>
        <p>Tipo de sangre: {patient.tipo_sangre}</p>
        <p>Organo necesario: {patient.organo_necesario}</p>

        <h1 className='font-bold mt-2'>Notas del Médico:</h1>
        <p>{patient.nota_medico}</p>

        <h2 className='mt-2'>Recomendaciones Adicionales:</h2>
        <p className='ml-3 mt-3'>
          Dieta: Es importante que el paciente siga una dieta baja en sodio para
          ayudar a controlar la presión arterial. Se sugiere evitar alimentos
          procesados, enlatados y comidas rápidas que suelen tener alto
          contenido de sodio.
        </p>
        <p className='ml-3 mt-3'>
          Rutina de Ejercicios: Es fundamental que el paciente mantenga una
          rutina de ejercicios moderada para mejorar la salud cardiovascular y
          controlar la presión arterial. Se recomienda realizar al menos 150
          minutos de ejercicio aeróbico de intensidad moderada por semana, como
          caminar, nadar o andar en bicicleta, y combinarlo con ejercicios de
          fuerza dos veces por semana.
        </p>
      </div>
    </div>
  );
}

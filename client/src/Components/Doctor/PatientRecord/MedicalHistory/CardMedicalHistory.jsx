import { useState } from "react";

// Función para formatear la fecha
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return date.toLocaleDateString("es-ES", options);
};

const CardMedicalHistory = ({ history, patient }) => {
  const [viewDetails, setViewDetails] = useState(false);

  // Extrae el primer tratamiento y la primera prescripción médica
  const firstTreatment = patient.treatments[0];
  const firstPrescription = firstTreatment
    ? firstTreatment.medicalPrescriptions[0]
    : null;

  const Details = () => {
    return (
      <div className='mt-5'>
        <h3 className='mb-1 font-semibold'>Notas del Médico:</h3>
        <p className='text-[#5A5555]'>
          Estado del Paciente: El paciente presenta un control adecuado de la
          hipertensión arterial, con los valores de presión arterial dentro del
          rango objetivo establecido. No se han observado efectos secundarios
          significativos del tratamiento actual. Se recomienda continuar con el
          régimen de tratamiento con Lisinopril 10 mg diariamente para mantener
          el control de la presión arterial. Recomendaciones Adicionales: Dieta:
          Es importante que el paciente siga una dieta baja en sodio para ayudar
          a controlar la presión arterial. Se sugiere evitar alimentos
          procesados, enlatados y comidas rápidas que suelen tener alto
          contenido de sodio.
        </p>
      </div>
    );
  };

  const handleViewDetails = () => {
    setViewDetails(!viewDetails);
  };

  return (
    <div className='text-left shadow-xl bg-white mb-10 rounded-lg p-7 m-5'>
      <button onClick={handleViewDetails} className='text-left'>
        <h3 className='mb-1 font-semibold'>{history}</h3>
        <h4>Tratamiento Prescrito:</h4>
        {firstPrescription ? (
          <div className='text-[#5A5555]'>
            <p>
              - Nombre del medicamento:{" "}
              {firstPrescription.medication.medicationName}
            </p>
            <p>- Dosis: {firstPrescription.doseSize}</p>
            <p>- Frecuencia: {firstPrescription.doseFrequency}</p>
          </div>
        ) : (
          <p>No hay prescripción médica disponible.</p>
        )}
      </button>
      {viewDetails && <Details />}
    </div>
  );
};

export default CardMedicalHistory;

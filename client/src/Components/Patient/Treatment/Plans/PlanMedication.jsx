import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import undo from "../../../../Assets/Imgs/undo.png";
import "./plans.css";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import azatioprina from "../../../../Assets/Imgs/azatioprina.png";
import muyBien from "../../../../Assets/Imgs/muyBien.png";
import normal from "../../../../Assets/Imgs/normal.png";
import mal from "../../../../Assets/Imgs/mal.png";
import DoctorContext from "../../../../context/DoctorContext";

const PlanMedication = () => {
  const [isOpen, setIsOpen] = useState([]);
  const { fetchPatientById, authData } = useContext(DoctorContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatientData = async () => {
      if (authData) {
        try {
          const data = await fetchPatientById(authData.id);
          setPatientData(data.patient.treatments);
          setIsOpen(Array(data.patient.treatments.length).fill(false));
          setError(null);
        } catch (error) {
          setError(error.message);
          setPatientData([]);
        }
      }
    };

    loadPatientData();
  }, [authData, fetchPatientById]);

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <article>
      {patientData.length > 0 ? (
        patientData.map((treatment, index) => (
          <div key={index}>
            <button
              className='option bg-beigeColor font-bold flex justify-between p-2'
              onClick={() => toggleDropdown(index)}
            >
              {treatment.treatmentName}
              <img
                src={arrowRight}
                alt='arrow'
                className={`w-6 h-6 ml-4 ${
                  isOpen[index] ? "arrow-rotate" : ""
                }`}
              />
            </button>
            {isOpen[index] && (
              <div className='containerMedication'>
                {treatment.medicalPrescriptions.map((prescription) => (
                  <div
                    key={prescription.id}
                    className='flex flex-col border-b-4 mb-4'
                  >
                    <div className='flex items-center gap-5 font-bold text-orangeColor'>
                      <img src={azatioprina} alt='Muy bien' />

                      <h1>{prescription.medication.medicationName}</h1>
                    </div>

                    <section className='flex justify-center text-center'>
                      <div>
                        <p>Frecuencia</p>
                        <p>{prescription.doseFrequency}</p>
                      </div>
                      <div>
                        <p>Dosis</p>
                        <p>{prescription.doseSize}</p>
                      </div>
                    </section>

                    <span className='font-bold'>Instrucciones</span>
                    <p>{prescription.indications}</p>
                    <div className='buttonOk mb-5'>
                      <button onClick={() => alert("Descargando...")}>
                        Descargar Receta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No hay tratamientos disponibles</p>
      )}
      {error && <p>Error: {error}</p>}
    </article>
  );
};

PlanMedication.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PlanMedication;

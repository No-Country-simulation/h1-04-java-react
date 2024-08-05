import PropTypes from "prop-types";
import { useState } from "react";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import azatioprina from "../../../../Assets/Imgs/azatioprina.png";
import muyBien from "../../../../Assets/Imgs/muyBien.png";
import normal from "../../../../Assets/Imgs/normal.png";
import mal from "../../../../Assets/Imgs/mal.png";
import "./plans.css";

const optionsTreat = [
  { label: "Azatioprima" },
  { label: "Clonazepan" },
  { label: "Ibuprofeno" },
];

const PlanMedication = () => {
  const [isOpen, setIsOpen] = useState(Array(optionsTreat.length).fill(false));

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <article>
      {optionsTreat.map((comp, index) => (
        <div key={index}>
          <button
            className='option font-bold flex justify-between p-2'
            onClick={() => toggleDropdown(index)}
          >
            {comp.label}
            <img
              src={arrowOrange}
              alt='arrow'
              className={`w-4 h-6 ml-4 ${
                isOpen[index] ? "more-more-arrow-rotate" : "more-arrow-rotate"
              }`}
            />
          </button>
          {isOpen[index] && (
            <>
              <div className='containerMedication'>
                <div className='undo'>
                  <img src={azatioprina} alt='undo' />
                  <div>
                    <h1>{comp.label}</h1>
                    <p>Micofenolato-mofetil | Micofenolato sódico</p>
                  </div>
                </div>

                <section className='flex justify-center text-center'>
                  <div>
                    <p>Frecuencia</p>
                    <span>8</span>
                    <p>horas</p>
                  </div>
                  <div>
                    <p>Dosis</p>
                    <span>1</span>
                    <p>dosis</p>
                  </div>
                  <div>
                    <p>Duración</p>
                    <span>21</span>
                    <p>días</p>
                  </div>
                </section>

                <span className='font-bold'>Instrucciones</span>
                <p>Cada 8 horas debe tomar una dosis, luego de la comida. </p>
                <div className='buttonOk'>
                  <button onClick={() => alert("Descargando...")}>
                    Descargar Receta
                  </button>
                </div>
              </div>
              <section className='feedBack'>
                <h3>¿Cómo te sentiste con la comida?</h3>
                <div className='feedBackImgs'>
                  <img src={muyBien} alt='Muy bien' />
                  <img src={normal} alt='Normal' />
                  <img src={mal} alt='Mal' />
                </div>
                <p>¿Por qué te sentiste así?</p>
                <textarea name='text' id='text'></textarea>
                <div className='feedBackButtons'>
                  <button>Cancelar</button>
                  <button>Confirmar</button>
                </div>
              </section>
            </>
          )}
        </div>
      ))}
    </article>
  );
};

PlanMedication.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PlanMedication;

// Dinamico
// import PropTypes from "prop-types";
// import { useContext, useEffect, useState } from "react";
// import arrowRight from "../../../../Assets/Imgs/arrowOrange.svg";
// import undo from "../../../../Assets/Imgs/undo.png";
// import "./plans.css";
// import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
// import azatioprina from "../../../../Assets/Imgs/azatioprina.png";
// import muyBien from "../../../../Assets/Imgs/muyBien.png";
// import normal from "../../../../Assets/Imgs/normal.png";
// import mal from "../../../../Assets/Imgs/mal.png";
// import DoctorContext from "../../../../context/DoctorContext";

// const PlanMedication = () => {
//   const [isOpen, setIsOpen] = useState([]);
//   const { fetchPatientById, authData } = useContext(DoctorContext);
//   const [patientData, setPatientData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadPatientData = async () => {
//       if (authData) {
//         try {
//           const data = await fetchPatientById(authData.id);
//           setPatientData(data.patient.treatments);
//           setIsOpen(Array(data.patient.treatments.length).fill(false));
//           setError(null);
//         } catch (error) {
//           setError(error.message);
//           setPatientData([]);
//         }
//       }
//     };

//     loadPatientData();
//   }, [authData, fetchPatientById]);

//   const toggleDropdown = (index) => {
//     setIsOpen((prevState) => {
//       const newState = [...prevState];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };

//   return (
//     <article>
//       {patientData.length > 0 ? (
//         patientData.map((treatment, index) => (
//           <div key={index}>
//             <button
//               className='option bg-white font-bold flex justify-between p-2'
//               onClick={() => toggleDropdown(index)}
//             >
//               {treatment.treatmentName}
//               <img
//                 src={arrowRight}
//                 alt='arrow'
//                 className={`w-4 h-6  ml-4 ${
//                   isOpen[index] ? "arrow-rotate" : ""
//                 }`}
//               />
//             </button>
//             {isOpen[index] && (
//               <div className='containerMedication'>
//                 {treatment.medicalPrescriptions.map((prescription) => (
//                   <div
//                     key={prescription.id}
//                     className='flex flex-col border-b-4 mb-4'
//                   >
//                     <div className='flex items-center gap-5 font-bold text-orangeColor'>
//                       <img src={azatioprina} alt='Muy bien' />

//                       <h1>{prescription.medication.medicationName}</h1>
//                     </div>

//                     <section className='flex justify-center text-center'>
//                       <div>
//                         <p>Frecuencia</p>
//                         <p>{prescription.doseFrequency}</p>
//                       </div>
//                       <div>
//                         <p>Dosis</p>
//                         <p>{prescription.doseSize}</p>
//                       </div>
//                     </section>

//                     <span className='font-bold'>Instrucciones</span>
//                     <p>{prescription.indications}</p>
//                     <div className='buttonOk mb-5'>
//                       <button onClick={() => alert("Descargando...")}>
//                         Descargar Receta
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No hay tratamientos disponibles</p>
//       )}
//       {error && <p>Error: {error}</p>}
//     </article>
//   );
// };

// PlanMedication.propTypes = {
//   type: PropTypes.string.isRequired,
// };

// export default PlanMedication;

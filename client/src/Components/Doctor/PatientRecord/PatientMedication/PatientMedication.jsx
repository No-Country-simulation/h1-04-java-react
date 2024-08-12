/* eslint-disable react/prop-types */
import { useState } from "react";
import DoctorHeader from "../../DoctorHeader/DoctorHeader";
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import "./patientMedication.css";

const PatientMedication = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const medications = [
    "Nombre Medicacion 1",
    "Nombre Medicacion 2",
    "Nombre Medicacion 3",
    "Nombre Medicacion 4",
  ];

  const ViewPopUp = ({ name }) => (
    <article className='viewPopUpPatientMedication'>
      <div className='popUpContentPatientMedication'>
        <p>(se esta haciendo esta función)</p>
        <h2>Editar {name}?</h2>
        <textarea name='edit' id='edit'></textarea>
        <button
          onClick={() => setIsPopUpVisible(false)}
          className='buttonContinue'
        >
          Listo
        </button>
      </div>
    </article>
  );

  return (
    <>
      <section className={` ${isPopUpVisible ? "blurred" : ""}`}>
        <DoctorHeader text={"Estudios"} />

        {medications.map((medication, index) => (
          <div
            key={index}
            className='shadow-lg bg-white p-5 rounded-md mb-5'
            style={{ border: "1px solid #CCCBCB" }}
          >
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => handleDropdown(index)}
            >
              <p>{medication}</p>
              <img
                src={arrowRight}
                alt='arrow'
                className={`w-6 h-6 ml-4 ${
                  openIndex === index ? "more-arrow-rotate" : "arrow-rotate"
                }`}
              />
            </div>
            {openIndex === index && (
              <div>
                <p className='mt-5'>
                  Adherencia - 60% Frecuencia Dosis Tamaño
                  <br /> <br />
                  Instrucciones Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
                <div className='containerButtonEdit'>
                  <button
                    onClick={() => {
                      setIsPopUpVisible(true);
                      setSelectedExercise(medication);
                    }}
                    className='buttonEdit'
                  >
                    Editar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        <button className='buttonContinue'>Continue</button>
      </section>
      {isPopUpVisible && selectedExercise && (
        <ViewPopUp name={selectedExercise} />
      )}
    </>
  );
};

export default PatientMedication;

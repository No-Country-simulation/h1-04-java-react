import PropTypes from "prop-types";
import { useState } from "react";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import "./plans.css";

const optionsTreat = [
  { label: "Diagnóstico" },
  { label: "Tratamiento Médico" },
  { label: "Tratamiento Psicológico" },
  { label: "Medicación" },
  { label: "Laboratorio/Estudios" },
];

const PlanClinical = () => {
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
            className='flex justify-between p-4 optionGreen'
            onClick={() => toggleDropdown(index)}
          >
            {comp.label}
            <img
              src={arrowOrange}
              alt='arrow'
              className={`w-4 h-6 ml-4 imageGreen ${
                isOpen[index]
                  ? "arrow-rotate-treatment"
                  : "more-more-arrow-rotate"
              }`}
            />
          </button>
          {isOpen[index] && (
            <div className='containerInsideContent'>
              <h1>{comp.label}</h1>
              <h3>Insuficiencia Renal Crónica</h3>
              <br />
              <p>
                La  enfermedad renal crónica o insuficiencia renal crónica se
                diagnostica mediante la medida en una muestra de sangre de los
                niveles de creatinina y de urea o BUN, que son las principales
                toxinas que eliminan nuestros riñones. Además, se realizan
                analíticas de la orina para conocer exactamente la cantidad y la
                calidad de orina que se elimina. Con estos resultados, se
                calcula el porcentaje global de funcionamiento de los riñones
                (Filtrado Glomerular (FG)) que va a determinar el grado de su
                insuficiencia renal.{" "}
              </p>
            </div>
          )}
        </div>
      ))}
    </article>
  );
};

PlanClinical.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PlanClinical;

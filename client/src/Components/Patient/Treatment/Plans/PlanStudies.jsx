import { useState } from "react";
import PropTypes from "prop-types";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import "./plans.css";
import Turns from "../../Turn/Turns";

const optionsTreat = [
  { label: "Laboratorios" },
  { label: "Diagnostico por imagenes" },
  { label: "Estudio Complementarios" }
];

const contentMap = {
  'indicaciones': {
    title: "Indicaciones",
    sample: "Indicaciones",
    instructions: `
      Aquí van las instrucciones específicas para Indicaciones.
      <br /><br />
      Higienizar genitales con agua y jabón cuidando de limpiar especialmente la región del glande retirando el prepucio.
      Deseche el primer chorro de orina y proceda a recolectar el resto en un recipiente estéril. Cerrar el frasco.
      <br /><br />
      Cuándo debo entregar la muestra:
      <br />
      - Si le solicitaron únicamente Urocultivo, la muestra puede guardarse en la heladera como máximo 24 h.
      <br />
      - Si le solicitan también Orina Completa, la muestra debe remitirse al laboratorio dentro de las 2 h de recolectada.
    `
  }
};

const renderTurns = () => (
  <div className="mt-5">
    <Turns
      key={1}
      doctor={"Juan Torres"}
      time={"9:00 hs."}
      href={"/view-turn"}
      type={"Turno al Médico: Control"}
    />
  </div>
);

const PlanStudies = () => {
  const [dropdownState, setDropdownState] = useState(optionsTreat.reduce((acc, _, index) => ({
    ...acc,
    [index]: { isOpen: false, activeButton: 'turno' }
  }), {})
  );

  const toggleDropdown = (index) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [index]: { ...prevState[index], isOpen: !prevState[index].isOpen }
    }));
  };

  const handleButtonClick = (index, button) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [index]: { ...prevState[index], activeButton: button }
    }));
  };


  return (
    <article>
      {optionsTreat.map((comp, index) => {
        const { isOpen, activeButton } = dropdownState[index] || {};

        return (
          <div key={index}>
            <button className='flex justify-between p-4 optionGreen' onClick={() => toggleDropdown(index)}>
              {comp.label}
              <img src={arrowOrange} alt='arrow' className={`w-4 h-6 ml-4 imageGreen ${isOpen ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
            </button>
            {isOpen && (
              <div className="containerInsideContent">
                <article className="buttonsInsideContent">
                  <button className={activeButton === 'turno' ? 'buttonsInsideContentSelected' : ''}
                    onClick={() => handleButtonClick(index, 'turno')}>
                    Turno
                  </button>
                  <button className={activeButton === 'indicaciones' ? 'buttonsInsideContentSelected' : ''}
                    onClick={() => handleButtonClick(index, 'indicaciones')}>
                    Indicaciones
                  </button>
                </article>
                
                <article className="containerContent">
                  {activeButton === 'turno' ? (
                    renderTurns()
                  ) : (
                    contentMap[activeButton] && (
                      <>
                        <h2>{contentMap[activeButton].title}</h2>
                        <h3>{contentMap[activeButton].sample}</h3>
                        <p dangerouslySetInnerHTML={{ __html: contentMap[activeButton].instructions }} />
                      </>
                    )
                  )}
                </article>
              </div>
            )}
          </div>
        );
      })}
    </article>
  );
};

PlanStudies.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PlanStudies;
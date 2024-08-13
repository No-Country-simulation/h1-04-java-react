import { useState } from "react";
import PropTypes from "prop-types";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import "./plans.css";

const optionsTreat = [
  { label: "Laboratorios" },
  { label: "Diagnostico por imagenes" },
  { label: "Estudio Complementarios" }
];

const contentMap = {
  'turno': {
    title: "Orina Completa",
    sample: "Orina",
    instructions: `
      Indicaciones:
      <br />
      Recolectar la primera orina de la mañana o una muestra con una retención ideal de 4 h y un mínimo de 2 h de retención.
      <br /><br />
      Importante:
      <br />
      La muestra debe obtenerse antes de iniciar la toma de antibióticos.
      <br /><br />
      Procedimiento:
      <br />
      Lavarse las manos con agua y jabón antes de tomar la muestra.
      <br /><br />
      Mujeres:
      <br />
      Higienizar genitales con agua y jabón haciendo espuma y enjuagando bien, luego secar con una toalla limpia.
      Colocar un tapón vaginal (tampón, gasa o algodón) en la entrada de la vagina. Una vez colocado, proceda a tomar la muestra de orina, para ello deseche el primer chorro de orina y luego recolectar el resto en un recipiente estéril. Cerrar el frasco, retirar el tapón vaginal.
      En caso de solicitarle Orina Completa y esté cursando el período menstrual, debe esperar 72 h de finalizado el período para poder recolectar la muestra.
      <br /><br />
      Hombres:
      <br />
      Higienizar genitales con agua y jabón cuidando de limpiar especialmente la región del glande retirando el prepucio.
      Deseche el primer chorro de orina y proceda a recolectar el resto en un recipiente estéril. Cerrar el frasco.
      <br /><br />
      Cuándo debo entregar la muestra:
      <br />
      - Si le solicitaron únicamente Urocultivo, la muestra puede guardarse en la heladera como máximo 24 h.
      <br />
      - Si le solicitan también Orina Completa, la muestra debe remitirse al laboratorio dentro de las 2 h de recolectada.
    `
  },
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
      { optionsTreat.map((comp, index) => {
        const { isOpen, activeButton } = dropdownState[index] || {};
        const { title, sample, instructions } = contentMap[activeButton] || {};
        
        return (
          <div key={index}>
            <button className='flex justify-between p-4 optionGreen' onClick={() => toggleDropdown(index)}>
              {comp.label}
              <img src={arrowOrange} alt='arrow' className={`w-4 h-6 ml-4 imageGreen ${isOpen ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
            </button>
            { isOpen && (
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
                  <h2>{title}</h2>
                  <h3>Muestra: {sample}</h3>
                  <p dangerouslySetInnerHTML={{ __html: instructions }} />
                </article>
              </div>
            ) }
          </div>
        );
      }) }
    </article>
  );
};

PlanStudies.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PlanStudies;
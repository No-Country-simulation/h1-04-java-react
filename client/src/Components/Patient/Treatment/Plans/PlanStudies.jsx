import { useState } from "react";
import PropTypes from "prop-types"
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import imageStudios from "../../../../Assets/Imgs/study.svg"
import question from "../../../../Assets/Imgs/question.png"
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import "./plans.css"


const optionsTreat = [
    { label: "Laboratorios" },
    { label: "Diagnostico por imagenes" },
    { label: "Estudio Complementarios" },
    { label: "Turnos" }
];

const PlanStudies = () => {
    const [isOpen, setIsOpen] = useState(Array(optionsTreat.length).fill(false));
    const [showLastComponent, setShowLastComponent] = useState(Array(optionsTreat.length).fill(false));

    const toggleDropdown = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const closeDropdown = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        setShowLastComponent(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    const handleLastComponentClick = (index) => {
        setShowLastComponent(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const LastComponent = (index) =>{
        return (
            <div className="containerInsideContent">
                <h1>Orina Completa</h1>
                <p>Muestra: orina</p>
                <br />
                <p>
                    Indicaciones: Recolectar la primera orina de la mañana o una muestra con una retención ideal de 4 h y un mínimo de 2 h de retención.
                    <br /> <br />
                    Importante: La muestra debe obtenerse antes de iniciar la toma de antibióticos.
                    <br /> <br />
                    Procedimiento: Lavarse las manos con agua y jabón antes de tomar la muestra.
                    <br /> <br />
                    Mujeres:
                    <br />
                    Higienizar genitales con agua y jabón haciendo espuma y enjuagando bien, luego secar con una toalla limpia.
                    <br />
                    Colocar un tapón vaginal (tampón, gasa o algodón) en la entrada de la vagina. Una vez colocado, proceda a tomar la muestra de orina, para ello deseche el primer chorro de orina y luego recolectar el resto en un recipiente estéril. Cerrar el frasco, retirar el tapón vaginal.
                    <br />
                    En caso de solicitarle Orina Completa y esté cursando el período menstrual, debe esperar 72 h de finalizado el período para poder recolectar la muestra.
                    <br />
                    Hombres:
                    <br />
                    Higienizar genitales con agua y jabón cuidando de limpiar especialmente la región del glande retirando el prepucio.
                    <br />
                    Deseche el primer chorro de orina y proceda a recolectar el resto en un recipiente estéril. Cerrar el frasco.
                    <br /><br />
                    Cuándo debo entregar la muestra:
                    <br />
                    - Si le solicitaron únicamente Urocultivo, la muestra puede guardarse en la heladera como máximo 24 h.
                    <br />
                    - Si le solicitan también Orina Completa, la muestra debe remitirse al laboratorio dentro de las 2 h de recolectada.
                </p>
                <div className="buttonOk">
                    <button onClick={() => closeDropdown(index)}>Entendido</button>
                </div>
            </div>
        )
    }


    return (
        <article>
            { optionsTreat.map((comp, index) => (
                <div key={index}>
                    <button className="option font-bold flex justify-between p-2" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 ${isOpen[index] ? 'more-more-arrow-rotate' : 'more-arrow-rotate'}`} />
                    </button>
                    {isOpen[index] && (
                        <>
                        <div key={index} className="detailsContainer containerInsideContentStudies">
                            <img src={imageStudios} alt="imgProduct" />
                            <div className="detailsContentWrapper">
                                <div className="detailsContent">
                                    <p>LACE Laboratorios</p>
                                    <button onClick={() => handleLastComponentClick(index)}>
                                        <img src={arrowRight} alt=">" id="detailsContentImg" />
                                    </button>
                                </div>
                                <div className="detailsDescription">
                                    <p>Orina Completa |  8:30 hs. </p>
                                    <img src={question} alt="question" />
                                </div>
                            </div>
                        </div>
                            { showLastComponent[index] && LastComponent(index) }
                        </>
                    )}
                </div>
            )) }
        </article>
    )
}

PlanStudies.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanStudies
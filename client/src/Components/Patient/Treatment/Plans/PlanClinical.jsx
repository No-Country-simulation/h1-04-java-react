import PropTypes from "prop-types"
import { useState } from "react";
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import imageExample from "../../../../Assets/Imgs/section2-img1.png"
import "./plans.css";

const optionsTreat = [
    { label: "Diagnóstico" },
    { label: "Tratamiento Médico" },
    { label: "Tratamiento Psicológico" },
    { label: "Tratamiento Fisioterapéutico" },
    { label: "Trabajo Social" },
    { label: "Medicación" },
    { label: "Laboratorio/Estudios" }
];

const PlanClinical = () => {
    const [isOpen, setIsOpen] = useState(Array(optionsTreat.length).fill(false));

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
    };

    return (
        <article>
            { optionsTreat.map((comp, index) => (
                <div key={index}>
                    <button className="option font-bold flex justify-between p-2" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowRight} alt="arrow" className={`w-6 h-6 ml-4 ${isOpen[index] ? 'arrow-rotate' : ''}`} />
                    </button>
                    { isOpen[index] && (
                        <div className="containerInsideContent">
                            <h1>{comp.label}</h1>
                            <p>{comp.label}</p>
                            <br />
                            <p>
                                How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphsHow to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs.
                            </p>
                            <img src={imageExample} alt="image Example" />
                            <div className="buttonOk">
                                <button onClick={() => closeDropdown(index)}>Entendido</button>
                            </div>
                        </div>
                    ) }
                </div>
            )) }
        </article>
    )
}

PlanClinical.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanClinical
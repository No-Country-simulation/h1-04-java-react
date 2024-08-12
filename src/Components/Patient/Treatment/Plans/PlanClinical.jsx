import PropTypes from "prop-types"
import { useState } from "react";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import "./plans.css";

const optionsTreat = [
    { label: "Diagnóstico" },
    { label: "Tratamiento Médico" },
    { label: "Tratamiento Psicológico" },
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

    return (
        <article>
            { optionsTreat.map((comp, index) => (
                <div key={index}>
                    <button className="flex justify-between p-4 optionGreen" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageGreen ${isOpen[index] ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
                    </button>
                    { isOpen[index] && (
                        <div className="containerInsideContent">
                            <h1>{comp.label}</h1>
                            <h3>Insuficiencia Renal Crónica</h3>
                            <br />
                            <p>How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphsHow to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, </p>
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
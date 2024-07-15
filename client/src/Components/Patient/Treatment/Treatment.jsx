import { useLocation, useNavigate } from "react-router-dom";
import { treatmentData } from "./data.js"
import { useState } from "react";
import arrowLeft from "../../../Assets/Imgs/arrowLeft.png"
import arrowRight from "../../../Assets/Imgs/arrowRight.png"
import PlanNutrition from "./Plans/PlanNutrition.jsx";
import PlanGim from "./Plans/PlanGim.jsx";
import PlanClinical from "./Plans/PlanClinical.jsx";
import PlanMedication from "./Plans/PlanMedication.jsx";
import PlanPsychology from "./Plans/PlanPsychology.jsx";
import PlanSocial from "./Plans/PlanSocial.jsx";
import PlanPhysiotherapy from "./Plans/PlanPhysiotherapy.jsx";
import PlanOthers from "./Plans/PlanOthers.jsx";
import "./treatment.css"


const componentsMap = {
    '/treatment-nutrition': PlanNutrition,
    '/treatment-physical-activity': PlanGim,
    '/treatment-clinical-history': PlanClinical,
    '/treatment-medication': PlanMedication,
    '/treatment-psychology': PlanPsychology,
    '/treatment-social-work': PlanSocial,
    '/treatment-physiotherapy': PlanPhysiotherapy,
    '/treatment-others': PlanOthers,
};


const Treatment = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { image, title, buttons } = treatmentData[location.pathname] || {};
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleComponent = (index) => {
        setSelectedButtonIndex(index);
    };

    const handleNext = () => {
        setSelectedButtonIndex((prevIndex) => Math.min(prevIndex + 1, buttons.length - 1));
    };

    const handlePrevious = () => {
        setSelectedButtonIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const SelectedComponent = selectedButtonIndex !== null ? componentsMap[location.pathname] : null;
    const selectedButton = selectedButtonIndex !== null ? buttons[selectedButtonIndex] : null;


    return (
        <section>
            <div className="titleContainer">
                {image && <img src={image} alt={title} />}
                <h1>{title}</h1>
            </div>
            { !SelectedComponent ? (
                <>
                <section className="optionsContainer">
                    { buttons && buttons.map((but, index) => (
                        <button key={index} className="bg-stone-300 font-bold flex justify-between p-2 m-3" onClick={() => handleComponent(index)}>
                            { but.label }
                        </button>
                    )) }
                </section>
                <button onClick={()=> navigate(-1)}>
                    <img src={arrowLeft} alt="back" />
                </button>
                </>
            ) : (
                <section>
                    <SelectedComponent type={selectedButton.label} />
                    <div className="navigationButtons">
                        <button onClick={handlePrevious} disabled={selectedButtonIndex === 0}>
                            <img src={arrowLeft} alt="previous" />
                            <p>Regresar</p>
                        </button>
                        <button onClick={handleNext} disabled={selectedButtonIndex === buttons.length - 1}>
                            <img src={arrowRight} alt="next" />
                            <p>Siguiente Comida</p>
                        </button>
                    </div>
                </section>
            ) }
        </section>
    )
}

export default Treatment
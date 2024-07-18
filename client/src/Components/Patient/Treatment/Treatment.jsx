import { useLocation, useNavigate } from "react-router-dom";
import { treatmentData } from "./data.js"
import { useState } from "react";
import arrowLeft from "../../../Assets/Imgs/arrowLeft.png"
import arrowRight from "../../../Assets/Imgs/arrowRight.png"
import PlanTreatment from "./Plans/PlanTreatment.jsx";
import PlanStudies from "./Plans/PlanStudies.jsx";
import PlanNutrition from "./Plans/PlanNutrition/PlanNutrition.jsx";
import PlanGim from "./Plans/PlanGim.jsx";
import PlanClinical from "./Plans/PlanClinical.jsx";
import PlanMedication from "./Plans/PlanMedication.jsx";
import PlanPsychology from "./Plans/PlanPsychology.jsx";
import PlanSocial from "./Plans/PlanSocial.jsx";
import PlanPhysiotherapy from "./Plans/PlanPhysiotherapy.jsx";
import PlanOthers from "./Plans/PlanOthers.jsx";
import download from "../../../Assets/Imgs/download.png"
import "./treatment.css"


const componentsMap = {
    '/treatment-treatment': PlanTreatment,
    '/treatment-studies': PlanStudies,
    '/treatment-nutrition': PlanNutrition,
    '/treatment-physical-activity': PlanGim,
    '/treatment-medication': PlanMedication,
    '/treatment-clinical-history': PlanClinical,
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
        <section className="container">
            <div className="titleContainer">
                {image && <img src={image} alt={title} />}
                <h1>{title}</h1>
            </div>
            <section className="planes">
                <div>
                    <h2>Plan de {title}</h2>
                    <p>Plan personalizado</p>
                </div>
                <img src={download} alt="download" />{/* Descargar PDF o algo */}
            </section>
            { !SelectedComponent ? (
                <>
                <section className="optionsContainer">
                    { buttons && buttons.map((but, index) => (
                        <button key={index} className="option bg-stone-300 font-bold flex justify-between p-2" onClick={() => handleComponent(index)}>
                            { but.label }
                            <img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" />
                        </button>
                    )) }
                </section>
                <button className="back" onClick={()=> navigate(-1)}>
                    <img src={arrowLeft} alt="back" />
                </button>
                </>
            ) : (
                <article className="containerComponents">
                    <SelectedComponent type={selectedButton.label} />
                    { location.pathname == '/treatment-nutrition' || location.pathname == '/treatment-physical-activity' ? (
                        <div className="navigationButtons">
                            <button onClick={handleNext} disabled={selectedButtonIndex === buttons.length - 1}>
                                <p>Siguiente Comida</p>
                                <img src={arrowRight} alt="next" />
                            </button>
                            <button onClick={handlePrevious} disabled={selectedButtonIndex === 0}>
                                <p>Regresar</p>
                                <img src={arrowLeft} alt="previous" />
                            </button>
                        </div>
                        ) : null }
                </article>
            ) }
        </section>
    )
}

export default Treatment
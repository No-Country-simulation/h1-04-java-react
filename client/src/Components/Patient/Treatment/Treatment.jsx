import { useLocation, useNavigate } from "react-router-dom";
import { treatmentData } from "./data.js";
import { useState } from "react";
import anotherArrowLeft from "../../../Assets/Imgs/otraArrowLeft.png";
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
import download from "../../../Assets/Imgs/download.png";
import arrowOrange from "../../../Assets/Imgs/arrowOrange.svg";
import "./treatment.css";

const componentsMap = {
  "/treatment-treatment": PlanTreatment,
  "/treatment-studies": PlanStudies,
  "/treatment-nutrition": PlanNutrition,
  "/treatment-physical-activity": PlanGim,
  "/treatment-clinical-history": PlanClinical,
  "/treatment-psychology": PlanPsychology,
  "/treatment-social-work": PlanSocial,
  "/treatment-physiotherapy": PlanPhysiotherapy,
  "/treatment-others": PlanOthers,
};

const Treatment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, buttons } = treatmentData[location.pathname] || {};
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleComponent = (index) => {
    setSelectedButtonIndex(index);
  };

  const SelectedComponent =
    selectedButtonIndex !== null &&
    location.pathname !== "/treatment-medication"
      ? componentsMap[location.pathname]
      : null;

  const selectedButton =
    selectedButtonIndex !== null ? buttons[selectedButtonIndex] : null;

  return (
    <section className='containerBigTreatments'>
      <div className='titleContainer'>
        {image && <img src={image} alt={title} />}
        <h1>{title}</h1>
      </div>
      <article className='planes'>
        <div>
          <h2>Plan de {title}</h2>
          <p>Plan personalizado</p>
        </div>
        <img src={download} alt='download' /> {/* Descargar PDF o algo */}
      </article>
      {location.pathname !== "/treatment-medication" && !SelectedComponent ? (
        <article className='optionsContainer'>
          { buttons &&
            buttons.map((but, index) => (
              <button
                key={index}
                className='option font-bold flex justify-between p-2'
                onClick={() => handleComponent(index)}
              >
                {but.label}
                <img
                  src={arrowOrange}
                  alt='arrow'
                  className='w-4 h-6 ml-4 more-arrow-rotate'
                />
              </button>
            )) }
        </article>
      ) : (
        <article className='containerComponents'>
          {location.pathname === "/treatment-medication" ? (
            <PlanMedication type={selectedButton?.label} />
          ) : (
            <SelectedComponent type={selectedButton?.label} />
          )}
        </article>
      )}
      <div className='backContainer'>
        <button className='back' onClick={() => navigate(-1)}>
          <img src={anotherArrowLeft} alt='back' />
        </button>
      </div>
    </section>
  );
};

export default Treatment;

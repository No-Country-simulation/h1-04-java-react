import { useLocation } from "react-router-dom";
import { treatmentData } from "./data.js";
import { useState } from "react";
import PlanTreatment from "./Plans/PlanTreatment.jsx";
import PlanStudies from "./Plans/PlanStudies.jsx";
import PlanNutrition from "./Plans/PlanNutrition/PlanNutrition.jsx";
import PlanGim from "./Plans/PlanGim.jsx";
import PlanClinical from "./Plans/PlanClinical.jsx";
import PlanMedication from "./Plans/PlanMedication.jsx";
import arrowOrange from "../../../Assets/Imgs/arrowOrange.svg";
import PatientHeader from "../PatientHeader/PatientHeader.jsx";
import CVFileTreatment from '../../../Assets/files/tratamiento.pdf';
import CVFileClinicalHistory from '../../../Assets/files/receta.pdf';
import CVFileStudies from '../../../Assets/files/receta.pdf';
import CVFileMedication from '../../../Assets/files/receta.pdf';
import CVFilePhysicalActivity from '../../../Assets/files/receta.pdf';
import CVFileNutrition from '../../../Assets/files/receta.pdf';
import ButtonDownload from "./ButtonDownload/ButtonDownload.jsx";
import download from "../../../Assets/Imgs/download.png";
import "./treatment.css";

const componentsMap = {
  "/treatment-treatment": PlanTreatment,
  "/treatment-clinical-history": PlanClinical,
  "/treatment-studies": PlanStudies,
  "/treatment-medication": PlanMedication,
  "/treatment-physical-activity": PlanGim,
  "/treatment-nutrition": PlanNutrition,
};

const Treatment = () => {
  const location = useLocation();
  const { title, buttons, plan } = treatmentData[location.pathname] || {};
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleComponent = (index) => {
    setSelectedButtonIndex(index);
  };

  const SelectedComponent =
    selectedButtonIndex !== null
      ? componentsMap[location.pathname]
      : null;

  const selectedButton =
    selectedButtonIndex !== null ? buttons[selectedButtonIndex] : null;

  const isOptionGreen =
    location.pathname === "/treatment-treatment" ||
    location.pathname === "/treatment-clinical-history" ||
    location.pathname === "/treatment-studies" ||
    location.pathname === "/treatment-medication"

  const isOptionPink = location.pathname === "/treatment-nutrition" 

  const isOptionOrange = location.pathname === "/treatment-physical-activity" 

  return (
    <section className='containerBigTreatments'>
      <div className='titleContainer'>
        <PatientHeader text={title} />
      </div>
      
      <article className='planes'>
        <div>
          <h2>{title}</h2>
          <p>{plan}</p>
        </div>
        { location.pathname === "/treatment-treatment" && <ButtonDownload image={download} CVFile={CVFileTreatment} text="treatment" /> }
        { location.pathname === "/treatment-clinical-history" && <ButtonDownload image={download} CVFile={CVFileClinicalHistory} text="clinical history" /> }
        { location.pathname === "/treatment-studies" && <ButtonDownload image={download} CVFile={CVFileStudies} text="studies" /> }
        { location.pathname === "/treatment-medication" && <ButtonDownload image={download} CVFile={CVFileMedication} text="medication" /> }
        { location.pathname === "/treatment-physical-activity" && <ButtonDownload image={download} CVFile={CVFilePhysicalActivity} text="physical activity" /> }
        { location.pathname === "/treatment-nutrition" && <ButtonDownload image={download} CVFile={CVFileNutrition} text="nutrition" /> }
      </article>
      
      { !SelectedComponent ? (
        <article className='optionsContainer'>
          { buttons &&
            buttons.map((but, index) => (
              <button key={index} onClick={() => handleComponent(index)}
                className={`flex justify-between p-4 ${ isOptionGreen ? 'optionGreen' :
                  isOptionPink ? 'optionPink' :
                  isOptionOrange ? 'optionOrange' : ''
                }`}
              >
                {but.label}
                <img src={arrowOrange} alt='arrow' className={`w-4 h-6 ml-4 more-more-arrow-rotate ${ isOptionGreen ? 'imageGreen' :
                    isOptionPink ? 'imagePink' :
                    isOptionOrange ? 'imageOrange' : ''
                  }`}
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
      ) }
    </section>
  );
};

export default Treatment;
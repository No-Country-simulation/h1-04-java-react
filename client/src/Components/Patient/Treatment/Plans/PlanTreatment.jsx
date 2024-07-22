import { useState } from "react";
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import imageExample from "../../../../Assets/Imgs/imageExample.png"
import "./plans.css";

const optionsTreat = [
    { label: "Indicaciones" },
    { label: "Precauciones" },
    { label: "Comunicación" }
];

const PlanTreatment = () => {
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
                    <button className="option bg-stone-300 font-bold flex justify-between p-2" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowRight} alt="arrow" className={`w-6 h-6 ml-4 ${isOpen[index] ? 'arrow-rotate' : ''}`} />
                    </button>
                    { isOpen[index] && (
                        <div className="containerInsideContent">
                            <h1>{comp.label}</h1>
                            <p>Cuidados previos al tratamiento</p>
                            <br />
                            <p>
                                How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphsHow to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs.
                                <br/><br/>
                                Tipo de cita
                                <br/>
                                How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs.
                                <br/><br/>
                                Tipo de cita
                                <br/>
                                How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs,
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
    );
};

export default PlanTreatment;
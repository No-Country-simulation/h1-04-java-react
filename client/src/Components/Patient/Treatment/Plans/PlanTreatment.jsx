import { useState } from "react";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import muyBien from "../../../../Assets/Imgs/muyBien.svg"
import normal from "../../../../Assets/Imgs/normal.svg"
import mal from "../../../../Assets/Imgs/mal.svg"
import "./plans.css";

const optionsTreat = [
    { label: "Indicaciones - Precauciones" },
    { label: "Comunicación" }
];

const PlanTreatment = () => {
    const [isOpen, setIsOpen] = useState(Array(optionsTreat.length).fill(false));
    const [activeButton, setActiveButton] = useState(null);

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

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <article>
            { optionsTreat.map((comp, index) => (
                <div key={index}>
                    <button  className="flex justify-between p-4 optionGreen" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageGreen ${isOpen[index] ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
                    </button>
                    { isOpen[index] && (
                        <div className="containerInsideContent">
                            <article className="buttonsInsideContent">
                                <button
                                    className={activeButton === 'turno' ? 'buttonsInsideContentSelected' : ''}
                                    onClick={() => handleButtonClick('turno')}>
                                    Turno
                                </button>
                                <button
                                    className={activeButton === 'indicaciones' ? 'buttonsInsideContentSelected' : ''}
                                    onClick={() => handleButtonClick('indicaciones')}>
                                    Indicaciones
                                </button>
                            </article>
                            
                            <article className="containerContent">
                                <h2>Diálisis Peritoneal</h2>
                                <h3>Tratamiento</h3>
                                <p>
                                    Indicaciones:
                                    <br />
                                    How to install dependencies and structure your app. Styles for headings, paragraphs, lists.
                                    <br /><br />
                                    Precauciones:
                                    <br />
                                    How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphsHow to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc
                                    </p>
                            </article>
                            
                            <section className='feedBack'>
                                <h3>¿Cómo te sentiste con la comida?</h3>
                                <div className='feedBackImgs'>
                                    <img src={muyBien} alt='Muy bien' />
                                    <img src={normal} alt='Normal' />
                                    <img src={mal} alt='Mal' />
                                </div>
                                <p>¿Por qué te sentiste así?</p>
                                <textarea name='text' id='text'></textarea>
                                <div className='feedBackButton'>
                                    <button onClick={() => closeDropdown(index)}>Confirmar</button>
                                </div>
                            </section>
                        </div>
                    ) }
                </div>
            )) }
        </article>
    );
};

export default PlanTreatment;
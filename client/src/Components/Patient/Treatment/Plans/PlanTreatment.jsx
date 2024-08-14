import { useState } from "react";
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import muyBien from "../../../../Assets/Imgs/muyBien.svg"
import normal from "../../../../Assets/Imgs/normal.svg"
import mal from "../../../../Assets/Imgs/mal.svg"
import Turns from "../../Turn/Turns";
import "./plans.css";

const optionsTreat = [
    { label: "Indicaciones _ Precauciones" },
    { label: "Comunicación" }
];

const contentMap = {
    'indicaciones': {
        title: "Diálisis Peritoneal",
        sample: "Tratamiento",
        instructions: `
            Indicaciones:
            <br />
            How to install dependencies and structure your app. Styles for headings, paragraphs, lists.
            <br /><br />
            Precauciones:
            <br />
            How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphsHow to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc
        `
    }
};

const renderTurns = () => (
    <div className="mt-5">
        <Turns
            key={1}
            doctor={"Juan Torres"}
            time={"9:00 hs."}
            href={"/view-turn"}
            type={"Turno al Médico: Control"}
        />
    </div>
);

const PlanTreatment = () => {
    const [dropdownState, setDropdownState] = useState(
        optionsTreat.reduce((acc, _, index) => ({
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

    const closeDropdown = (index) => {
        setDropdownState((prevState) => ({
            ...prevState,
            [index]: { ...prevState[index], isOpen: false }
        }));
    };


    return (
        <article>
            {optionsTreat.map((comp, index) => {
                const { isOpen, activeButton } = dropdownState[index] || {};

                return (
                    <div key={index}>
                        <button className="flex justify-between p-4 optionGreen" onClick={() => toggleDropdown(index)}>
                            {comp.label}
                            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageGreen ${isOpen ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
                        </button>
                        {isOpen && (
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
                                    {activeButton === 'turno' ? (
                                        renderTurns()
                                    ) : (
                                        contentMap[activeButton] && (
                                            <>
                                                <h2>{contentMap[activeButton].title}</h2>
                                                <h3>{contentMap[activeButton].sample}</h3>
                                                <p dangerouslySetInnerHTML={{ __html: contentMap[activeButton].instructions }} />
                                            </>
                                        )
                                    )}
                                </article>

                                <section className='feedBack'>
                                    <h3>¿Cómo te sentiste con el tratamiento médico?</h3>
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
                        )}
                    </div>
                );
            })}
        </article>
    );
};

export default PlanTreatment;
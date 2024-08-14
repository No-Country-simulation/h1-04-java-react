/* eslint-disable react/prop-types */
import { useState } from "react"
import PropTypes from "prop-types"
import muyBien from "../../../../Assets/Imgs/muyBien.png"
import normal from "../../../../Assets/Imgs/normal.png"
import mal from "../../../../Assets/Imgs/mal.png"
import arrowOrange from "../../../../Assets/Imgs/arrowOrange.svg";
import imgExercise from "../../../../Assets/Imgs/imgExercise.png"
import "./plans.css"

const optionsGim = [
    { label: "Lunes" },
    { label: "Martes" },
    { label: "Miércoles" },
    { label: "Jueves" },
    { label: "Viernes" },
    { label: "Extra" }
];

const exercises = [
    {
        id: 1,
        name: "Puente de glúteos con core bag",
        description: `
        Recomendaciones<br/>
        . Acostados boca arriba, pies apoyados en el piso, coloco una core bag en pelvis, elevo la misma realizando el puente.`,
        series: 3,
        reps: 15,
        pause: "1:00 m."
    },
    {
        id: 2,
        name: "Peso muerto rumano",
        description: `
        Recomendaciones<br/>
        . Acostados boca arriba, pies apoyados en el piso, coloco una core bag en pelvis, elevo la misma realizando el puente.`,
        series: 3,
        reps: 15,
        pause: "1:00 m."
    },
    {
        id: 3,
        name: "Press plano con mancuernas",
        description: `
        Recomendaciones<br/>
        . Acostados boca arriba, pies apoyados en el piso, coloco una core bag en pelvis, elevo la misma realizando el puente.`,
        series: 3,
        reps: 12,
        pause: "1:00 m."
    },
    {
        id: 4,
        name: "Empuje con maquina",
        description: `
        Recomendaciones<br/>
        . Acostados boca arriba, pies apoyados en el piso, coloco una core bag en pelvis, elevo la misma realizando el puente.`,
        series: 3,
        reps: 12,
        pause: "1:00 m."
    },
    {
        id: 5,
        name: "Remo UL con polea",
        description: `
        Recomendaciones<br/>
        . Acostados boca arriba, pies apoyados en el piso, coloco una core bag en pelvis, elevo la misma realizando el puente.`,
        series: 3,
        reps: 12,
        pause: "1:00 m."
    }
];


const PlanGim = () => {
    const [isOpen, setIsOpen] = useState(Array(optionsGim.length).fill(false));
    const [detailsOpen, setDetailsOpen] = useState(Array(exercises.length).fill(false));

    const toggleDropdown = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const toggleDetails = (index) => {
        setDetailsOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const closeDropdown = (index) => {
        setIsOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    return (
        <>
            {optionsGim.map((comp, index) => (
                <div key={index} className="containerPlansGim">
                    <button className="flex justify-between p-4 optionOrange" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageOrange ${isOpen[index] ? 'arrow-rotate-treatment' : 'more-more-arrow-rotate'}`} />
                    </button>
                    {isOpen[index] && (
                        <>
                            <section className="exerciseList">
                                {exercises.map((exercise, exerciseIndex) => (
                                    <div key={exerciseIndex} className="exerciseItem">
                                        <button className="flex justify-between items-center p-5 py-1 optionOrange text-blackClear font-medium" onClick={() => toggleDetails(exerciseIndex)} >
                                            {exercise.name}
                                            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imageOrange ${detailsOpen[exerciseIndex]
                                                    ? "arrow-rotate-treatment"
                                                    : "more-more-arrow-rotate"
                                                }`}
                                            />
                                        </button>
                                        { detailsOpen[exerciseIndex] && (
                                            <article className="exerciseDetails">
                                                <span>Indicaciones:</span>
                                                <section className="flex justify-around items-center mb-2 mt-2">
                                                    <p>Series: {exercise.series}</p>
                                                    <p>Reps: {exercise.reps}</p>
                                                    <p>Pausa: {exercise.pause}</p>
                                                </section>
                                                <p dangerouslySetInnerHTML={{ __html: exercise.description }}></p>
                                                <img src={imgExercise} alt={`${exercise.name}`} className="mt-5" />
                                            </article>
                                        ) }
                                    </div>
                                ))}
                            </section>
                            
                            <section className="feedBack">
                                <h3 style={{ color: "#FF8A5B" }}>
                                    ¿Cómo te sentiste con la comida?
                                </h3>
                                <div className="feedBackImgs">
                                    <img src={muyBien} alt="Muy bien" className="imageOrange" />
                                    <img src={normal} alt="Normal" className="imageOrange" />
                                    <img src={mal} alt="Mal" className="imageOrange" />
                                </div>
                                <p style={{ color: "#FF8A5B" }}>¿Por qué te sentiste así?</p>
                                <textarea name="text" id="text"></textarea>
                                <div className="feedBackButton">
                                    <button style={{ backgroundColor: "#FF8A5B" }} onClick={() => closeDropdown(index)}>
                                        Confirmar
                                    </button>
                                </div>
                            </section>
                        </>
                    )}
                </div>
            ))}
        </>
    )
}

PlanGim.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanGim
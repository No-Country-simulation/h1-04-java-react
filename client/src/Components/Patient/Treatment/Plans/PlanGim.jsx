/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import { useState } from "react"
import Week from "../../HomePatient/Weekk"
import muyBien from "../../../../Assets/Imgs/muyBien.png"
import normal from "../../../../Assets/Imgs/normal.png"
import mal from "../../../../Assets/Imgs/mal.png"
import imageExample from "../../../../Assets/Imgs/imageExample.png"
import question from "../../../../Assets/Imgs/question.png"
import "./plans.css"

const PlanGim = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const exercises = [
        { id: 1, name: "Puente de glúteos con core bag", series: 3, reps: 15, pause: "1:00 m." },
        { id: 2, name: "Peso muerto rumano o con piernas estiradas", series: 3, reps: 15, pause: "1:00 m." },
        { id: 3, name: "Press plano con mancuernas", series: 3, reps: 12, pause: "1:00 m." },
        { id: 4, name: "Empuje con maquina", series: 3, reps: 12, pause: "1:00 m." },
        { id: 5, name: "Remo UL con polea", series: 3, reps: 12, pause: "1:00 m." }
    ];

    const ViewPopUp = ({ name }) => (
        <article className="viewPopUp">
            <div className="popUpContent">
                <h2>{name}</h2>
                <p>Acostados boca arriba, pies apoyados en el piso, coloco una corebag en pelvis, elevo la misma realizando el puente.</p>
                <img src={imageExample} alt="image Example" />
                <div className="btn">
                    <button onClick={() => setIsPopUpVisible(false)}>Entendido</button>
                </div>
            </div>
        </article>
    );


    return (
        <article>
            <div className={`mainContainer ${isPopUpVisible ? "blurred" : ""}`}>
                <section className="weekContainer">
                    <Week />
                </section>
                
                <section className="exerciseList">
                    {exercises.map(exercise => (
                        <div key={exercise.id} className="exerciseItem">
                        <p className="exerciseHeader">{exercise.id}</p>
                        <article className="containeExerciser">
                            <div className="exerciseContent">
                                <h2>{exercise.name}</h2>
                                <img src={question} alt="question" onClick={() => {
                                        setIsPopUpVisible(true);
                                        setSelectedExercise(exercise.name);
                                    }} />
                            </div>
                            <div className="exerciseDetails">
                                <p>Series: {exercise.series}</p>
                                <p>Reps: {exercise.reps}</p>
                                <p>Pausa: {exercise.pause}</p>
                            </div>
                        </article>
                        </div>
                    ))}
                </section>
                
                <section className="feedBack">
                    <h3>¿Cómo te sentiste con la comida?</h3>
                    <div className="feedBackImgs">
                        <img src={muyBien} alt="Muy bien" />
                        <img src={normal} alt="Normal" />
                        <img src={mal} alt="Mal" />
                    </div>
                    <p>¿Por qué te sentiste así?</p>
                    <textarea name="text" id="text"></textarea>
                </section>
            </div>
            
            { isPopUpVisible && selectedExercise && <ViewPopUp name={selectedExercise} /> }
        </article>
    )
}

PlanGim.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanGim
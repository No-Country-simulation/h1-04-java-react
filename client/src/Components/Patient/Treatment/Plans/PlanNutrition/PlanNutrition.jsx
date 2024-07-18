import PropTypes from "prop-types"
import Week  from "../../../HomePatient/Weekk.jsx"
import muyBien from "../../../../../Assets/Imgs/muyBien.png"
import normal from "../../../../../Assets/Imgs/normal.png"
import mal from "../../../../../Assets/Imgs/mal.png"
import imgProduct from "../../../../../Assets/Imgs/example.png"
import question from "../../../../../Assets/Imgs/question.png"
import "./planNutrition.css"
import { useState } from "react"

const PlanNutrition = ({ type }) => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const calculatePercentage = (current, total) => {
        return (current / total) * 100;
    };

    const meals = [
        {
            name: "Cafe con leche",
            description: "150 ml: 2 cucharas de café y 1 azúcar",
            calories: 117
        },
        {
            name: "Tostada de pan negro",
            description: "2 raciones, cada ración 20g",
            calories: 117
        },
        {
            name: "Mermelada Light",
            description: "2 cucharitas, cada ración 5g",
            calories: 117
        },
        {
            name: "Jugo Natural de Naranja",
            description: "250 ml",
            calories: 117
        }
    ];


    const ViewPopUp = () => (
        <div className="viewPopUp">
            <div className="popUpContent">
                <h2>Detalles de la comida</h2>
                <p>Aquí puedes poner la información detallada...</p>
                <button onClick={() => setIsPopUpVisible(false)}>Cerrar</button>
            </div>
        </div>
    );


    return (
        <div className="container">
            <div className={`mainContainer ${isPopUpVisible ? "blurred" : ""}`}>
                <article>
                    <section className="weekContainer">
                        <Week />
                    </section>
                    
                    <section>
                        <article className="stats">
                            <div>
                                <p>Carbohidratos</p>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: `${calculatePercentage(154, 204)}%` }}></div>
                                </div>
                                <p>154 g de 204 g</p>
                            </div>
                            <div>
                                <p>Proteínas</p>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: `${calculatePercentage(32, 82)}%` }}></div>
                                </div>
                                <p>31 g de 82 g</p>
                            </div>
                            <div>
                                <p>Grasas</p>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: `${calculatePercentage(43, 54)}%` }}></div>
                                </div>
                                <p>43 g de 54 g</p>
                            </div>
                        </article>
                        
                        <article className="details">
                            <div className="detailsTitle">
                                <p>{ type }</p>
                                <p>387</p>
                            </div>
                            <p className="recommendation">Recomendado: 30% de tu ingesta diaria (503 kcal)</p>
                            
                            {meals.map((meal, index) => (
                                <div key={index} className="detailsContainer">
                                    <img src={imgProduct} alt="imgProduct" />
                                    <div className="detailsContentWrapper">
                                        <div className="detailsContent">
                                            <p>{meal.name}</p>
                                            <p>{meal.calories}</p>
                                        </div>
                                        <div className="detailsDescription">
                                            <p>{meal.description}</p>
                                            <img src={question} alt="question" onClick={() => setIsPopUpVisible(true)} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>
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
                </article>
            </div>
            {isPopUpVisible && <ViewPopUp />}
        </div>
    )
}

PlanNutrition.propTypes = {
    type: PropTypes.string.isRequired
};

export default PlanNutrition
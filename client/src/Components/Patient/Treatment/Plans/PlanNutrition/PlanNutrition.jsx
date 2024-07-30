/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import { useState } from "react"
import Week  from "../../../HomePatient/Weekk.jsx"
import muyBien from "../../../../../Assets/Imgs/muyBien.png"
import normal from "../../../../../Assets/Imgs/normal.png"
import mal from "../../../../../Assets/Imgs/mal.png"
import imgProduct from "../../../../../Assets/Imgs/example.png"
import question from "../../../../../Assets/Imgs/question.png"
import imageExample from "../../../../../Assets/Imgs/imageExample.png"
import "./planNutrition.css"

const PlanNutrition = ({ type }) => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

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


    const ViewPopUp = ({ name }) => (
        <article className="viewPopUp">
            <div className="popUpContent">
                <h2>{name}</h2>
                <p>
                    1. Pelar las mandarinas, sacarle las semillas y procesar todos los gajos y la piel de ½ mandarina + el jugo del limón.
                    <br />
                    2. Colocar en una cacerola y cocinar a fuego bajo hasta que al pasar la cuchara, se quede.
                    <br />
                    3. Dejar enfriar, agregar las cucharaditas de Hileret Stevia líquida y guardar en un frasco chico de vidrio limpio y en la heladera.
                    <br />
                    4. Dura 1 semana.
                    <br />
                </p>
                <section className="gram">
                    <div>
                        <p>Carbohidratos</p>
                        <p>2,29</p>
                    </div>
                    <div>
                        <p>Proteínas</p>
                        <p>0,14</p>
                    </div>
                    <div>
                        <p>Grasas</p>
                        <p>0,05</p>
                    </div>
                    <div>
                        <p>Fibras</p>
                        <p>0,33</p>
                    </div>
                </section>
                <img src={imageExample} alt="image Example" />
                <div className="btn">
                    <button onClick={() => setIsPopUpVisible(false)}>Entendido</button>
                </div>
            </div>
        </article>
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
                                <h1>{ type }</h1>
                                <p>387</p>
                            </div>
                            <p className="recommendation">Recomendado: 30% de tu ingesta diaria (503 kcal)</p>
                            
                            { meals.map((meal, index) => (
                                <div key={index} className="detailsContainer">
                                    <img src={imgProduct} alt="imgProduct" />
                                    <div className="detailsContentWrapper">
                                        <div className="detailsContent">
                                            <p>{meal.name}</p>
                                            <p>{meal.calories}</p>
                                        </div>
                                        <div className="detailsDescription">
                                            <p>{meal.description}</p>
                                            <img src={question} alt="question" onClick={() => {
                                                setIsPopUpVisible(true);
                                                setSelectedMeal(meal.name);
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            )) }
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
                        <div className="feedBackButtons">
                            <button>Cancelar</button>
                            <button>Confirmar</button>
                        </div>
                    </section>
                </article>
            </div>
            
            { isPopUpVisible && selectedMeal && <ViewPopUp name={selectedMeal} /> }
        </div>
    )
}

PlanNutrition.propTypes = {
    type: PropTypes.string.isRequired
};

export default PlanNutrition
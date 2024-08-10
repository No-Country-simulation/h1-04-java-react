/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import WeekComponent from "../../../HomePatient/WeekComponent.jsx";
import muyBien from "../../../../../Assets/Imgs/muyBien.png";
import normal from "../../../../../Assets/Imgs/normal.png";
import mal from "../../../../../Assets/Imgs/mal.png";
import arrowOrange from "../../../../../Assets/Imgs/arrowOrange.svg";
import "./planNutrition.css";

const optionsNutrition = [
  { label: "Desayuno" },
  { label: "Media Mañana" },
  { label: "Almuerzo" },
  { label: "Media Tarde" },
  { label: "Merienda" },
  { label: "Cena" },
  { label: "Otros" },
];

const meals = [
  {
    name: "Cafe con leche",
    description: `
      <span>150 ml: 2 cucharas de café y 1 azúcar</span><br/>
      Cafe con leche<br/>
      Pelar las mandarinas, sacarle las semillas y procesar todos los gajos y la piel de ½ mandarina + el jugo del limón.<br/>
      Colocar en una cacerola y cocinar a fuego bajo hasta que al pasar la cuchara, se quede.<br/>
      Dejar enfriar, agregar las cucharaditas de Hileret Stevia líquida y guardar en un frasco chico de vidrio limpio y en la heladera.<br/>
      Dura 1 semana.
    `,
    calories: 117,
  },
  {
    name: "Tostadas Integrales",
    description: `
    <span>2 raciones, cada ración 20g</span><br/>
    Tostadas Integrales<br/>
    Pelar las mandarinas, sacarle las semillas y procesar todos los gajos y la piel de ½ mandarina + el jugo del limón.<br/>
    Colocar en una cacerola y cocinar a fuego bajo hasta que al pasar la cuchara, se quede.<br/>
    Dejar enfriar, agregar las cucharaditas de Hileret Stevia líquida y guardar en un frasco chico de vidrio limpio y en la heladera.<br/>
    Dura 1 semana.
  `,
    calories: 102,
  },
  {
    name: "Mermelada Light",
    description: `
      <span>2 cucharitas, cada ración 5g</span><br/>
      Receta Mermelada casera light<br/>
      1. Pelar las mandarinas, sacarle las semillas y procesar todos los gajos y la piel de ½ mandarina + el jugo del limón.<br/>
      2. Colocar en una cacerola y cocinar a fuego bajo hasta que al pasar la cuchara, se quede.<br/>
      3. Dejar enfriar, agregar las cucharaditas de Hileret Stevia líquida y guardar en un frasco chico de vidrio limpio y en la heladera.<br/>
      4. Dura 1 semana.
    `,
    calories: 50,
  },
  {
    name: "Jugo Natural de Naranja",
    description: `
    <span>250 ml</span><br/>
    TJugo Natural de Naranja<br/>
    Pelar las mandarinas, sacarle las semillas y procesar todos los gajos y la piel de ½ mandarina + el jugo del limón.<br/>
    Colocar en una cacerola y cocinar a fuego bajo hasta que al pasar la cuchara, se quede.<br/>
    Dejar enfriar, agregar las cucharaditas de Hileret Stevia líquida y guardar en un frasco chico de vidrio limpio y en la heladera.<br/>
    Dura 1 semana.
  `,
    calories: 119,
  },
];

const PlanNutrition = () => {
  const [isOpen, setIsOpen] = useState(
    Array(optionsNutrition.length).fill(false)
  );

  const [detailsOpen, setDetailsOpen] = useState(
    Array(meals.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => {
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
    <div className="containerNutrition">
      <div>
        { optionsNutrition.map((comp, index) => (
          <div key={index}>
            <button className="flex justify-between items-center p-4 optionPink" onClick={() => toggleDropdown(index)} >
              {comp.label}
              <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imagePink ${
                  isOpen[index]
                    ? "arrow-rotate-treatment"
                    : "more-more-arrow-rotate"
                }`}
              />
            </button>
            { isOpen[index] && (
              <div>
                <section className="weekContainer">
                  <WeekComponent
                    backgroundColor="bg-primary"
                    borderColor="border-primary"
                    textColor="text-primary"
                  />
                </section>

                <section>
                  <article className="details bg-white">
                    <div className="detailsTitle">
                      <h1>{comp.label}</h1>
                      <p>387</p>
                    </div>
                    <p className="recommendation">
                      Recomendado: 30% de tu ingesta diaria (503 kcal)
                    </p>

                    { meals.map((meal, mealIndex) => (
                      <div key={mealIndex} className="detailsContainer ">
                        <div className="detailsContentWrapper">
                          <button className="flex justify-between items-center p-5 py-1 optionPink text-blackClear" onClick={() => toggleDetails(mealIndex)} >
                            {meal.name}
                            <img src={arrowOrange} alt="arrow" className={`w-4 h-6 ml-4 imagePink ${
                                detailsOpen[mealIndex]
                                  ? "arrow-rotate-treatment"
                                  : "more-more-arrow-rotate"
                              }`}
                            />
                          </button>
                          { detailsOpen[mealIndex] && (
                            <>
                              <div className="detailsDescription">
                                <article>
                                  <span>Indicaciones:</span>
                                  <span>{meal.calories}</span>
                                </article>
                                <p dangerouslySetInnerHTML={{ __html: meal.description }}></p>
                              </div>
                            </>
                          ) }
                        </div>
                      </div>
                    )) }
                  </article>
                </section>

                <section className="feedBack">
                  <h3 style={{ color: "#EA526F" }}>
                    ¿Cómo te sentiste con la comida?
                  </h3>
                  <div className="feedBackImgs">
                    <img src={muyBien} alt="Muy bien" />
                    <img src={normal} alt="Normal" />
                    <img src={mal} alt="Mal" />
                  </div>
                  <p style={{ color: "#EA526F" }}>¿Por qué te sentiste así?</p>
                  <textarea name="text" id="text"></textarea>
                  <div className="feedBackButton">
                    <button style={{ backgroundColor: "#EA526F" }} onClick={() => closeDropdown(index)}>
                      Confirmar
                    </button>
                  </div>
                </section>
              </div>
            ) }
          </div>
        )) }
      </div>
    </div>
  );
};

PlanNutrition.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PlanNutrition;
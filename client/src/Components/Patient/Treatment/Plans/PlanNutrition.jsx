import PropTypes from "prop-types"
import Week from "../../HomePatient/Weekk.jsx"
import muyBien from "../../../../Assets/Imgs/muyBien.png"
import normal from "../../../../Assets/Imgs/normal.png"
import mal from "../../../../Assets/Imgs/mal.png"
import "./plans.css"

const PlanNutrition = ({ type }) => {
    return (
        <article>
            <section className="weekContainer">
                <Week />
            </section>
            
            <section>
                <h1>{ type }</h1>
                {/* COMPONENTE */}
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
    )
}

PlanNutrition.propTypes = {
    type: PropTypes.string.isRequired
};

export default PlanNutrition
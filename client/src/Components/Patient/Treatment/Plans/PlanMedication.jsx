import PropTypes from "prop-types"
import "./plans.css"

const PlanMedication = ({ type }) => {
    return (
        <article>
            <section>
                {/* SEMANA */}
            </section>
            
            <section>
                <h1>{ type }</h1>
                {/* COMPONENTE */}
            </section>
            
            <section>
                {/* FEEDBACK */}
            </section>
        </article>
    )
}

PlanMedication.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanMedication
import PropTypes from "prop-types"
import "./plans.css"

const PlanClinical = ({ type }) => {
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

PlanClinical.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanClinical
import PropTypes from "prop-types"
import "./plans.css"

const PlanGim = ({ type }) => {
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

PlanGim.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanGim
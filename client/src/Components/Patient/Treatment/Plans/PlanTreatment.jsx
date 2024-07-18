import arrowRight from "../../../../Assets/Imgs/arrowRight.png"
import "./plans.css"


const optionsTreat = [
    { label: "Indicaciones" },
    { label: "Precauciones" },
    { label: "Comunicación" }
]

const PlanTreatment = () => {
    const component = (index) =>{
        return (
            <>
                { index == 0 && (
                    <div>
                        
                    </div>
                ) }
            </>
        )
    }

    return (
        <article>
            { optionsTreat.map((comp, index) => (
                <button key={index} className="option bg-stone-300 font-bold flex justify-between p-2" onClick={component(index)}>
                    { comp.label }
                    <img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" />
                </button>
            )) }
        </article>
    )
}

export default PlanTreatment
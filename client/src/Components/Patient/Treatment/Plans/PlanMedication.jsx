import PropTypes from "prop-types"
import { useState } from "react";
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import undo from "../../../../Assets/Imgs/undo.png"
import "./plans.css"

const optionsTreat = [
    { label: "Azatioprima" },
    { label: "Clonazepan" },
    { label: "Ibuprofeno" }
];


const PlanMedication = () => {
    const [isOpen, setIsOpen] = useState(Array(optionsTreat.length).fill(false));

    const toggleDropdown = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };


    return (
        <article>
            { optionsTreat.map((comp, index) => (
                <div key={index}>
                    <button className="option bg-stone-300 font-bold flex justify-between p-2" onClick={() => toggleDropdown(index)}>
                        {comp.label}
                        <img src={arrowRight} alt="arrow" className={`w-6 h-6 ml-4 ${isOpen[index] ? 'arrow-rotate' : ''}`} />
                    </button>
                    { isOpen[index] && (
                        <div className="containerMedication">
                            <div className="undo">
                                <img src={undo} alt="undo" />
                                <div>
                                    <h1>{comp.label}</h1>
                                    <p>Micofenolato-mofetil | Micofenolato sódico</p>
                                </div>
                            </div>
                            
                            <section className="flex justify-center text-center">
                                <div>
                                    <p>Frecuencia</p>
                                    <p>8</p>
                                    <p>horas</p>
                                </div>
                                <div>
                                    <p>Dosis</p>
                                    <p>1</p>
                                    <p>dosis</p>
                                </div>
                                <div>
                                    <p>Duración</p>
                                    <p>21</p>
                                    <p>días</p>
                                </div>
                            </section>
                            
                            <span className="font-bold">Instrucciones</span>
                            <p>Cada 8 horas debe tomar una dosis, luego de la comida. </p>
                            <div className="buttonOk">
                                <button onClick={() => alert("Descargando...")}>Descargar Receta</button>
                            </div>
                        </div>
                    ) }
                </div>
            )) }
        </article>
    )
}

PlanMedication.propTypes = {
    type: PropTypes.string.isRequired
}

export default PlanMedication
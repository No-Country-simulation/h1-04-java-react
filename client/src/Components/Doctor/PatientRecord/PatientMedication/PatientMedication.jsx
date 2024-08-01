import { useState } from "react";
import DoctorHeader from "../../DoctorHeader/DoctorHeader"
import arrowRight from "../../../../Assets/Imgs/arrowRight.png";
import "./patientMedication.css"

const PatientMedication = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const medications = [
        "Nombre Medicacion 1",
        "Nombre Medicacion 2",
        "Nombre Medicacion 3",
        "Nombre Medicacion 4"
    ];

    return (
        <section className="m-5">
            <DoctorHeader text={"Estudios"} />
            
            {medications.map((medication, index) => (
                <div key={index} className="shadow-lg p-5 rounded-md mb-5" style={{ border: "1px solid #CCCBCB" }}>
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleDropdown(index)} >
                        <p>{medication}</p>
                        <img
                            src={arrowRight}
                            alt="arrow"
                            className={`w-6 h-6 ml-4 ${openIndex === index ? 'more-arrow-rotate' : 'arrow-rotate'}`}
                        />
                    </div>
                    { openIndex === index && (
                        <div>
                            <p className="mt-5">
                                Adherencia - 60%
                                Frecuencia
                                Dosis
                                Tamaño
                                <br /> <br />
                                Instrucciones
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                            <div className="containerButtonEdit">
                                <button className="buttonEdit">Editar</button>
                            </div>
                        </div>
                    ) }
                </div>
            ))}
            
            <button className="buttonContinue">Continue</button>
        </section>
    )
}

export default PatientMedication
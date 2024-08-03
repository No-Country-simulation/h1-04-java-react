import { useState } from "react";
import DoctorHeader from "../../DoctorHeader/DoctorHeader"
import CardTreatmentFollowUp from "./CardTreatmentFollowUp"
import GaugeMeter from "./GaugeMeter"

const TreatmentFollowUp = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const ViewPopUp = () => (
        <article className="viewPopUpPatientMedication">
            <div className="popUpContentPatientMedication">
                <p>(se esta haciendo esta función)</p>
                <h2>Editar?</h2>
                <textarea name="edit" id="edit"></textarea>
                <button onClick={() => setIsPopUpVisible(false)} className="buttonContinue">Listo</button>
            </div>
        </article>
    );

    return (
        <>
        <section className="m-5">
            <DoctorHeader text={"Tratamiento"} />
            <h3 className="mb-5">Adherencia general al tratamiento </h3>
            
            <div>
                <button onClick={() => setIsPopUpVisible(true)} style={{backgroundColor:"#009FF5", borderRadius:"5px", width:"60px", textAlign:"center", padding:"2px", color:"#fff"}}>Editar</button>
                <div className="flex justify-center mb-4">
                    <GaugeMeter value={4.3} />
                </div>
                <div className="flex justify-center items-center">
                    <CardTreatmentFollowUp name="Medicación" />
                    <CardTreatmentFollowUp name="Alimentación" />
                </div>
                <div className="flex justify-center items-center">
                    <CardTreatmentFollowUp name="Act. Fisica" />
                    <CardTreatmentFollowUp name="Tratamiento" />
                </div>
            </div>
        </section>
        
        { isPopUpVisible && <ViewPopUp /> }
        </>
    )
}

export default TreatmentFollowUp
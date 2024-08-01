import DoctorHeader from "../../DoctorHeader/DoctorHeader"
import CardTreatmentFollowUp from "./CardTreatmentFollowUp"
import GaugeMeter from "./GaugeMeter"

const TreatmentFollowUp = () => {
    return (
        <section className="m-5">
            <DoctorHeader text={"Tratamiento"} />
            <h3 className="mb-5">Adherencia general al tratamiento </h3>
            
            <div>
                <p style={{backgroundColor:"#009FF5", borderRadius:"5px", width:"60px", textAlign:"center", padding:"2px", color:"#fff"}}>Editar</p>
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
    )
}

export default TreatmentFollowUp
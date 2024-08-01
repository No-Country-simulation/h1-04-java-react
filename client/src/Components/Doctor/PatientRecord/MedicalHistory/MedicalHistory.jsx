import DoctorHeader from "../../DoctorHeader/DoctorHeader"
import CardMedicalHistory from "./CardMedicalHistory"

const MedicalHistory = () => {
    return (
        <section className="m-5">
            <DoctorHeader text={"Historial Medico"} />
            <CardMedicalHistory />
            <CardMedicalHistory />
            <CardMedicalHistory />
            <CardMedicalHistory />
        </section>
    )
}

export default MedicalHistory
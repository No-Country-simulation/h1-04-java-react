import { Link } from "react-router-dom"
import foldier from "../../../Assets/Imgs/foldier.svg"
import DoctorHeader from "../DoctorHeader/DoctorHeader"
import "./patientRecords.css"

const PatientRecords = () => {
    return (
        <section className="m-5">
            <DoctorHeader text={"Ficha paciente"} />
            <section className='space-x-4  p-3 rounded mb-2'>
                <div style={{backgroundColor:"#009FF5", margin:"auto"}} className='text-white rounded-full w-20 h-20 flex items-center justify-center'>
                    Undo
                </div>
                
                <div className="flex justify-center items-center">     
                    <div>
                        <p>Event has been scheduled</p>
                        <div className='flex text-gray-500'>
                            <p className=' text-sm'>Sunday, December</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="containerTreatments">
                <Link to={'/medicalHistory'} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Historial Medico</p>
                </Link>
                <Link to={'/treatmentFollowUp'} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Tratamiento</p>
                </Link>
                <Link to={'/patientStudy'} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Estudios</p>
                </Link>
                <Link to={'/patientMedication'} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Medicación</p>
                </Link>
                <Link to={"#"} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Contacto</p>
                </Link>
                <Link to={"#"} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Anotaciones</p>
                </Link>
                <Link to={"#"} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Turnos previos</p>
                </Link>
                <Link to={"#"} className="treatmentsStylesRecords">
                    <img src={foldier} alt="Tratamiento" />
                    <p>Proximos turnos</p>
                </Link>
            </section>
        </section>
    )
}

export default PatientRecords
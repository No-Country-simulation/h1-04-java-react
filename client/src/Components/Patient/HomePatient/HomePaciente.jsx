import { useContext, useEffect, useState } from "react";
import WeekHome from "./WeekHome.jsx";
import Day from "./Day.jsx";
import imgUser from "../../../Assets/Imgs/imgUser.png"
import nutricion from "../../../Assets/Imgs/apple.svg"
import medicacion from "../../../Assets/Imgs/pill.svg"
import turno from "../../../Assets/Imgs/outline.svg"
import studies from "../../../Assets/Imgs/studyDoctor.svg"
import gim from "../../../Assets/Imgs/running.svg"
import DoctorContext from "../../../context/DoctorContext.jsx"
import "./homePaciente.css"

const HomePatient = () => {
  const [patient, setPatient] = useState(null)
  const { authData, fetchPatientById } = useContext(DoctorContext)

  useEffect(() => {
    const getPatient = async() =>{
      if(authData){
        try {
          const patientData = await fetchPatientById(authData.id)      
          setPatient(patientData.patient.user)  
        } catch (error) {
          console.error(error)
        }
      }
    }
    
    getPatient()
  }, [authData, fetchPatientById])

  return  (
    <section className="containerHomePatient">
      <div className="font-bold text-center mt-5 text-xl">
        <div className="flex justify-center items-center mt-5 mb-4">
          <img src={imgUser} alt="img user" className="w-32 h-32" />
        </div>
        <h1>¡Hola { patient ? patient.firstName : 'Cargando...' }!</h1>
      </div>
      
      <div>
        <WeekHome />
      </div>
      
      <div>
        <Day image={nutricion} activity={"Desayuno"} time={"8:30 hs."} href={'/treatment-nutrition'} color="#EA526F" backColor="#EA526F26" />
        <Day image={medicacion} activity={"Medicación"} time={"Azatioprima | 9:00 hs."} href={'/treatment-medication'} color="#03A8AB" backColor="#03A8AB26" />
        <Day image={turno} activity={"Turno al Médico: Control"} time={"Dr. Juan Torres | 9:00 hs."} href={'/treatments'} color="#8163B0" backColor="#8163B026" />
        <Day image={studies} activity={"Estudios / Laboratorio"} time={"Orina Completa |9:45 hs."} href={'/treatment-studies'} color="#8163B0" backColor="#8163B026" />
        <Day image={gim} activity={"Actividad  Física"} time={"10:30 hs."} href={'/treatment-physical-activity'} color="#FF8A5B" backColor="#FF8A5B26" />
      </div>
    </section>
  )
}

export default HomePatient;
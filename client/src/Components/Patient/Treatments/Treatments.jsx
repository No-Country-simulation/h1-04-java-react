import treatment from "../../../Assets/Imgs/treatmentBlue.svg";
import historiaCli from "../../../Assets/Imgs/historyBlue.svg";
import studies from "../../../Assets/Imgs/studyBlue.svg";
import medicacion from "../../../Assets/Imgs/medicationGreen.svg";
import gim from "../../../Assets/Imgs/running.svg";
import nutricion from "../../../Assets/Imgs/apple.svg";
import PatientHeader from "../PatientHeader/PatientHeader";
import CardTreatments from "./CardTreatments";
import "./treatments.css";

const Treatments = () => {
  return (
    <article className="m-2">
      <PatientHeader text={"Tratamiento"} />
      
      <section className='containerTreatments'>
        <CardTreatments url='/treatment-treatment' backColor="#03A8AB33" textColor="#03A8AB" image={treatment} text="Tratamiento" />
        
        <CardTreatments url='/treatment-clinical-history' backColor="#03A8AB33" textColor="#03A8AB" image={historiaCli} text="Historial Clinico" />
        
        <CardTreatments url='/treatment-studies' backColor="#03A8AB33" textColor="#03A8AB" image={studies} text="Estudios" />
        
        <CardTreatments url='/treatment-medication' backColor="#03A8AB33" textColor="#03A8AB" image={medicacion} text="Medicación" />
        
        <CardTreatments url='/treatment-physical-activity' backColor="#FF8A5B33" textColor="#FF8A5B" image={gim} text="Actividad Física" />
        
        <CardTreatments url='/treatment-nutrition' backColor="#EA526F33" textColor="#EA526F" image={nutricion} text="Nutrición" />
      </section>
    </article>
  );
};

export default Treatments;
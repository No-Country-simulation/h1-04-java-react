import { useState } from "react";
import DoctorHeader from "../../DoctorHeader/DoctorHeader";
import CardPatientStudy from "./CardPatientStudy";

const PatientStudy = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelected = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className='m-5'>
      <DoctorHeader text={"Estudios"} />

      <div className='flex justify-evenly items-center mb-10'>
        <button
          onClick={() => handleSelected("todos")}
          style={
            selectedButton === "todos"
              ? {
                  backgroundColor: "#0087D0",
                  color: "#fff",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                }
              : {
                  backgroundColor: "white",
                  border: "1px solid #0087D0",
                  color: "#0087D0",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                }
          }
        >
          Todos
        </button>
        <button
          onClick={() => handleSelected("sangre")}
          style={
            selectedButton === "sangre"
              ? {
                  backgroundColor: "#0087D0",
                  color: "#fff",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                }
              : {
                  backgroundColor: "white",
                  border: "1px solid #0087D0",
                  color: "#0087D0",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                }
          }
        >
          Sangre
        </button>
        <button
          onClick={() => handleSelected("orina")}
          style={
            selectedButton === "orina"
              ? {
                  backgroundColor: "#0087D0",
                  color: "#fff",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                }
              : {
                  backgroundColor: "white",
                  border: "1px solid #0087D0",
                  color: "#0087D0",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                }
          }
        >
          Orina
        </button>
      </div>

      <div>
        <CardPatientStudy title='Estudio 1 - Sangre' date='12 de mayo 2024' />
        <CardPatientStudy title='Estudio 1 - Sangre' date='12 de mayo 2024' />
        <CardPatientStudy title='Estudio 1 - Sangre' date='12 de mayo 2024' />
        <CardPatientStudy title='Estudio 1 - Sangre' date='12 de mayo 2024' />
        <CardPatientStudy title='Estudio 1 - Sangre' date='12 de mayo 2024' />
      </div>
    </section>
  );
};

export default PatientStudy;

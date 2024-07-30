import imgUser from "../../../Assets/Imgs/pepita.png"
import Week from "./Weekk.jsx";
import Day from "./Day.jsx";
import turno from "../../../Assets/Imgs/calendar.png"
import nutricion from "../../../Assets/Imgs/nutricion.png"
import medicacion from "../../../Assets/Imgs/medicacion.png"
import studies from "../../../Assets/Imgs/studies.png"
import gim from "../../../Assets/Imgs/gim.png"
import "./homePaciente.css"

const HomePatient = () => {
  let user = "Pepita"

  return  (
    <section className="containerHomePatient">
      <div className="font-bold text-center mt-5 text-xl">
        <h1>¡Hola {user}!</h1>
        <div className="flex justify-center items-center mt-5 mb-8">
          <img src={imgUser} alt="img user" className="w-32 h-32" />
        </div>
      </div>
      
      <div>
        <Week />
      </div>
      
      <div>
        <h2 className="font-bold text-xl	ml-5">Mi día</h2>
        <Day image={nutricion} activity={"Desayuno"} time={"8:30 hs."} href={'/treatment-nutrition'} backColor="#EA526F" />
        <Day image={medicacion} activity={"Medicación"} time={"9:00 hs."} href={'/treatment-medication'} backColor="#21BABD" />
        <Day image={turno} activity={"Turno al Médico: Control"} time={"9:00 hs."} href={'/treatments'} backColor="#21BABD" />
        <Day image={studies} activity={"Laboratorio/Estudio"} time={"10:00 hs."} href={'/treatment-studies'} backColor="#21BABD" />
        <Day image={gim} activity={"Actividad  Física"} time={"11:30 hs."} href={'/treatment-physical-activity'} backColor="#FF8A5B" />
      </div>
    </section>
  )
}

export default HomePatient;
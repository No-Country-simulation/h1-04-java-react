import imgUser from "../../../Assets/Imgs/pepita.png"
import Week from "./Weekk.jsx";
import Day from "./Day.jsx";
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
      
      <div className="today">
        <h2 className="font-bold text-xl	ml-5">Mi día</h2>
        <div className="flex justify-around">
          <p>Actividad</p>
          <p>Horarios</p>
        </div>
        <Day activity={"Desayuno"} time={"8:30 hs."} href={'/treatment-nutrition'} backColor="" />
        <Day activity={"Medicación"} time={"10:30 hs."} href={'/treatment-medication'} backColor="" />
        <Day activity={"Turno Médico"} time={"10:30 hs."} href={'/treatments'} backColor="" />
        <Day activity={"Almuerzo"} time={"12:30 hs."} href={'/treatment-nutrition'} backColor="" />
        <Day activity={"Actividad  Física"} time={"16:00 hs."} href={'/treatment-physical-activity'} backColor="" />
        <Day activity={"Diálisis"} time={"18:00 hs."} href={'/treatments'} backColor="" />
      </div>
    </section>
  )
}

export default HomePatient;
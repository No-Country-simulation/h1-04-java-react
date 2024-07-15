import imgUser from "../../../Assets/Imgs/example.png"
import Week from "./Weekk.jsx";
import Day from "./Day.jsx";

const HomePatient = () => {
  let user = "Juan"

  return  (
    <>
      <div className="font-bold text-center mt-5 text-xl">
        <p>¡Hola {user}!</p>
        <div className="flex justify-center items-center mt-5 mb-8">
          <img src={imgUser} alt="img user" className="w-32 h-32" />
        </div>
      </div>
      
      <div>
        <Week />
      </div>
      
      <div className="today">
        <p className="font-bold text-xl	ml-5">Mi día</p>
        <div className="flex justify-around">
          <p>Actividad</p>
          <p>Horarios</p>
        </div>
        <Day activity={"Desayuno"} time={"8:30 hs."} href={"/login"} />
        <Day activity={"Turno Médico"} time={"10:30 hs."} href={"/login"} />
        <Day activity={"Medicación"} time={"10:30 hs."} href={"/login"} />
        <Day activity={"Almuerzo"} time={"12:30 hs."} href={"/login"} />
        <Day activity={"Actividad  Física"} time={"16:00 hs."} href={"/login"} />
        <Day activity={"Diálisis"} time={"18:00 hs."} href={"/login"} />
      </div>
    </>
  )
}

export default HomePatient;
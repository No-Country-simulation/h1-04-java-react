import imgUser from "../../../Assets/Imgs/example.png"
import "./homePatient.css";

const HomePatient = () => {
  let user = "pepito"

  return  (
    <>
      <div className="user">
        <p>¡Hola {user}!</p>
        <img src={imgUser} alt="img user" />
      </div>
      
      <div className="week">
        
      </div>
      
      <div className="today">
      
      </div>
    </>
  )
}

export default HomePatient;
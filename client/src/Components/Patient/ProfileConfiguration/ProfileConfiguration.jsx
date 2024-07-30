import { useNavigate } from "react-router-dom"
import { useState } from "react"
import arrowRight from "../../../Assets/Imgs/arrowRight.png"
import arrowLeft from "../../../Assets/Imgs/otraArrowLeft.png"
import privateImg from "../../../Assets/Imgs/private.png"
import profile from "../../../Assets/Imgs/pepitaExample.png"
import settings from "../../../Assets/Imgs/settings.png";
import PersonalData from "./PersonalData/PersonalData"
import Notifications from "./Notifications/Notifications"
import "./profileConfiguration.css"

const ProfileConfiguration = () => {
    const [personalData, setPersonalData] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const navigate = useNavigate()

    let user = {}//OBTENER USUARIO DEL BACKEND

    const handlechange = (type) =>{
        if(type == "personalData"){
            setPersonalData(!personalData)
        }
        else{
            setNotifications(!notifications)
        }
    }

    return (
        <section className="container">
            <div className="flex items-center m-4 mainProfileConfiguration">
                <img src={settings} alt="configuration" className="h-6 w-6" />
                <p className="ml-3 font-bold text-lg">Configuración</p>
            </div>
            
            <article className="userPictureName">
                <img src={profile} alt="Paciente img" className="h-28 w-28 m-auto mt-5" />
                <p className="ml-3 font-bold text-lg text-center mb-10">Pepita Flores</p>
            </article>
            
            <article className="optionsContainer">
                <div>
                    <button className="option font-bold flex justify-between p-2" onClick={() => handlechange("personalData")}>
                        <p>Datos Personales</p>
                        <img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" />
                    </button>
                    { personalData && ( <div className="mb-5"> <PersonalData user={user} /> </div> ) }
                </div>
                
                <div>
                    <button className="option font-bold flex justify-between p-2" onClick={() => handlechange("notifications")}>
                        <p>Notificaciones</p>
                        <img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" />
                    </button>
                    { notifications && ( <div className="mb-5"> <Notifications /> </div> ) }
                </div>
                
                <button className="option font-bold flex justify-between p-2">
                    <p>Seguridad</p>
                    <img src={privateImg} alt="arrow" className="w-6 h-6 ml-4" />
                </button>
                
                <button className="option font-bold flex justify-between p-2">
                    <p>Privacidad</p>
                    <img src={privateImg} alt="arrow" className="w-6 h-6 ml-4" />
                </button>
            </article>
            
            <div className="backContainer">
                <button className="back" onClick={() => navigate(-1)}>
                    <img src={arrowLeft} alt="back" />
                </button>
            </div>
        </section>
    )
}

export default ProfileConfiguration
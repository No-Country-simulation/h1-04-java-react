import { useNavigate } from "react-router-dom"
import arrowRight from "../../../Assets/Imgs/arrowRight.png"
import arrowLeft from "../../../Assets/Imgs/arrowLeft.png"
import privateImg from "../../../Assets/Imgs/private.png"
import profile from "../../../Assets/Imgs/profile.png"
import settings from "../../../Assets/Imgs/settings.png";

const ProfileConfiguration = () => {
    const navigate = useNavigate()

    return (
        <section className="container">
            <div className="flex items-center m-4">
                <img src={settings} alt="configuration" className="h-6 w-6" />
                <p className="ml-3 font-bold text-lg">Configuración</p>
            </div>
            
            <article>
                <img src={profile} alt="Paciente img" className="h-28 w-28 m-auto mt-5" />
                <p className="ml-3 font-bold text-lg text-center mb-10">Paciente xxx</p>
            </article>
            
            <article className="optionsContainer">
                <button className="option bg-stone-300 font-bold flex justify-between p-2">
                    <p>Datos Personales</p>
                    <img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" />
                </button>
                <button className="option bg-stone-300 font-bold flex justify-between p-2">
                    <p>Notificaciones</p>
                    <img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" />
                </button>
                <button className="option bg-stone-300 font-bold flex justify-between p-2">
                    <p>Seguridad</p>
                    <img src={privateImg} alt="arrow" className="w-6 h-6 ml-4" />
                </button>
                <button className="option bg-stone-300 font-bold flex justify-between p-2">
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
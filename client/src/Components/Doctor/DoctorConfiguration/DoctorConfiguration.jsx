import { useNavigate } from "react-router-dom";
import arrowRight from "../../../Assets/Imgs/arrowRight.png";
import arrowLeft from "../../../Assets/Imgs/arrowLeft.png";
import privateImg from "../../../Assets/Imgs/private.png";
import profile from "../../../Assets/Imgs/profile.png";
import settings from "../../../Assets/Imgs/settings.png";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import { useContext } from "react";
import DoctorContext from "../../../context/DoctorContext";

const DoctorConfiguration = () => {
  const navigate = useNavigate();
  const { logout } = useContext(DoctorContext);

  function log() {
    logout();
    navigate("/");
  }

  return (
    <section className='m-5 h-full '>
      <DoctorHeader text={"Configuracion"} />

      <div className='flex flex-col justify-between'>
        <article>
          <img
            src={profile}
            alt='Paciente img'
            className='h-28 w-28 m-auto mt-5'
          />
          <p className='ml-3 font-bold text-lg text-center mb-10'>
            Paciente xxx
          </p>
        </article>

        <article className='optionsContainer space-y-4'>
          <button className='w-full rounded bg-stone-300 font-bold flex justify-between p-2'>
            <p>Datos Personales</p>
            <img src={arrowRight} alt='arrow' className='w-6 h-6 ml-4' />
          </button>
          <button className='w-full rounded bg-stone-300 font-bold flex justify-between p-2'>
            <p>Notificaciones</p>
            <img src={arrowRight} alt='arrow' className='w-6 h-6 ml-4' />
          </button>
          <button className='w-full rounded bg-stone-300 font-bold flex justify-between p-2'>
            <p>Seguridad</p>
            <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
          </button>
          <button className='w-full rounded bg-stone-300 font-bold flex justify-between p-2'>
            <p>Privacidad</p>
            <img src={privateImg} alt='arrow' className='w-6 h-6 ml-4' />
          </button>
        </article>

        <button
          onClick={() => log()}
          className='w-full self-end bg-red-500 rounded py-2 font-semibold text-white'
        >
          Log out
        </button>
      </div>
    </section>
  );
};

export default DoctorConfiguration;

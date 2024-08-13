import { useLocation, useNavigate } from "react-router-dom";
import SuccesModal from "../../Modals/SucessModal";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import { useState } from "react";
import checkImgError from "../../../Assets/Imgs/checkImgSuccess.svg";
import justinaFirma from "../../../Assets/Imgs/justinaFirma.png";

export default function RecipeRegister() {
  const location = useLocation();
  const { state } = location;
  const { remedio, tamano, dosis, frecuencia, otroCampo } = state || {};
  const [showVerificando, setShowVerificando] = useState(false);

  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <DoctorHeader text={"Receta medica"} />
        <div className='bg-white rounded-[10px] shadow-xl p-5'>
          <h2 className='font-bold'>Medicamento Prescrito</h2>
          <p className='mt-4'>Nombre del medicamento:</p>
          <p>{remedio}</p>
          <p className='mt-4'>Dosis:</p>
          <p>{dosis}</p>
          <p className='mt-4'>Frecuencia de Administracion:</p>
          <p>{frecuencia}</p>
          <p className='mt-4'>Duracion del tratamiento:</p>
          <p>{tamano}</p>
          <h2 className='font-bold mt-4'>
            Indicaciones adicionales o precauciones
          </h2>
          <p>{otroCampo}</p>

          <p className='text-[#6E30A1] font-semibold  text-sm italic mt-4'>
            Gestiona tus recetas médicas <br /> con facilidad y seguridad.
          </p>

          <img src={justinaFirma} alt='' />
        </div>
      </div>
      <button
        onClick={() => setShowVerificando(true)}
        className='w-full bg-blueColorClear font-semibold rounded-[10px] py-2 text-center text-white'
      >
        <h1>Firmar</h1>
      </button>
      <SuccesModal
        show={showVerificando}
        onClose={() => navigate("/query-completion")}
        check
        checkImg={checkImgError}
        title='Listo!'
        text='Receta agregada'
      />
    </div>
  );
}

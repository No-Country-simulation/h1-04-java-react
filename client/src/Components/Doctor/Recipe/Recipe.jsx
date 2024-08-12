import { useState } from "react";
import InputComponent from "../../../helpers/atoms/InputComponent";
import EndButton from "../../../helpers/atoms/EndButton";
import SuccesModal from "../../Modals/SucessModal";
import DoctorHeader from "../DoctorHeader/DoctorHeader";

export default function Recipe() {
  const [showVerificando, setShowVerificando] = useState(false);

  return (
    <div className=' flex flex-col justify-between  h-full '>
      <div className='w-full gap-y-3 flex flex-col'>
        <DoctorHeader text={"Receta medica"} />
        <InputComponent label={"Remedio"} />
        <InputComponent label={"Tamaño del medicamento"} />
        <InputComponent label={"Dosis"} />
        <InputComponent label={"Frecuencia"} />
        <InputComponent label={"Otro campo"} />
      </div>
      <div>
        <EndButton text={"Firmar"} show={setShowVerificando} />
      </div>
      <SuccesModal
        title={"Listo!"}
        text={"Se agendo la proxima cita y se envio la receta exitosamente"}
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
      />
    </div>
  );
}

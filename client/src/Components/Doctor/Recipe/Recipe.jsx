import { useState } from "react";
import InputComponent from "../../../helpers/atoms/InputComponent";
import EndButton from "../../../helpers/atoms/EndButton";
import SuccesModal from "../../Modals/SucessModal";
import DoctorHeader from "../DoctorHeader/DoctorHeader";

export default function Recipe() {
  const [showVerificando, setShowVerificando] = useState(false);

  return (
    <div className='m-5 flex flex-col justify-center items-center px-4 pt-5'>
      <div className='w-full gap-y-3 flex flex-col'>
        <DoctorHeader text={"Receta medica"} />
        <InputComponent label={"Remedio"} />
        <InputComponent label={"Tamaño del medicamento"} />
        <InputComponent label={"Dosis"} />
        <InputComponent label={"Frecuencia"} />
        <InputComponent label={"Otro campo"} />
      </div>
      <EndButton text={"Firmar"} show={setShowVerificando} />

      <SuccesModal
        title={"Listo!"}
        text={"Se agendo la proxima cita y se envio la receta exitosamente"}
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
      />
    </div>
  );
}

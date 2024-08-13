import { useState } from "react";
import InputComponent from "../../../helpers/atoms/InputComponent";
import EndButton from "../../../helpers/atoms/EndButton";
import SuccesModal from "../../Modals/SucessModal";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import { Link } from "react-router-dom";

export default function Recipe() {
  const [showVerificando, setShowVerificando] = useState(false);
  const [remedio, setRemedio] = useState("");
  const [tamano, setTamano] = useState("");
  const [dosis, setDosis] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [otroCampo, setOtroCampo] = useState("");

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  console.log(remedio);

  const handleSubmit = () => {
    setShowVerificando(true);
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <DoctorHeader text={"Receta medica"} />
        <div className='bg-white rounded-[10px] p-5 shadow-xl gap-4 flex flex-col'>
          <InputComponent
            type='text'
            name='remedio'
            label={"Remedio"}
            value={remedio}
            onChange={handleInputChange(setRemedio)}
          />
          <InputComponent
            type='text'
            name='tamano'
            label={"Tamaño del medicamento"}
            value={tamano}
            onChange={handleInputChange(setTamano)}
          />
          <InputComponent
            type='text'
            name='dosis'
            label={"Dosis"}
            value={dosis}
            onChange={handleInputChange(setDosis)}
          />
          <InputComponent
            type='text'
            name='frecuencia'
            label={"Frecuencia"}
            value={frecuencia}
            onChange={handleInputChange(setFrecuencia)}
          />
          <InputComponent
            type='text'
            name='otroCampo'
            label={"Otro campo"}
            value={otroCampo}
            onChange={handleInputChange(setOtroCampo)}
          />
        </div>
      </div>
      <Link
        to={"/"}
        className='w-full bg-blueColorClear font-semibold rounded-[10px] py-2 text-center text-white'
      >
        <h1>Firmar</h1>
      </Link>
      <SuccesModal
        title={"Listo!"}
        text={`Se agendó la próxima cita y se envió la receta exitosamente.\n\nDetalles:\nRemedio: ${remedio}\nTamaño del medicamento: ${tamano}\nDosis: ${dosis}\nFrecuencia: ${frecuencia}\nOtro campo: ${otroCampo}`}
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
      />
    </div>
  );
}

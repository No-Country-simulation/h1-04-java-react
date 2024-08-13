import { useState } from "react";
import InputComponent from "../../../helpers/atoms/InputComponent";
import SuccesModal from "../../Modals/SucessModal";
import DoctorHeader from "../DoctorHeader/DoctorHeader";
import { useNavigate } from "react-router-dom";

export default function Recipe() {
  const [showVerificando, setShowVerificando] = useState(false);
  const [remedio, setRemedio] = useState("");
  const [tamano, setTamano] = useState("");
  const [dosis, setDosis] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [otroCampo, setOtroCampo] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!remedio) newErrors.remedio = "Este campo es obligatorio";
    if (!tamano) newErrors.tamano = "Este campo es obligatorio";
    if (!dosis) newErrors.dosis = "Este campo es obligatorio";
    if (!frecuencia) newErrors.frecuencia = "Este campo es obligatorio";
    if (!otroCampo) newErrors.otroCampo = "Este campo es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/doctorRecipeRegister", {
        state: { remedio, tamano, dosis, frecuencia, otroCampo },
      });
    }
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <DoctorHeader text={"Receta medica"} />
        <div className='bg-white rounded-[10px] p-5 shadow-xl gap-4 flex flex-col'>
          <InputComponent
            type='text'
            name='remedio'
            label={"Nombre del medicamento"}
            value={remedio}
            onChange={handleInputChange(setRemedio)}
          />
          {errors.remedio && <p className='text-red-500'>{errors.remedio}</p>}
          <InputComponent
            type='text'
            name='dosis'
            label={"Dosis"}
            value={dosis}
            onChange={handleInputChange(setDosis)}
          />
          {errors.dosis && <p className='text-red-500'>{errors.dosis}</p>}
          <InputComponent
            type='text'
            name='frecuencia'
            label={"Frecuencia"}
            value={frecuencia}
            onChange={handleInputChange(setFrecuencia)}
          />
          {errors.frecuencia && (
            <p className='text-red-500'>{errors.frecuencia}</p>
          )}
          <InputComponent
            type='text'
            name='tamano'
            label={"Duracion"}
            value={tamano}
            onChange={handleInputChange(setTamano)}
          />
          {errors.tamano && <p className='text-red-500'>{errors.tamano}</p>}
          <div>
            <label className='text-sm font-medium'>Indicaciones Extras</label>
            <textarea
              name='otroCampo'
              value={otroCampo}
              onChange={handleInputChange(setOtroCampo)}
              className='w-full border mt-0 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500'
            />
            {errors.otroCampo && (
              <p className='text-red-500'>{errors.otroCampo}</p>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className='w-full bg-blueColorClear font-semibold rounded-[10px] py-2 text-center text-white'
      >
        <h1>Firmar</h1>
      </button>
    </div>
  );
}

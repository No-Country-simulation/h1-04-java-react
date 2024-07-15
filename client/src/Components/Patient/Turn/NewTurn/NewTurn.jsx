import React, { useState } from "react";
import check from "../../../../Assets/Imgs/check.png";
import Calendar from "../../../../helpers/atoms/Calendar";

const NewTurn = () => {
  const [selectedEspecialidad, setSelectedEspecialidad] = useState("");
  const [selectedProfesional, setSelectedProfesional] = useState("");
  const [selectedTipoCita, setSelectedTipoCita] = useState("");
  const [isEspecialidadOpen, setIsEspecialidadOpen] = useState(true);
  const [isProfesionalOpen, setIsProfesionalOpen] = useState(false);
  const [isTipoCitaOpen, setIsTipoCitaOpen] = useState(false);

  const especialidades = [
    "Cardiología",
    "Nefrología",
    "Nutrición",
    "Psiquiatría",
    "Psicología",
  ];

  const profesionales = {
    Cardiología: ["Profesional 1", "Profesional 2"],
    Nefrología: [
      "Mariela Flores",
      "Juan Torres",
      "Julieta Vega",
      "Oscar Roldán",
      "Florencia Brizuela",
    ],
    Nutrición: ["Profesional 3", "Profesional 4"],
    Psiquiatría: ["Profesional 5", "Profesional 6"],
    Psicología: ["Profesional 7", "Profesional 8"],
  };

  const tiposCita = [
    "Consulta",
    "Control",
    "Terapia",
    "Tratamiento",
    "Laboratorio / Estudios",
  ];

  function show() {
    console.log(selectedEspecialidad, selectedProfesional, selectedTipoCita);
  }

  return (
    <div className='  p-4'>
      <h2 className='text-2xl font-bold mb-4'>Turnos</h2>

      <label className='block mb-4'>
        <input
          className='peer/especialidad hidden'
          type='checkbox'
          checked={isEspecialidadOpen}
          onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
          onChange={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
        />
        <span className='block rounded-lg bg-[#D9D9D9] px-4 shadow-lg h-8  transition-all duration-300 overflow-hidden peer-checked/especialidad:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedEspecialidad ? (
              <div className='flex justify-between items-center w-full'>
                <p>{selectedEspecialidad}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Especialidad"
            )}
          </h3>
          <div className='mt-2 space-y-2'>
            {especialidades.map((esp, index) => (
              <div
                key={index}
                className='flex items-center'
                onClick={() => {
                  setSelectedEspecialidad(esp);
                  setSelectedProfesional("");
                  setSelectedTipoCita("");
                  setIsEspecialidadOpen(false);
                  setIsProfesionalOpen(true);
                }}
              >
                <input
                  type='radio'
                  id={`especialidad-${index}`}
                  name='especialidad'
                  value={esp}
                  checked={selectedEspecialidad === esp}
                  className='mr-2'
                  onChange={() => setSelectedEspecialidad(esp)}
                />
                <label>{esp}</label>
              </div>
            ))}
          </div>
        </span>
      </label>

      <label className='block mb-4'>
        <input
          className='peer/profesional hidden'
          type='checkbox'
          checked={isProfesionalOpen}
          onClick={() => setIsProfesionalOpen(!isProfesionalOpen)}
          onChange={() => setIsProfesionalOpen(!isProfesionalOpen)}
          disabled={!selectedEspecialidad}
        />
        <span className='block rounded-lg bg-[#D9D9D9] px-4 shadow-lg transition-all duration-300 h-8 overflow-hidden peer-checked/profesional:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedProfesional ? (
              <div className='flex justify-between items-center w-full'>
                <p>{selectedProfesional}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Profesional"
            )}
          </h3>
          <div className='mt-2 space-y-2'>
            {selectedEspecialidad &&
              profesionales[selectedEspecialidad]?.map((prof, index) => (
                <div
                  key={index}
                  className='flex items-center'
                  onClick={() => {
                    setSelectedProfesional(prof);
                    setIsProfesionalOpen(false);
                    setIsTipoCitaOpen(true);
                  }}
                >
                  <input
                    type='radio'
                    id={`profesional-${index}`}
                    name='profesional'
                    value={prof}
                    checked={selectedProfesional === prof}
                    className='mr-2'
                    onChange={() => setSelectedProfesional(prof)}
                  />
                  <label>{prof}</label>
                </div>
              ))}
          </div>
        </span>
      </label>

      <label className='block mb-4'>
        <input
          className='peer/tipoCita hidden'
          type='checkbox'
          checked={isTipoCitaOpen}
          onClick={() => setIsTipoCitaOpen(!isTipoCitaOpen)}
          onChange={() => setIsTipoCitaOpen(!isTipoCitaOpen)}
          disabled={!selectedProfesional}
        />
        <span className='block rounded-lg  bg-[#D9D9D9] px-4 shadow-lg h-8 transition-all duration-700  overflow-hidden peer-checked/tipoCita:h-auto'>
          <h3 className='flex h-8 cursor-pointer items-center font-bold'>
            {selectedTipoCita ? (
              <div className='flex justify-between items-center w-full'>
                <p>{selectedTipoCita}</p>
                <img className='h-4' src={check} alt='' />
              </div>
            ) : (
              "Tipo de Cita"
            )}
          </h3>
          <div className='mt-2 space-y-2'>
            {selectedProfesional &&
              tiposCita.map((tipo, index) => (
                <div
                  key={index}
                  className='flex items-center'
                  onClick={() => {
                    setSelectedTipoCita(tipo);
                    setIsTipoCitaOpen(false);
                  }}
                >
                  <input
                    type='radio'
                    id={`tipoCita-${index}`}
                    name='tipoCita'
                    value={tipo}
                    checked={selectedTipoCita === tipo}
                    className='mr-2'
                    onChange={() => setSelectedTipoCita(tipo)}
                  />
                  <label>{tipo}</label>
                </div>
              ))}
          </div>
        </span>
      </label>
      <button onClick={show}>a</button>
    </div>
  );
};

export default NewTurn;

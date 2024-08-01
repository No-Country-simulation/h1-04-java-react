
const Section7 = () => {
  return (
    <div className="w-full py-24 flex flex-col items-center bg-white">
      {/* Título y descripción */}
      <div className="text-center mb-16">
        <div className="w-full text-center text-cyan-500 text-3xl font-semibold uppercase leading-tight mb-10">
          Sobre la campaña de Justina
        </div>
        <p className="text-[#555555] text-base font-semibold leading-tight max-w-2xl mx-auto">
          4 de julio del 2018, se enciende el cartel de la Cámara de Diputados de la Nación, y el capicúa dibuja la sonrisa en los millones de argentinos que comienzan a estar protegidos por la 
          <a 
            href="https://www.argentina.gob.ar/sites/default/files/ley-27447.pdf" 
            className="underline text-[#555555] hover:text-[#ff4900] cursor-pointer mx-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            #LeyJustina
          </a> 
          aprobada por unanimidad!
        </p>
      </div>
      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-lg mx-auto pb-8">
        {/* Tarjeta 1 */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src="https://via.placeholder.com/370x227" alt="Ley Justina" />
          <img className="w-40 h-6 absolute top-56 left-4" src="https://via.placeholder.com/156x22" alt="Logo" />
          <div className="p-6">
            <h3 className="text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Ley Justina: la conmovedora historia...
            </h3>
            <p className="text-[#555555] text-base font-normal font-['Outfit'] leading-tight mb-4">
              Justina Lo Cane, una niña de 12 años de aspecto angelical, esperó en vano, en 2017, la llegada de un corazón nuevo que nunca llegó.
            </p>
            <a href="#" className="text-[#707070] text-xl font-semibold font-['Josefin Sans'] underline uppercase">
              Leer más
            </a>
          </div>
        </div>
        {/* Tarjeta 2 */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src="https://via.placeholder.com/370x228" alt="Campaña Justina" />
          <img className="w-24 h-4 absolute top-56 left-4" src="https://via.placeholder.com/98x17" alt="Logo" />
          <div className="p-6">
            <h3 className="text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              Argentina. “En la vida real también podés hacER...
            </h3>
            <p className="text-[#555555] text-base font-normal font-['Outfit'] leading-tight mb-4">
              “En la vida real también podés hacer respawn”: la campaña de Casa Justina en el Día de Donación de Órganos. Tiene como objetivo alentar la ...
            </p>
            <a href="#" className="text-[#707070] text-xl font-semibold font-['Josefin Sans'] underline uppercase">
              Leer más
            </a>
          </div>
        </div>
        {/* Tarjeta 3 */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src="https://via.placeholder.com/370x227" alt="Justina Lidera" />
          <img className="w-16 h-5 absolute top-56 left-4" src="https://via.placeholder.com/60x20" alt="Logo" />
          <div className="p-6">
            <h3 className="text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              “Justina lidera desde la inspiración”
            </h3>
            <p className="text-[#555555] text-base font-normal font-['Outfit'] leading-tight mb-4">
              Desde un simple detalle hasta la más grande de las acciones pueden movilizar grandes cambios. ¿Cómo se empieza una campaña que involucra un objetivo tan grande?
            </p>
            <a href="#" className="text-[#707070] text-xl font-semibold font-['Josefin Sans'] underline uppercase">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;

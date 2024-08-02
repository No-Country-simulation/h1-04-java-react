import cardFacebook from '../../Assets/Imgs/facebook.png';
import cardLogoLaVoz from '../../Assets/Imgs/la-voz.png';
import cardLogoOsde from '../../Assets/Imgs/osde.png';
import imgCard1 from '../../Assets/Imgs/imgCard1.png';
import imgCard2 from '../../Assets/Imgs/imgCard2.png';
import imgCard3 from '../../Assets/Imgs/imgCard3.png';

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
        <div className=" bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
          <img className="w-full h-56 object-cover" src={imgCard1} alt="Ley Justina" />
          <img className="w-20 h-4 ml-6 mt-4" src={cardFacebook} alt="Logo" />
          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase mb-2">
            la campaña de Justina. #multiplicateX7
            </h3>
            <p className="text-[#555555] text-base font-normal leading-tight mb-4 flex-1">
            Hay no menos de 50 personas en el Penal San Martin de la provincia de Buenos Aires que estan recorriendo una transformación de la mano del equipo de...
            </p>
            <a  href="https://www.facebook.com/multiplicatex7/posts/pfbid014ZwDs82tZJsVn2rUkTBQqBHQ82xvFTMCH5YbKjgYYgUdWeaitHQ8NEKe9pB9uf7l"
                target="_blank"
                rel="noopener noreferrer" 
                className="pb-2 text-[#707070] text-xl font-semibold font-['Josefin Sans'] hover:text-[#ff4900] cursor-pointer underline uppercase">
              Leer más
            </a>
          </div>
        </div>
        {/* Tarjeta 2 */}
        <div className=" bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
          <img className="w-full h-56 object-cover" src={imgCard2} alt="Campaña Justina" />
          <img className="w-24 h-4 ml-6 mt-4" src={cardLogoLaVoz} alt="Logo" />
          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[#232233] text-xl font-semibold uppercase mb-2">
              Argentina. “En la vida real también podés hacER...
            </h3>
            <p className="text-[#555555] text-base font-normal leading-tight mb-4 flex-1">
              “En la vida real también podés hacer respawn”: la campaña de Casa Justina en el Día de Donación de Órganos. Tiene como objetivo alentar la donación en menores...
            </p>
            <a  href="https://www.lavoz.com.ar/ciudadanos/en-la-vida-real-tambien-podes-hacer-respawn-la-campana-de-casa-justina-en-el-dia-de-donacion-de-organos/"
                target="_blank"
                rel="noopener noreferrer"
                className="pb-2 text-[#707070] text-xl font-semibold font-['Josefin Sans'] hover:text-[#ff4900] cursor-pointer underline uppercase">
              Leer más
            </a>
          </div>
        </div>
        {/* Tarjeta 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
          <img className="w-full h-56 object-cover" src={imgCard3} alt="Justina Lidera" />
          <img className="w-16 h-5 ml-6 mt-4" src={cardLogoOsde} alt="Logo" />
          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[#232233] text-xl font-semibold font-['Josefin Sans'] uppercase mb-2">
              “Justina lidera desde la inspiración”
            </h3>
            <p className="text-[#555555] text-base font-normal leading-tight mb-4 flex-1">
              Desde un simple detalle hasta la más grande de las acciones pueden movilizar grandes cambios. ¿Cómo se empieza una campaña que involucra un objetivo tan grande?
            </p>
            <a  href="https://www.osde.com.ar/salud-y-bienestar/justina-lidera-desde-la-inspiracion-12052.html"
                target="_blank"
                rel="noopener noreferrer"
                className="pb-2 text-[#707070] text-xl font-semibold font-['Josefin Sans'] hover:text-[#ff4900] cursor-pointer underline uppercase">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;

/* eslint-disable react/prop-types */
import faceMedication from "../../../../Assets/Imgs/faceMedication.svg";
import more from "../../../../Assets/Imgs/arrowRight.png";
import SuccesModal from "../../../Modals/SucessModal";
import { useState } from "react";

const CardTreatmentFollowUp = ({ name }) => {
  const [showVerificando, setShowVerificando] = useState(false);
  console.log(showVerificando);

  return (
    <div
      className='shadow-xl mb-10 bg-white rounded-lg p-5'
      style={{
        width: "40%",
        border: "1px solid #cccbcb8b",
        marginLeft: "10px",
      }}
    >
      <p style={{ color: "#0C0252", marginBottom: "30px" }}>{name}</p>
      <img src={faceMedication} alt='Medicacion' className='w-15 h-15 m-auto' />
      <div
        onClick={() => setShowVerificando(true)}
        className='flex justify-center items-center mt-4 cursor-pointer'
      >
        <button style={{ color: "#0C0252" }}>Mas</button>
        <img src={more} alt='Mas' className='w-5 h-5' />
      </div>

      <SuccesModal
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
        none
        title='No disponible'
        text='Estamos trabajando en esta característica'
      />
    </div>
  );
};

export default CardTreatmentFollowUp;

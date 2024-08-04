/* eslint-disable react/prop-types */
import faceMedication from "../../../../Assets/Imgs/faceMedication.svg"
import more from "../../../../Assets/Imgs/arrowRight.png"

const CardTreatmentFollowUp = ({ name }) => {
    return (
        <div className="shadow-xl mb-10 rounded-lg p-5" style={{width:"40%", border:"1px solid #cccbcb8b", marginLeft:"10px"}}>
            <p style={{color:"#0C0252", marginBottom:"30px"}}>{name}</p>
            <img src={faceMedication} alt="Medicacion" className="w-15 h-15 m-auto" />
            <div className="flex justify-center items-center mt-4">
                <button style={{color:"#0C0252"}}>Mas</button>
                <img src={more} alt="Mas" className="w-5 h-5" />
            </div>
        </div>
    )
}

export default CardTreatmentFollowUp
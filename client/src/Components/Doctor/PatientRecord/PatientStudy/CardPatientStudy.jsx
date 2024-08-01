/* eslint-disable react/prop-types */
import patientStydy from "../../../../Assets/Imgs/patientStydy.png"

const CardPatientStudy = ({title, date}) => {
    return (
        <div className="flex items-center shadow-xl m-5 rounded-md mb-10 p-3" style={{border:"1px solid #CCCBCB"}}>
            <img src={patientStydy} alt="patientStydy" />
            <div className="ml-2">
                <h3 className="font-semibold">{title}</h3>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default CardPatientStudy
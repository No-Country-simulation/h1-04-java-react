/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import arrowBlue from "../../../Assets/Imgs/arrowBlue.svg";
import "./patientHeader.css"

export default function PatientHeader(props) {
    const navigate = useNavigate();

    return (
        <button className='backPagePatient' onClick={() => navigate(-1)}>
            <img src={arrowBlue} alt='back' />
            <p>{props.text}</p>
        </button>
    );
}
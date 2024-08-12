/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const CardTreatments = ({ url, backColor, textColor, image, text  }) => {
    return (
        <Link to={url} style={{backgroundColor:`${backColor}`, color:`${textColor}`}} className='treatmentsStyles'>
            <img src={image} alt="img" />
            <p>{text}</p>
        </Link>
    )
}

export default CardTreatments
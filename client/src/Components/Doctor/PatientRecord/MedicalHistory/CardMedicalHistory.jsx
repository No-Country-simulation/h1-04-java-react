import { useState } from "react"

const CardMedicalHistory = () => {
    const [viewDetails, setViewDetails] = useState(false)

    const Details = () =>{
        return (
            <div className="mt-5">
                <h3 className="mb-1 font-semibold">Tipo de cita</h3>
                <p>How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs</p>
                <br />
                <h3 className="mb-1 font-semibold">Tipo de cita</h3>
                <p>How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs</p>
            </div>
        )
    }

    const handleViewDetails = () =>{
        setViewDetails(!viewDetails)
    }

    return (
        <div className="text-left shadow-xl mb-10 rounded-lg p-7 m-5">
            <button onClick={handleViewDetails} className="text-left">
                <h3 className="mb-1 font-semibold"><span>Tipo de cita</span> - Fecha <span>DD/MM/AAAA</span></h3>
                <p>How to install dependencies and structure your app. Styles for headings, paragraphs, lists...etc Styles for headings, paragraphs, </p>
            </button>
            { viewDetails && (
                <Details />
            ) }
        </div>
    )
}

export default CardMedicalHistory
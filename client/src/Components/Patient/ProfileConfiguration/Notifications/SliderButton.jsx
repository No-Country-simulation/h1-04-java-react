/* eslint-disable react/prop-types */
import { useState } from "react"
import trueImage from "../../../../Assets/Imgs/trueImage.png"
import falseImage from "../../../../Assets/Imgs/falseImage.png"

const SliderButton = ({name}) => {
    const [sliderButton, setSliderButton] = useState(false)

    const handlechange = () =>{
        setSliderButton(!sliderButton)
    }

    return (
        <button className="flex justify-between items-center w-full mb-3 font-medium" onClick={() => handlechange()}>
            <p>{name}</p>
            { sliderButton ? (
                <img className="justify-end w-9 h-6" src={trueImage} alt="true image" />
            ) : (
                <img className="justify-end w-9 h-6" src={falseImage} alt="false image" />
            ) }
        </button>
    )
}

export default SliderButton
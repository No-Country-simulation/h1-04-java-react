import React, { useContext, useEffect, useState } from "react";
import useSpeechRecognition from "../../../hooks/useSpeechRecognition";
import speak from "../../../Assets/Imgs/speak.png";
import DoctorContext from "../../../context/DoctorContext";

export default function SpeechRecognition() {
  const {
    text: recognizedText,
    listening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  const [text, setText] = useState("");

  const { setRecognizedText } = useContext(DoctorContext);

  useEffect(() => {
    if (recognizedText) {
      setText((prevText) => prevText + " " + recognizedText);
      setRecognizedText((prevText) => prevText + " " + recognizedText);
    }
  }, [recognizedText, setRecognizedText]);

  const handleChange = (event) => {
    setText(event.target.value);
    setRecognizedText(event.target.value);
  };

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const bgColor = listening ? "bg-primary" : "bg-secondary";
  const buttonText = listening ? "Escuchando..." : "Empezar.";

  return (
    <>
      {hasRecognitionSupport ? (
        <div className='flex flex-col w-full'>
          <div className='w-full flex flex-col p-5 bg-white rounded-xl boxCotent mb-4 mt-5'>
            <h3 className='font-semibold'>Notas de la consulta</h3>
            <textarea
              value={text}
              onChange={handleChange}
              className='border-2 bg-white text-start rounded-xl resize-none mt-3 min-h-[15vh] mb-4'
            ></textarea>
          </div>

          <div className='flex-col flex justify-center items-center'>
            <button onClick={toggleListening}>
              <img
                className={`w-10 ${bgColor} p-2 rounded-full boxCotent mb-0`}
                src={speak}
                alt={buttonText}
              />
            </button>
            <p>{buttonText}</p>
          </div>
        </div>
      ) : (
        <h1>browser</h1>
      )}
    </>
  );
}

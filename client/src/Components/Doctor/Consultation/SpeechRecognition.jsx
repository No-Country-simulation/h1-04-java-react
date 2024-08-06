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

  const bgColor = listening ? "bg-primary" : "bg-secondary";

  return (
    <>
      {hasRecognitionSupport ? (
        <div className='flex flex-col w-full'>
          <textarea
            value={text}
            onChange={handleChange}
            className='border-2 bg-white text-start border-black rounded resize-none mt-3 min-h-[15vh] mb-4'
          ></textarea>

          <div className='flex-col flex justify-center items-center'>
            <button onClick={startListening}>
              <img
                className={`w-10 ${bgColor} p-2 rounded-full`}
                src={speak}
                alt='Hablar'
              />
            </button>

            <button onClick={stopListening}>Stop</button>
          </div>
        </div>
      ) : (
        <h1>browser</h1>
      )}
    </>
  );
}

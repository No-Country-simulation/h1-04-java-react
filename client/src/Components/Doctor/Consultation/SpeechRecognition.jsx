import useSpeechRecognition from "../../../hooks/useSpeechRecognition";
import speak from "../../../Assets/Imgs/speak.png";
import { useContext, useEffect } from "react";
import DoctorContext from "../../../context/DoctorContext";

export default function SpeechRecognition() {
  const {
    text,
    listening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  const { setRecognizedText } = useContext(DoctorContext);
  useEffect(() => {
    setRecognizedText(text);
  }, [text, setRecognizedText]);
  const bgColor = listening ? "bg-primary" : "bg-secondary";
  return (
    <div>
      {hasRecognitionSupport ? (
        <div className='flex flex-col'>
          <div className='border-2 bg-white text-start  border-black rounded resize-none w-96 mt-3 min-h-[15vh] mb-4'>
            {text}
          </div>

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
    </div>
  );
}

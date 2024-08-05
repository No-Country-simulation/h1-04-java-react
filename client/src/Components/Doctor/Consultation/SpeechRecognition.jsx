import useSpeechRecognition from "../../../hooks/useSpeechRecognition";
import speak from "../../../Assets/Imgs/speak.png";

export default function SpeechRecognition() {
  const {
    text,
    listening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  const bgColor = listening ? "bg-primary" : "bg-secondary";
  return (
    <div>
      { hasRecognitionSupport ? (
        <>
          <div className='border-2 border-black rounded resize-none w-full min-h-[15vh] mb-4'>
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
        </>
      ) : (
        <h1>browser</h1>
      ) }
    </div>
  );
}
import React from "react";
import useSpeechRecognition from "../../../hooks/useSpeechRecognition";
export default function SpeechRecognition() {
  const {
    text,
    listening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div className='flex-col flex'>
            <button onClick={startListening}>Start</button>
            <button onClick={stopListening}>Stop</button>
          </div>
          {listening ? <div>listening</div> : null}
          {text}
          <h1>a</h1>
        </>
      ) : (
        <h1>browser</h1>
      )}
    </div>
  );
}

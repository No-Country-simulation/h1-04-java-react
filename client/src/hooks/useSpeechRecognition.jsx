import { useEffect, useState } from "react";

let recognition = null;

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "es-ESP";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  useEffect(() => {
    if (!recognition) return;
    recognition.onresult = (event) => {
      console.log(event, "aaaa");
      setText(event.results[0][0].transcript);
      recognition.stop();
      setListening(false);
    };
  }, []);

  const startListening = () => {
    setText("");
    setListening(true);
    recognition.start();
  };
  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };
  return {
    text,
    listening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;

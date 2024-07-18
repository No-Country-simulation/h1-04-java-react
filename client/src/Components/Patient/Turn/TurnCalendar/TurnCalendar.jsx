import React, { useState } from "react";
import Calendar from "../../../../helpers/atoms/Calendar";
import Turns from "../Turns";
import { Link } from "react-router-dom";
import SuccesModal from "../../../Modals/SucessModal";

export default function TurnCalendar() {
  const [showVerificando, setShowVerificando] = useState(false);
  return (
    <div className='mt-0'>
      <Calendar />
      <Turns
        doctor={"Dr. Juan Torres"}
        time={"8:30 hs."}
        href={"/"}
        type={"Control"}
      />
      <Turns
        doctor={"Dr. Juan Torres"}
        time={"8:30 hs."}
        href={"/"}
        type={"Control"}
      />
      <Turns
        doctor={"Dr. Juan Torres"}
        time={"8:30 hs."}
        href={"/"}
        type={"Control"}
      />
      <Turns
        doctor={"Dr. Juan Torres"}
        time={"8:30 hs."}
        href={"/"}
        type={"Control"}
      />
      <Turns
        doctor={"Dr. Juan Torres"}
        time={"8:30 hs."}
        href={"/"}
        type={"Control"}
      />
      <button className='rounded-full border-black border w-10 h-10 text-3xl pb-9  bottom-3 sticky bg-white'>
        <Link to={"/new-turn"}>+</Link>
      </button>
      <div className='App'>
        <button onClick={() => setShowVerificando(true)} className='btn'>
          Verificando
        </button>

        <SuccesModal
          show={showVerificando}
          onClose={() => setShowVerificando(false)}
        />
      </div>
    </div>
  );
}

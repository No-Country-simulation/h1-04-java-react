import React from "react";
import Calendar from "../../../../helpers/atoms/Calendar";
import Turns from "../Turns";
import { Link } from "react-router-dom";

export default function TurnCalendar() {
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
      <button className='rounded-full border-black border w-10 h-10 text-3xl pb-9 left-80 bottom-3 sticky bg-white'>
        <Link to={"/new-turn"}>+</Link>
      </button>
    </div>
  );
}

import React from "react";

export default function EndButton(props) {
  return (
    <button
      onClick={() => props.show(true)}
      className='bg-blue-400 text-white md:w-1/2 mt-10 py-2 w-full text-center rounded'
    >
      {props.text}
    </button>
  );
}

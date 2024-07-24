import React from "react";

export default function Dates(props) {
  return (
    <div className='border-blue-300 text-blue-400 font-bold border-2 inline-block  w-32 text-center py-2'>
      {props.time}
    </div>
  );
}

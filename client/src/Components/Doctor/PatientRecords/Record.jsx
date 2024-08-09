import React from "react";
import { Link } from "react-router-dom";

export default function Record({ imgSrc, text, onClick }) {
  return (
    <Link to={"#"} onClick={onClick} className='treatmentsStylesDoctor'>
      <img className='w-8' src={imgSrc} alt={text} />
      <p>{text}</p>
    </Link>
  );
}

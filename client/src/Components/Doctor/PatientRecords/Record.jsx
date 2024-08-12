import React from "react";
import { Link } from "react-router-dom";

export default function Record({ imgSrc, text, onClick, link }) {
  const content = (
    <div onClick={onClick} className='treatmentsStylesDoctor cursor-pointer'>
      <img className='w-8' src={imgSrc} alt={text} />
      <p>{text}</p>
    </div>
  );

  return link ? (
    <Link to={link} className='treatmentsStylesDoctor'>
      <img className='w-8' src={imgSrc} alt={text} />
      <p>{text}</p>
    </Link>
  ) : (
    content
  );
}

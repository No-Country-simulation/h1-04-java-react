import React from "react";
import { Link } from "react-router-dom";

export default function CardPatient(props) {
  return (
    <Link to={"/treatments"}>
      <div className='flex items-center w-full'>
        <div className=' text-gray-500 border-l-2 border-gray-800 pl-5'>
          {props.time}
        </div>

        <div
          key={props.index}
          className='flex w-full shadow items-center space-x-4  p-3 rounded mb-2'
        >
          <div className='bg-purple-300 text-white rounded-full w-10 h-10 flex items-center justify-center'>
            Undo
          </div>
          <div>
            <div className='text-blue-600'>{props.description}</div>
            <div className='text-gray-500'>{props.date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

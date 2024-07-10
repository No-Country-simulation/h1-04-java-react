<div className='flex justify-center gap-2 w-full items-center flex-wrap'>
  <ProfileButton text='Historial clinico' />
  <ProfileButton text='Estudios' />
  <ProfileButton text='Tratamiento' />
  <ProfileButton text='Medicacion' />
  <ProfileButton text='Notas' />
  <ProfileButton text='Laboratorio' />
</div>;

import React from "react";

export default function ProfileButton(props) {
  return (
    <div className='bg-slate-400 py-4 text-center px-4 text-lg font-semibold w-[48%]'>
      {props.text}
    </div>
  );
}

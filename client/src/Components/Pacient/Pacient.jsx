import React from "react";
import ProfileButton from "../../helpers/atoms/ProfileButton";
import ButtonComponent from "../../helpers/atoms/ButtonComponent";
import IconComponent from "../../helpers/atoms/IconComponent";

export default function Pacient() {
  const name = "Julie Smith";
  return (
    <div className=' w-[360px]  '>
      <div className=''>
        <h2>En sesion</h2>

        <div className='flex flex-col items-center'>
          <img
            className='w-10'
            src='https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'
            alt=''
            srcset=''
          />
          <h3>{name}</h3>
          <p className='mt-2'>Informacion Relevante</p>
          <button className='border border-black rounded-lg px-3 mt-4'>
            Perfil completo
          </button>
        </div>
        <div className='flex justify-center gap-2 mt-4 w-full items-center flex-wrap'>
          <ProfileButton text='Historial clinico' />
          <ProfileButton text='Estudios' />
          <ProfileButton text='Tratamiento' />
          <ProfileButton text='Medicacion' />
          <ProfileButton text='Notas' />
          <ProfileButton text='Laboratorio' />
        </div>
        <div className='flex flex-col items-center mt-3'>
          <img
            className='w-16'
            src='https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'
            alt=''
            srcset=''
          />
          Grabar sesion
        </div>
        <div className='flex justify-center mt-4'>
          <ButtonComponent theme='secondary' to='/registro' className='w-full'>
            Finalizar consulta
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import tilde from "../../Assets/Imgs/tilde.png";
import "../Patient/ProfileConfiguration/profileConfiguration.css"

const PersonalData = ({ user }) => {
  return (
    <section>
      <div className='validation flex items-center justify-between text-secondary font-bold gap-2'>
        <p>Identidad Validada</p>
        <img src={tilde} alt='Tilde' className='w-6' />
      </div>
      <div className='flex flex-col'>
        <div className="mb-3">
          <h3 className='font-semibold'>Nombre y Apellido</h3>
          <p>{user.firstName + " " + user.lastName}</p>
        </div>

        <div className="mb-3">
          <h3 className='font-semibold'>Documento de Identidad</h3>
          <p>{user.document.documentNumber}</p>
        </div>

        <div className="mb-3">
          <h3 className='font-semibold'>Correo Electrónico</h3>
          <p>{user.email}</p>
        </div>

        <div className="mb-3">
          <h3 className='font-semibold'>Número de Teléfono</h3>
          <p>{user.phone}</p>
        </div>

        <div className="mb-3">
          <h3 className='font-semibold'>Domicilio</h3>
          <p>{`${user.address.street} ${user.address.number} ${user.address.district} `}</p>
        </div>

        <div className="mb-3">
          <h3 className='font-semibold'>Ciudad</h3>
          <p>{`${user.address.city} ${user.address.province}`} </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;

/* eslint-disable react/prop-types */
import tilde from "../../Assets/Imgs/tilde.png";

const PersonalData = ({ user }) => {
  return (
    <section>
      <div className='flex items-center justify-end text-secondary font-bold gap-2'>
        <p>Identidad Validada</p>
        <img src={tilde} alt='Tilde' className='w-6' />
      </div>
      <div className='divide-y-2 flex flex-col'>
        <div>
          <h3 className='text-orangeColor font-semibold'>Nombre y Apellido</h3>
          <p>{user.firstName + " " + user.lastName}</p>
        </div>

        <div>
          <h3 className='text-orangeColor font-semibold'>
            Documento de Identidad
          </h3>
          <p>{user.document.documentNumber}</p>
        </div>

        <div>
          <h3 className='text-orangeColor font-semibold'>Correo Electrónico</h3>
          <p>{user.email}</p>
        </div>

        <div>
          <h3 className='text-orangeColor font-semibold'>Número de Teléfono</h3>
          <p>{user.phone}</p>
        </div>

        <div>
          <h3 className='text-orangeColor font-semibold'>Domicilio</h3>
          <p>{`${user.address.street} ${user.address.number} ${user.address.district} `}</p>
        </div>

        <div>
          <h3 className='text-orangeColor font-semibold'>Ciudad</h3>
          <p>{`${user.address.city} ${user.address.province}`} </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;

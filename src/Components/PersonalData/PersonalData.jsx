/* eslint-disable react/prop-types */
import "../Patient/ProfileConfiguration/profileConfiguration.css"

const PersonalData = ({ user }) => {
  return (
    <section className="containerPersonalDa">
      <div className='flex flex-col'>
        <div className="pb-3">
          <h3 className='font-semibold'>Nombre y Apellido</h3>
          <p style={{color:"#0087D099"}}>{user.firstName + " " + user.lastName}</p>
        </div>

        <div className="pb-3">
          <h3 className='font-semibold'>Documento de Identidad</h3>
          <p style={{color:"#0087D099"}}>{user.document.documentNumber}</p>
        </div>

        <div className="pb-3">
          <h3 className='font-semibold'>Correo Electrónico</h3>
          <p style={{color:"#0087D099"}}>{user.email}</p>
        </div>

        <div className="pb-3">
          <h3 className='font-semibold'>Número de Teléfono</h3>
          <p style={{color:"#0087D099"}}>{user.phone}</p>
        </div>

        <div className="pb-3">
          <h3 className='font-semibold'>Domicilio</h3>
          <p style={{color:"#0087D099"}}>{`${user.address.street} ${user.address.number} ${user.address.district} `}</p>
        </div>

        <div className="pb-3">
          <h3 className='font-semibold'>Ciudad</h3>
          <p style={{color:"#0087D099"}}>{`${user.address.city} ${user.address.province}`} </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
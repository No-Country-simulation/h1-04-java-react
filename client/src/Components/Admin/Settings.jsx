import { useState } from 'react';

const Settings = () => {
  const [adminData, setAdminData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    tipoDocumento: '',
    nroDocumento: '',
    calle: '',
    numero: '',
    barrio: '',
    ciudad: '',
    provincia: '',
    codigoPostal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos actualizados del admin
    console.log('Datos actualizados:', adminData);
  };

  return (
    <div className="p-2 font-roboto text-sm">
      <h2 className="text-lg font-semibold mb-4">Configuración</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label htmlFor="nombre" className="block text-base font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={adminData.nombre}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block text-base font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={adminData.apellido}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={adminData.email}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-base font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={adminData.telefono}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="fechaNacimiento" className="block text-base font-medium text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={adminData.fechaNacimiento}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="tipoDocumento" className="block text-base font-medium text-gray-700">Tipo de Documento</label>
            <input
              type="text"
              id="tipoDocumento"
              name="tipoDocumento"
              value={adminData.tipoDocumento}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nroDocumento" className="block text-base font-medium text-gray-700">Nro Documento</label>
            <input
              type="text"
              id="nroDocumento"
              name="nroDocumento"
              value={adminData.nroDocumento}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label htmlFor="calle" className="block text-base font-medium text-gray-700">Calle</label>
            <input
              type="text"
              id="calle"
              name="calle"
              value={adminData.calle}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="numero" className="block text-base font-medium text-gray-700">Número</label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={adminData.numero}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="barrio" className="block text-base font-medium text-gray-700">Barrio</label>
            <input
              type="text"
              id="barrio"
              name="barrio"
              value={adminData.barrio}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="ciudad" className="block text-base font-medium text-gray-700">Ciudad</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={adminData.ciudad}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="provincia" className="block text-base font-medium text-gray-700">Provincia</label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              value={adminData.provincia}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="codigoPostal" className="block text-base font-medium text-gray-700">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={adminData.codigoPostal}
              onChange={handleChange}
              className="mt-1 p-1 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded-md transition-colors duration-300 hover:bg-blue-600"
          >
            Actualizar Datos
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md transition-colors duration-300 hover:bg-red-600"
          >
            Actualizar Password
          </button>
        </div>
      </form>
      <div className="mt-4">
  
      </div>
    </div>
  );
};

export default Settings;

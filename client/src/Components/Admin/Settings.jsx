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

  const isFieldEmpty = (field) => {
    // Validación sólo para los campos obligatorios
    const requiredFields = ['nombre', 'apellido', 'email', 'telefono', 'fechaNacimiento', 'tipoDocumento', 'nroDocumento'];
    return requiredFields.includes(field) && !adminData[field];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos actualizados del admin
    console.log('Datos actualizados:', adminData);
  };

  return (
    <div className="p-2 font-roboto text-sm h-screen ">
      <h2 className="text-lg font-semibold mb-4 text-left">Configuración</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label htmlFor="nombre" className="block text-base font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={adminData.nombre}
              onChange={handleChange}
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('nombre') ? 'border-red-500' : 'border-blue-500'}`}
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
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('apellido') ? 'border-red-500' : 'border-blue-500'}`}
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
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('email') ? 'border-red-500' : 'border-blue-500'}`}
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
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('telefono') ? 'border-red-500' : 'border-blue-500'}`}
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
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('fechaNacimiento') ? 'border-red-500' : 'border-blue-500'}`}
            />
          </div>
          <div>
            <label htmlFor="tipoDocumento" className="block text-base font-medium text-gray-700">Tipo de Documento</label>
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              value={adminData.tipoDocumento}
              onChange={handleChange}
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('tipoDocumento') ? 'border-red-500' : 'border-blue-500'}`}
            >
              <option value="">Seleccione Tipo de Documento</option>
              <option value="DNI">DNI</option>
              <option value="LE">LE</option>
              <option value="LC">LC</option>
              <option value="PASAPORTE">Pasaporte</option>
              <option value="CUIL">CUIL</option>
              <option value="CUIT">CUIT</option>
              <option value="ID_EXTRANJERO">ID Extranjero</option>
            </select>
          </div>
          <div>
            <label htmlFor="nroDocumento" className="block text-base font-medium text-gray-700">Nro Documento</label>
            <input
              type="text"
              id="nroDocumento"
              name="nroDocumento"
              value={adminData.nroDocumento}
              onChange={handleChange}
              className={`w-[90%] mt-1 p-1 border text-sm rounded ${isFieldEmpty('nroDocumento') ? 'border-red-500' : 'border-blue-500'}`}
            />
          </div>
          <div>
            <label htmlFor="calle" className="block text-base font-medium text-gray-700">Calle</label>
            <input
              type="text"
              id="calle"
              name="calle"
              value={adminData.calle}
              onChange={handleChange}
              className="w-[90%] mt-1 p-1 border text-sm rounded border-blue-500"
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
              className="w-[90%] mt-1 p-1 border text-sm rounded border-blue-500"
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
              className="w-[90%] mt-1 p-1 border text-sm rounded border-blue-500"
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
              className="w-[90%] mt-1 p-1 border text-sm rounded border-blue-500"
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
              className="w-[90%] mt-1 p-1 border text-sm rounded border-blue-500"
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
              className="w-[90%] mt-1 p-1 border text-sm rounded border-blue-500"
            />
          </div>
          <div className="mt-5">
            <h4 className='pb-2 text-lg font-base text-red-600'>*Los campos en rojo son obligatorios.</h4>
          </div>
        </div>
        <div className="flex justify-between pt-8">
          <button
            type="submit"
            className="w-[48%] border border-[#0087d0] text-[#0087d0] hover:bg-[#c7e3f7] font-bold py-2 px-4 rounded"
          >
            Actualizar Datos
          </button>
          <button
            className="w-[48%] hover:bg-[#fde0e0] text-white hover:text-red-600 font-bold py-2 px-4 rounded border bg-[#e4626f] border-[#e4626f]"
          >
            Actualizar Password
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Settings;

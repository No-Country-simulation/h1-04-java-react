import { useState } from 'react';

const AddPatientForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    nroDocumento: '',
    obraSocial: '',
  });

  const [modal, setModal] = useState({
    isOpen: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFieldEmpty = (field) => !formData[field];

  const validateForm = () => {
    const requiredFields = ['nombre', 'apellido', 'email', 'dni', 'nroDocumento', 'obraSocial'];
    for (let field of requiredFields) {
      if (isFieldEmpty(field)) return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simular guardado exitoso y envío de correo
      setModal({
        isOpen: true,
        message: 'Paciente guardado con éxito. Se ha enviado un correo con las credenciales.',
      });
    } else {
      setModal({
        isOpen: true,
        message: 'Por favor, complete todos los campos obligatorios.',
      });
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-center">Agregar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('nombre') ? 'border-red-500' : 'border-blue-500'}`}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('apellido') ? 'border-red-500' : 'border-blue-500'}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('email') ? 'border-red-500' : 'border-blue-500'}`}
          />
          <select
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('dni') ? 'border-red-500' : 'border-blue-500'}`}
          >
            <option value="">Seleccione Tipo de Documento</option>
            <option value="DNI">DNI</option>
            <option value="LE">LE</option>
            <option value="LC">LC</option>
            <option value="PASSPORT">PASAPORTE</option>
            <option value="CUIL">CUIL</option>
            <option value="CUIT">CUIT</option>
            <option value="FOREIGN_ID">ID_EXTRANJERO</option>
          </select>
          <input
            type="text"
            name="nroDocumento"
            placeholder="Nro Documento"
            maxLength="8"
            value={formData.nroDocumento}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('nroDocumento') ? 'border-red-500' : 'border-blue-500'}`}
          />
          <select
            name="obraSocial"
            value={formData.obraSocial}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('obraSocial') ? 'border-red-500' : 'border-blue-500'}`}
          >
            <option value="">Seleccione Obra Social</option>
            <option value="OSDE">OSDE</option>
            <option value="Medicus">Medicus</option>
            <option value="Galeno">Galeno</option>
            <option value="Sancor Salud">Sancor Salud</option>
            <option value="Federada Salud">Federada Salud</option>
            <option value="Unión Personal">Unión Personal</option>
            <option value="IOMA">IOMA</option>
            <option value="PAMI">PAMI</option>
            <option value="Swiss Medical">Swiss Medical</option>
            <option value="Hospital Italiano">Hospital Italiano</option>
            <option value="No Tiene">No Tiene</option>
          </select>
          <input type="text" placeholder="Teléfono" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Calle / Manzana" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Número / Lote" className="border p-1 text-sm rounded" />
          <input type="date" placeholder="Fecha Nacimiento" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Barrio" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Ciudad" className="border p-1 text-sm rounded" />
          <select className="border p-1 text-sm rounded">
            <option value="">Seleccione Grupo Sanguíneo</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <input type="text" placeholder="Provincia" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Código Postal" className="border p-1 text-sm rounded" />

          <div className="col-span-1 col-start-1">
            <label className="block mb-2 text-sm">¿Tiene alguna patología?</label>
            <div className="flex items-center mb-2">
              <input type="radio" name="pathologies" value="Sí" className="mr-2" /> Sí
              <input type="radio" name="pathologies" value="No" className="ml-4 mr-2" /> No
            </div>
            <textarea placeholder="Describa las patologías" className="border p-1 text-sm rounded w-full h-[4.2rem]"></textarea>
          </div>

          <div className="col-span-1 col-start-2">
            <label className="block mb-2 text-sm">¿Tiene Tratamientos Activos?</label>
            <div className="flex items-center mb-2">
              <input type="radio" name="treatments" value="Sí" className="mr-2" /> Sí
              <input type="radio" name="treatments" value="No" className="ml-4 mr-2" /> No
            </div>
            <textarea placeholder="Describa los tratamientos" className="border p-1 text-sm rounded w-full h-[4.2rem]"></textarea>
          </div>

          <div className="col-span-1 col-start-3">
            <label className="block mb-2 text-sm">¿Tiene Tutor o encargado?</label>
            <div className="flex items-center mb-2">
              <input type="radio" name="guardian" value="Sí" className="mr-2" /> Sí
              <input type="radio" name="guardian" value="No" className="ml-4 mr-2" /> No
            </div>
            <input type="text" placeholder="Nombre Completo Tutor" className="border p-1 text-sm rounded w-full mb-2" />
            <input type="text" placeholder="Teléfono Tutor" className="border p-1 text-sm rounded w-full" />
          </div>

          <div className="col-span-1 col-start-1">
            <label className="block mb-2 text-sm">¿Tiene Transplante?</label>
            <div className="flex items-center mb-2">
              <input type="radio" name="transplant" value="Sí" className="mr-2" /> Sí
              <input type="radio" name="transplant" value="No" className="ml-4 mr-2" /> No
            </div>
            <textarea placeholder="Describa los transplantes" className="border p-1 text-sm rounded w-full h-[4.2rem]"></textarea>
          </div>

          <div className="col-span-1 col-start-2">
            <label className="block mb-2 text-sm">¿Está tomando alguna medicación?</label>
            <div className="flex items-center mb-2">
              <input type="radio" name="medication" value="Sí" className="mr-2" /> Sí
              <input type="radio" name="medication" value="No" className="ml-4 mr-2" /> No
            </div>
            <textarea placeholder="Describa las medicaciones" className="border p-1 text-sm rounded w-full h-[4.2rem]"></textarea>
          </div>

          <div className="flex flex-col items-center justify-evenly col-span-1 col-start-3">
            <h4 className='pb-2 text-md font-base text-red-600'>*Los campos en rojo son obligatorios.</h4>
            <button type="submit" className="w-52 border border-[#0087d0] text-[#0087d0] hover:bg-[#bee1f8] font-bold py-2 px-4 rounded">Guardar</button>
            <button type="button" onClick={onClose} className="w-52 hover:bg-[#fde0e0] text-white hover:text-red-600 font-bold py-2 px-4 rounded border bg-[#e4626f] border-[#e4626f]">Cerrar</button>
          </div>
        </div>
      </form>

      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPatientForm;

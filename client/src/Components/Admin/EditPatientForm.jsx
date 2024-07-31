import { useState } from 'react';

const EditPatientForm = ({ patient, onClose }) => {
  const [formData, setFormData] = useState(patient);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFieldEmpty = (field) => !formData[field];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-center">Editar Paciente</h2>
      <form>
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
            <option value="">Seleccione DNI</option>
            <option value="DNI">DNI</option>
            <option value="LC">LC</option>
            <option value="LE">LE</option>
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
            <option value="Swiss Medical">Swiss Medical</option>
            <option value="PAMI">PAMI</option>
            <option value="No Tiene">No Tiene</option>
          </select>
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="calle"
            placeholder="Calle / Manzana"
            value={formData.calle || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="numero"
            placeholder="Número / Lote"
            value={formData.numero || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="date"
            name="fechaNacimiento"
            placeholder="Fecha Nacimiento"
            value={formData.fechaNacimiento || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="barrio"
            placeholder="Barrio"
            value={formData.barrio || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <select
            name="grupoSanguineo"
            value={formData.grupoSanguineo || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          >
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
          <input
            type="text"
            name="provincia"
            placeholder="Provincia"
            value={formData.provincia || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="codigoPostal"
            placeholder="Código Postal"
            value={formData.codigoPostal || ''}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />

          <div className="col-span-1 col-start-1">
            <label className="block mb-2 text-sm">¿Tiene alguna patología?</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="patologias"
                value="Sí"
                checked={formData.patologias === 'Sí'}
                onChange={handleChange}
                className="mr-2"
              /> Sí
              <input
                type="radio"
                name="patologias"
                value="No"
                checked={formData.patologias === 'No'}
                onChange={handleChange}
                className="ml-4 mr-2"
              /> No
            </div>
            <textarea
              name="descripcionPatologias"
              placeholder="Describa las patologías"
              value={formData.descripcionPatologias || ''}
              onChange={handleChange}
              className="border p-1 text-sm rounded w-full h-[4.2rem]"
            ></textarea>
          </div>

          <div className="col-span-1 col-start-2">
            <label className="block mb-2 text-sm">¿Tiene Tratamientos Activos?</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="tratamientos"
                value="Sí"
                checked={formData.tratamientos === 'Sí'}
                onChange={handleChange}
                className="mr-2"
              /> Sí
              <input
                type="radio"
                name="tratamientos"
                value="No"
                checked={formData.tratamientos === 'No'}
                onChange={handleChange}
                className="ml-4 mr-2"
              /> No
            </div>
            <textarea
              name="descripcionTratamientos"
              placeholder="Describa los tratamientos"
              value={formData.descripcionTratamientos || ''}
              onChange={handleChange}
              className="border p-1 text-sm rounded w-full h-[4.2rem]"
            ></textarea>
          </div>

          <div className="col-span-1 col-start-3">
            <label className="block mb-2 text-sm">¿Tiene Tutor o encargado?</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="tutor"
                value="Sí"
                checked={formData.tutor === 'Sí'}
                onChange={handleChange}
                className="mr-2"
              /> Sí
              <input
                type="radio"
                name="tutor"
                value="No"
                checked={formData.tutor === 'No'}
                onChange={handleChange}
                className="ml-4 mr-2"
              /> No
            </div>
            <input
              type="text"
              name="nombreTutor"
              placeholder="Nombre Completo Tutor"
              value={formData.nombreTutor || ''}
              onChange={handleChange}
              className="border p-1 text-sm rounded w-full mb-2"
            />
            <input
              type="text"
              name="telefonoTutor"
              placeholder="Teléfono Tutor"
              value={formData.telefonoTutor || ''}
              onChange={handleChange}
              className="border p-1 text-sm rounded w-full"
            />
          </div>

          <div className="col-span-1 col-start-1">
            <label className="block mb-2 text-sm">¿Tiene Transplante?</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="transplante"
                value="Sí"
                checked={formData.transplante === 'Sí'}
                onChange={handleChange}
                className="mr-2"
              /> Sí
              <input
                type="radio"
                name="transplante"
                value="No"
                checked={formData.transplante === 'No'}
                onChange={handleChange}
                className="ml-4 mr-2"
              /> No
            </div>
            <textarea
              name="descripcionTransplante"
              placeholder="Describa los transplantes"
              value={formData.descripcionTransplante || ''}
              onChange={handleChange}
              className="border p-1 text-sm rounded w-full h-[4.2rem]"
            ></textarea>
          </div>

          <div className="col-span-1 col-start-2">
            <label className="block mb-2 text-sm">¿Está tomando alguna medicación?</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="medicacion"
                value="Sí"
                checked={formData.medicacion === 'Sí'}
                onChange={handleChange}
                className="mr-2"
              /> Sí
              <input
                type="radio"
                name="medicacion"
                value="No"
                checked={formData.medicacion === 'No'}
                onChange={handleChange}
                className="ml-4 mr-2"
              /> No
            </div>
            <textarea
              name="descripcionMedicacion"
              placeholder="Describa las medicaciones"
              value={formData.descripcionMedicacion || ''}
              onChange={handleChange}
              className="border p-1 text-sm rounded w-full h-[4.2rem]"
            ></textarea>
          </div>

          <div className="flex flex-col items-center justify-evenly col-span-1 col-start-3">
            <h4 className='pb-2 text-md font-base text-red-600'>*Los campos en rojo son obligatorios.</h4>
            <button type="submit" className="w-52 bg-blue-300 hover:bg-[#48c2ff] text-[#143b50] font-bold py-2 px-4 rounded border border-[#246183]">Guardar</button>
            <button onClick={onClose} className="w-52 bg-red-400 hover:bg-red-600 text-red-800 hover:text-white font-bold py-2 px-4 rounded border border-[#7c232b]">Cerrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditPatientForm;

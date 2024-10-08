import { useState } from 'react';

const AddDoctorForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    tipoDocumento: '',
    nroDocumento: '',
    especialidad: '',
    nroLicencia: '',
    diasDisponibles: '',
    obraSocial: '',
    fechaNacimiento: '',
    telefono: '',
    calle: '',
    numero: '',
    barrio: '',
    ciudad: '',
    provincia: '',
    codigoPostal: ''
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
    const requiredFields = [
      'nombre', 'apellido', 'email', 'tipoDocumento', 'nroDocumento',
      'especialidad', 'nroLicencia', 'diasDisponibles', 'obraSocial',
      'fechaNacimiento', 'telefono', 'calle', 'numero', 'barrio',
      'ciudad', 'provincia', 'codigoPostal'
    ];
    for (let field of requiredFields) {
      if (isFieldEmpty(field)) return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simular guardado exitoso
      setModal({
        isOpen: true,
        message: 'Doctor guardado con éxito.',
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
      <h2 className="text-lg font-semibold mb-4 text-center">Agregar Doctor</h2>
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
            name="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('tipoDocumento') ? 'border-red-500' : 'border-blue-500'}`}
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
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('especialidad') ? 'border-red-500' : 'border-blue-500'}`}
          >
            <option value="">Seleccione Especialidad</option>
            <option value="AllergyAndImmunology">Alergología e Inmunología</option>
            <option value="Anesthesiology">Anestesiología</option>
            <option value="Cardiologo">Cardiólogo</option>
            <option value="Cardiology">Cardiología</option>
            <option value="Cirujano">Cirujano</option>
            <option value="Dermatology">Dermatología</option>
            <option value="Endocrinology">Endocrinología</option>
            <option value="Gastroenterology">Gastroenterología</option>
            <option value="Geriatrics">Geriatría</option>
            <option value="Gynecology">Ginecología</option>
            <option value="Hematology">Hematología</option>
            <option value="InfectiousDiseases">Enfermedades Infecciosas</option>
            <option value="InternalMedicine">Medicina Interna</option>
            <option value="Nephrology">Nefrología</option>
            <option value="Neurology">Neurología</option>
            <option value="Neurosurgery">Neurocirugía</option>
            <option value="Nutrition">Nutrición</option>
            <option value="Obstetrics">Obstetricia</option>
            <option value="Oncology">Oncología</option>
            <option value="Ophthalmology">Oftalmología</option>
            <option value="Orthopedics">Ortopedia</option>
            <option value="Otolaryngology">Otorrinolaringología</option>
            <option value="Pathology">Patología</option>
            <option value="Pediatrics">Pediatría</option>
            <option value="PlasticSurgery">Cirugía Plástica</option>
            <option value="Pneumonology">Neumonología</option>
            <option value="Psychiatry">Psiquiatría</option>
            <option value="Psychology">Psicología</option>
            <option value="Radiology">Radiología</option>
            <option value="Rehabilitation">Rehabilitación</option>
            <option value="Rheumatology">Reumatología</option>
            <option value="Surgery">Cirugía</option>
            <option value="Urology">Urología</option>
          </select>
          <input
            type="text"
            name="nroLicencia"
            placeholder="Número de Licencia"
            value={formData.nroLicencia}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('nroLicencia') ? 'border-red-500' : 'border-blue-500'}`}
          />
          <select
            name="diasDisponibles"
            value={formData.diasDisponibles}
            onChange={handleChange}
            className={`border p-1 text-sm rounded ${isFieldEmpty('diasDisponibles') ? 'border-red-500' : 'border-blue-500'}`}
          >
            <option value="">Seleccione Días Disponibles</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
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
            type="date"
            name="fechaNacimiento"
            placeholder="Fecha Nacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="calle"
            placeholder="Calle / Manzana"
            value={formData.calle}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="numero"
            placeholder="Número / Lote"
            value={formData.numero}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="barrio"
            placeholder="Barrio"
            value={formData.barrio}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="provincia"
            placeholder="Provincia"
            value={formData.provincia}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <input
            type="text"
            name="codigoPostal"
            placeholder="Código Postal"
            value={formData.codigoPostal}
            onChange={handleChange}
            className="border p-1 text-sm rounded"
          />
          <div className="flex flex-row items-center justify-evenly col-span-3">
            <h4 className="pb-2 text-md font-base text-red-600">*Los campos en rojo son obligatorios.</h4>
            <button type="submit" className="w-52 border border-[#0087d0] text-[#0087d0] hover:bg-[#c7e3f7] font-bold py-2 ml-[-2rem] rounded">Guardar</button>
            <button onClick={onClose} type="button" className="w-52 hover:bg-[#fde0e0] text-white hover:text-red-600 font-bold py-2 ml-[-2rem] rounded border bg-[#e4626f] border-[#e4626f]">Cerrar</button>
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
};

export default AddDoctorForm;

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from './Modal';

const Patients = () => {
  const initialPatients = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123-456-7890', docNumber: '12345678', insurance: 'OSDE', active: true },
    { id: 2, name: 'Ana Gómez', email: 'ana.gomez@example.com', phone: '098-765-4321', docNumber: '87654321', insurance: 'Medicus', active: true },
    { id: 3, name: 'María Rodríguez', email: 'maria.rodriguez@example.com', phone: '222-333-4444', docNumber: '23456789', insurance: 'Swiss Medical', active: true },
    { id: 4, name: 'Carlos Fernández', email: 'carlos.fernandez@example.com', phone: '555-666-7777', docNumber: '34567890', insurance: 'Galeno', active: true },
    { id: 5, name: 'Laura Martínez', email: 'laura.martinez@example.com', phone: '888-999-0000', docNumber: '45678901', insurance: 'Sancor Salud', active: true }
  ];

  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddPatient = () => {
    setShowAddModal(true);
  };

  const handleEditPatient = (patient) => {
    setCurrentPatient(patient);
    setShowEditModal(true);
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 font-roboto">
      <h2 className="text-xl font-semibold mb-4">Pacientes</h2>

      {/* Barra de búsqueda */}
      <div className="mb-4 flex items-center border border-[#4763e4] rounded-lg">
        <FaSearch className="ml-2 text-black mr-2" />
        <input
          type="text"
          placeholder="Buscar por apellido"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border-0 w-full focus:outline-none"
        />
      </div>

      {/* Botón para agregar un nuevo paciente */}
      <div className="mb-4">
        <button
          onClick={handleAddPatient}
          className="bg-blue-500 hover:bg-[#d9f2ff] text-white hover:text-[#0087d0] hover:border-[#0087d0] border border-[#4763e4] px-4 py-2 rounded flex items-center"
        >
          <span className="mr-2">+</span> Agregar un nuevo paciente
        </button>
      </div>

      {/* Tabla de pacientes */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-1 px-3 text-left font-semibold">Nombre</th>
              <th className="py-1 px-3 text-left font-semibold">Email</th>
              <th className="py-1 px-3 text-left font-semibold">Teléfono</th>
              <th className="py-1 px-3 text-left font-semibold">Obra Social</th>
              <th className="py-1 px-3 text-left font-semibold">Activo</th>
              <th className="py-1 px-3 text-left font-semibold pl-7">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => (
              <tr key={patient.id} className="h-8 border border-zinc-100 justify-center items-center text-sm">
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{patient.name}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{patient.email}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{patient.phone}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{patient.insurance}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{patient.active ? 'Sí' : 'No'}</td>
                <td className="py-1 px-3 flex flex-row justify-center items-center">
                  <button
                    onClick={() => handleEditPatient(patient)}
                    className="p-1 mx-1 rounded-md border border-[#0087d0] text-[#0087d0] flex justify-center items-center hover:bg-[#f0faff]"
                  >
                    <div className="w-16 text-base font-normal leading-normal tracking-wide">Editar</div>
                  </button>
                  <button
                    onClick={() => handleDeletePatient(patient.id)}
                    className="p-1 mx-1 rounded-md border bg-[#e4626f] border-[#e4626f] text-white hover:text-red-600 flex justify-center items-center hover:bg-[#fde0e0]"
                  >
                    <div className="w-16 text-base font-normal leading-normal tracking-wide">Eliminar</div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <h2 className="text-lg font-semibold mb-4">Agregar Paciente</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" className="border p-2 rounded" />
              <input type="text" placeholder="Apellido" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>DNI</option>
                <option>LC</option>
                <option>LE</option>
              </select>
              <input type="text" placeholder="Nro Documento" maxLength="8" className="border p-2 rounded" />
              <input type="date" placeholder="Fecha Nacimiento" className="border p-2 rounded" />
              <input type="text" placeholder="Teléfono" className="border p-2 rounded" />
              <input type="text" placeholder="Calle" className="border p-2 rounded" />
              <input type="text" placeholder="Número" className="border p-2 rounded" />
              <input type="text" placeholder="Barrio" className="border p-2 rounded" />
              <input type="text" placeholder="Ciudad" className="border p-2 rounded" />
              <input type="text" placeholder="Provincia" className="border p-2 rounded" />
              <input type="text" placeholder="Código Postal" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>OSDE</option>
                <option>Medicus</option>
                <option>Swiss Medical</option>
                <option>PAMI</option>
              </select>
              <select className="border p-2 rounded">
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
              <select className="border p-2 rounded">
                <option>SOLTERO</option>
                <option>CASADO</option>
                <option>VIUDO</option>
                <option>DIVORCIADO</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block mb-2">¿Tiene Hijos?</label>
              <select className="border p-2 rounded mb-2">
                <option>Sí</option>
                <option>No</option>
              </select>
              <input type="number" placeholder="Cantidad de Hijos" className="border p-2 rounded" />
            </div>

            <div className="mt-4">
              <label className="block mb-2">¿Tiene Patologías previas?</label>
              <div className="flex items-center mb-2">
                <input type="radio" name="pathologies" value="Sí" className="mr-2" /> Sí
                <input type="radio" name="pathologies" value="No" className="ml-4 mr-2" /> No
              </div>
              <textarea placeholder="Describa las patologías" className="border p-2 rounded w-full"></textarea>
            </div>

            <div className="mt-4">
              <label className="block mb-2">¿Tiene Tratamientos Activos?</label>
              <div className="flex items-center mb-2">
                <input type="radio" name="treatments" value="Sí" className="mr-2" /> Sí
                <input type="radio" name="treatments" value="No" className="ml-4 mr-2" /> No
              </div>
              <textarea placeholder="Describa los tratamientos" className="border p-2 rounded w-full"></textarea>
            </div>

            <div className="mt-4">
              <label className="block mb-2">¿Actualmente está tomando alguna medicación?</label>
              <div className="flex items-center mb-2">
                <input type="radio" name="medication" value="Sí" className="mr-2" /> Sí
                <input type="radio" name="medication" value="No" className="ml-4 mr-2" /> No
              </div>
              <textarea placeholder="Describa las medicaciones" className="border p-2 rounded w-full"></textarea>
            </div>

            <div className="mt-4">
              <label className="block mb-2">¿Tiene Transplante?</label>
              <div className="flex items-center mb-2">
                <input type="radio" name="transplant" value="Sí" className="mr-2" /> Sí
                <input type="radio" name="transplant" value="No" className="ml-4 mr-2" /> No
              </div>
              <textarea placeholder="Describa los transplantes" className="border p-2 rounded w-full"></textarea>
            </div>

            <div className="mt-4">
              <label className="block mb-2">¿Tiene Tutor o encargado?</label>
              <div className="flex items-center mb-2">
                <input type="radio" name="guardian" value="Sí" className="mr-2" /> Sí
                <input type="radio" name="guardian" value="No" className="ml-4 mr-2" /> No
              </div>
              <input type="text" placeholder="Nombre Completo Tutor" className="border p-2 rounded w-full mb-2" />
              <input type="text" placeholder="Teléfono Tutor" className="border p-2 rounded w-full" />
            </div>

            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
          </form>
          <button onClick={() => setShowAddModal(false)} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cerrar</button>
        </Modal>
      )}

      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <h2 className="text-lg font-semibold mb-4">Editar Paciente</h2>
          {/* Formulario de editar paciente */}
          {/* Completar con los inputs necesarios */}
          <button onClick={() => setShowEditModal(false)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cerrar</button>
        </Modal>
      )}
    </div>
  );
}

export default Patients;

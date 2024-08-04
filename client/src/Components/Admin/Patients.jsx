import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from './Modal';
import AddPatientForm from './AddPatientForm';
import EditPatientForm from './EditPatientForm';

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
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600"
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
              <th className="py-1 text-center font-semibold">Acciones</th>
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
                <td className="py-1 flex flex-row justify-evenly items-center">
                  <button
                    onClick={() => handleEditPatient(patient)}
                    className="p-1 mx-1 rounded-md  flex justify-center items-center border border-[#0087d0] text-[#0087d0] hover:bg-[#c7e3f7]"
                  >
                    <div className="w-20 text-base font-normal leading-normal tracking-wide">Editar</div>
                  </button>
                  <button
                    onClick={() => handleDeletePatient(patient.id)}
                    className="p-1 mx-1 rounded-md border bg-[#e4626f] border-[#e4626f] text-white hover:text-red-600 flex justify-center items-center hover:bg-[#fde0e0]"
                  >
                    <div className="w-20 text-base font-normal leading-normal tracking-wide">Eliminar</div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <AddPatientForm onClose={() => setShowAddModal(false)} />
        </Modal>
      )}

      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <EditPatientForm patient={currentPatient} onClose={() => setShowEditModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default Patients;

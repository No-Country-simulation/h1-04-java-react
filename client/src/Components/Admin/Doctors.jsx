import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ModalDoctor from './ModalDoctor';
import AddDoctorForm from './AddDoctorForm';
import EditDoctorForm from './EditDoctorForm';

const Doctors = () => {
  const initialDoctors = [
    { id: 1, name: 'Juan Pérez', specialty: 'Cardiología', email: 'juan.perez@example.com', phone: '123-456-7890', docNumber: '12345678', active: true },
    { id: 2, name: 'Ana Gómez', specialty: 'Gastroenterología', email: 'ana.gomez@example.com', phone: '098-765-4321', docNumber: '87654321', active: false },
    { id: 3, name: 'María Rodríguez', specialty: 'Nutrición', email: 'maria.rodriguez@example.com', phone: '222-333-4444', docNumber: '23456789', active: true },
    { id: 4, name: 'Carlos Fernández', specialty: 'Cirugía', email: 'carlos.fernandez@example.com', phone: '555-666-7777', docNumber: '34567890', active: true },
    { id: 5, name: 'Laura Martínez', specialty: 'Psicología', email: 'laura.martinez@example.com', phone: '888-999-0000', docNumber: '45678901', active: false }
  ];

  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddDoctor = () => {
    setShowAddModal(true);
  };

  const handleEditDoctor = (doctor) => {
    setCurrentDoctor(doctor);
    setShowEditModal(true);
  };

  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 font-roboto">
      <h2 className="text-xl font-semibold mb-4">Médicos</h2>

      {/* Barra de búsqueda */}
      <div className="mb-4 flex items-center border border-[#4763e4] rounded-lg">
        <FaSearch className="ml-2 text-black mr-2" />
        <input
          type="text"
          placeholder="Buscar por apellido o especialidad"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border-0 w-full focus:outline-none"
        />
      </div>

      {/* Botón para agregar un nuevo médico */}
      <div className="mb-4">
        <button
          onClick={handleAddDoctor}
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600"
        >
          <span className="mr-2">+</span> Agregar un nuevo médico
        </button>
      </div>

      {/* Tabla de médicos */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-1 px-3 text-left font-semibold">Nombre</th>
              <th className="py-1 px-3 text-left font-semibold">Especialidad</th>
              <th className="py-1 px-3 text-left font-semibold">Email</th>
              <th className="py-1 px-3 text-left font-semibold">Teléfono</th>
              <th className="py-1 px-3 text-left font-semibold">Activo</th>
              <th className="py-1 text-center font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map(doctor => (
              <tr key={doctor.id} className="h-8 border border-zinc-100 justify-center items-center text-sm">
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{doctor.name}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{doctor.specialty}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{doctor.email}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{doctor.phone}</td>
                <td className="py-1 px-3 overflow-hidden whitespace-nowrap">{doctor.active ? 'Sí' : 'No'}</td>
                <td className="py-1 flex flex-row justify-evenly items-center">
                  <button
                    onClick={() => handleEditDoctor(doctor)}
                    className="p-1 mx-1 rounded-md border border-[#0087d0] text-[#0087d0] flex justify-center items-center hover:bg-[#c7e3f7]"
                  >
                    <div className="w-20 text-base font-normal leading-normal tracking-wide">Editar</div>
                  </button>
                  <button
                    onClick={() => handleDeleteDoctor(doctor.id)}
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
        <ModalDoctor onClose={() => setShowAddModal(false)}>
          <AddDoctorForm onClose={() => setShowAddModal(false)} />
        </ModalDoctor>
      )}

      {showEditModal && (
        <ModalDoctor onClose={() => setShowEditModal(false)}>
          <EditDoctorForm doctor={currentDoctor} onClose={() => setShowEditModal(false)} />
        </ModalDoctor>
      )}
    </div>
  );
}

export default Doctors;

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de lupa

const Doctors = () => {
  // Datos hardcodeados
  const initialDoctors = [
    { id: 1, name: 'Juan Pérez', specialty: 'Cardiología', email: 'juan.perez@example.com', phone: '123-456-7890', docNumber: '12345678', active: true },
    { id: 2, name: 'Ana Gómez', specialty: 'Gastroenterología', email: 'ana.gomez@example.com', phone: '098-765-4321', docNumber: '87654321', active: false },
    { id: 3, name: 'María Rodríguez', specialty: 'Nutrición', email: 'maria.rodriguez@example.com', phone: '222-333-4444', docNumber: '23456789', active: true },
    { id: 4, name: 'Carlos Fernández', specialty: 'Cirugía', email: 'carlos.fernandez@example.com', phone: '555-666-7777', docNumber: '34567890', active: true },
    { id: 5, name: 'Laura Martínez', specialty: 'Psicología', email: 'laura.martinez@example.com', phone: '888-999-0000', docNumber: '45678901', active: false }
  ];

  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddDoctor = () => {
    const newDoctor = {
      id: doctors.length + 1,
      name: 'Nuevo Médico',
      specialty: 'Especialidad',
      email: 'nuevo.medico@example.com',
      phone: '111-222-3333',
      docNumber: '56789012',
      active: true
    };
    setDoctors([...doctors, newDoctor]);
  };

  const handleEditDoctor = (id) => {
    // Aquí iría la lógica para editar el médico
    alert(`Editar médico con ID: ${id}`);
  };

  const handleDeleteDoctor = (id) => {
    // Aquí iría la lógica para eliminar el médico
    alert(`Eliminar médico con ID: ${id}`);
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 font-roboto">
      <h2 className="text-xl font-semibold mb-4">Lista de Médicos</h2>

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
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
        >
          <span className="mr-2">+</span> Agregar un nuevo Médico
        </button>
      </div>

      {/* Tabla de médicos */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Especialidad</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Teléfono</th>
              <th className="py-2 px-4 text-left">Activo</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map(doctor => (
              <tr key={doctor.id} className="h-16 border border-zinc-100"> {/* Altura fija para cada fila */}
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{doctor.name}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{doctor.specialty}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{doctor.email}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{doctor.phone}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{doctor.active ? 'Sí' : 'No'}</td>
                <td className="py-2 px-4 h-full flex">
                  <button
                    onClick={() => handleEditDoctor(doctor.id)}
                    className="p-2 mx-1 rounded-md border border-[#0087d0] text-[#0087d0] flex justify-center items-center hover:bg-[#f0faff]"
                  >
                    <div className="w-16 text-base font-normal leading-normal tracking-wide">Editar</div>
                  </button>
                  <button
                    onClick={() => handleDeleteDoctor(doctor.id)}
                    className="p-2 mx-1 rounded-md border bg-[#e4626f] border-[#e4626f] text-white hover:text-red-600 flex justify-center items-center hover:bg-[#fde0e0]"
                  >
                    <div className="w-16 text-base font-normal leading-normal tracking-wide">Eliminar</div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Doctors;


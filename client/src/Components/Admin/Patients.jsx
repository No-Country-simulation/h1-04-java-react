import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de lupa

const Patients = () => {
  // Datos hardcodeados
  const initialPatients = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123-456-7890', docNumber: '12345678', insurance: 'Obra Social A', active: true },
    { id: 2, name: 'Ana Gómez', email: 'ana.gomez@example.com', phone: '098-765-4321', docNumber: '87654321', insurance: 'Obra Social B', active: false },
    { id: 3, name: 'María Rodríguez', email: 'maria.rodriguez@example.com', phone: '222-333-4444', docNumber: '23456789', insurance: 'Obra Social C', active: true },
    { id: 4, name: 'Carlos Fernández', email: 'carlos.fernandez@example.com', phone: '555-666-7777', docNumber: '34567890', insurance: 'Obra Social D', active: true },
    { id: 5, name: 'Laura Martínez', email: 'laura.martinez@example.com', phone: '888-999-0000', docNumber: '45678901', insurance: 'Obra Social E', active: false }
  ];

  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddPatient = () => {
    const newPatient = {
      id: patients.length + 1,
      name: 'Nuevo Paciente',
      email: 'nuevo.paciente@example.com',
      phone: '111-222-3333',
      docNumber: '56789012',
      insurance: 'Obra Social F',
      active: true
    };
    setPatients([...patients, newPatient]);
  };

  const handleEditPatient = (id) => {
    // Aquí iría la lógica para editar el paciente
    alert(`Editar paciente con ID: ${id}`);
  };

  const handleDeletePatient = (id) => {
    // Aquí iría la lógica para eliminar el paciente
    alert(`Eliminar paciente con ID: ${id}`);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 font-roboto">
      <h2 className="text-xl font-semibold mb-4">Lista de Pacientes</h2>

      {/* Barra de búsqueda */}
      <div className="mb-4 flex items-center border border-[#4763e4] rounded-lg">
        <FaSearch className="ml-2 text-black mr-2"/>
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
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
        >
          <span className="mr-2">+</span> Agregar un nuevo paciente
        </button>
      </div>

      {/* Tabla de pacientes */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Teléfono</th>
              <th className="py-2 px-4 text-left">Nro Documento</th>
              <th className="py-2 px-4 text-left">Obra Social</th>
              <th className="py-2 px-4 text-left">Activo</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => (
              <tr key={patient.id} className="h-16 border border-zinc-100"> {/* Altura fija para cada fila */}
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{patient.name}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{patient.email}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{patient.phone}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{patient.docNumber}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{patient.insurance}</td>
                <td className="py-2 px-4 h-full overflow-hidden whitespace-nowrap">{patient.active ? 'Sí' : 'No'}</td>
                <td className="py-2 px-4 h-full flex">
                  <button
                    onClick={() => handleEditPatient(patient.id)}
                    className="p-2 mx-1 rounded-md border border-[#0087d0] text-[#0087d0] flex justify-center items-center hover:bg-[#f0faff]"
                  >
                    <div className="w-16 text-base font-normal leading-normal tracking-wide">Editar</div>
                  </button>
                  <button
                    onClick={() => handleDeletePatient(patient.id)}
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

export default Patients;

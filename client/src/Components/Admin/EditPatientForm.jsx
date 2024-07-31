const EditPatientForm = ({ patient, onClose }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Editar Paciente</h2>
      <form>
        {/* Completa este formulario con los campos necesarios para editar un paciente */}
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border borde">Guardar</button>
      </form>
      <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-[#e4626f]">Cerrar</button>
    </div>
  );
}

export default EditPatientForm;

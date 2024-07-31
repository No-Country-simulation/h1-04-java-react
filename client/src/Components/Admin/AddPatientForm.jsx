const AddPatientForm = ({ onClose }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-center">Agregar Paciente</h2>
      <form>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" placeholder="Nombre" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Apellido" className="border p-1 text-sm rounded" />
          <input type="email" placeholder="Email" className="border p-1 text-sm rounded" />
          <select className="border p-1 text-sm rounded">
            <option>DNI</option>
            <option>LC</option>
            <option>LE</option>
          </select>
          <input type="text" placeholder="Nro Documento" maxLength="8" className="border p-1 text-sm rounded" />
          <input type="date" placeholder="Fecha Nacimiento" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Teléfono" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Calle" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Número" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Barrio" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Ciudad" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Provincia" className="border p-1 text-sm rounded" />
          <input type="text" placeholder="Código Postal" className="border p-1 text-sm rounded" />
          <select className="border p-1 text-sm rounded">
            <option>OSDE</option>
            <option>Medicus</option>
            <option>Swiss Medical</option>
            <option>PAMI</option>
          </select>
          <select className="border p-1 text-sm rounded">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

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
          <button type="submit" className="w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
          <button onClick={onClose} className="w-52 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cerrar</button>
        </div>

          
        </div>

      </form>
    </div>
  );
}

export default AddPatientForm;

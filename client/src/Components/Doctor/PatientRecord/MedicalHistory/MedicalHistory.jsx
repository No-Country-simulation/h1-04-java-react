import { useContext, useEffect, useState } from "react";
import DoctorHeader from "../../DoctorHeader/DoctorHeader";
import CardMedicalHistory from "./CardMedicalHistory";
import DoctorContext from "../../../../context/DoctorContext";
import { useLocation } from "react-router-dom";
import Spinner from "../../../../helpers/atoms/Spinner";

const MedicalHistory = () => {
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
  const { fetchPatientById, authData } = useContext(DoctorContext);

  const location = useLocation();
  const { patient } = location.state || {};

  useEffect(() => {
    const loadPatientData = async () => {
      setLoading(true); // Establece el estado de carga en verdadero al comenzar
      const patientId = patient ? patient.id : authData ? authData.id : null;

      if (patientId) {
        try {
          const data = await fetchPatientById(patientId);
          setPatientData(data.patient);
          setError(null);
        } catch (error) {
          setError(error.message);
          setPatientData([]);
          console.log(error);
        } finally {
          setLoading(false); // Establece el estado de carga en falso al finalizar
        }
      } else {
        setError("No se pudo obtener el ID del paciente.");
        setPatientData([]);
        setLoading(false); // Establece el estado de carga en falso si no hay ID
      }
    };

    loadPatientData();
  }, [patient, authData, fetchPatientById]);

  return (
    <section className=''>
      <DoctorHeader text={"Historial Medico"} />

      {loading ? (
        <Spinner /> // Mensaje de carga mientras se obtienen los datos
      ) : error ? (
        <p>{error}</p> // Mensaje de error en caso de que ocurra un error
      ) : patientData.medicalHistory &&
        patientData.medicalHistory.length > 0 ? (
        patientData.medicalHistory.map((history, index) => (
          <CardMedicalHistory
            key={index}
            history={history}
            patient={patientData}
          />
        ))
      ) : (
        <p>No hay historial médico disponible.</p> // Mensaje cuando no hay historial médico
      )}
    </section>
  );
};

export default MedicalHistory;

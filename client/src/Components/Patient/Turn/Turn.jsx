import { useContext, useEffect, useState } from "react";
import { getAppointmentById, deactivateAppointment } from "../../../services/appointmentService";
import DoctorContext from "../../../context/DoctorContext";
import Turns from "./Turns.jsx";
import checkImgError from "../../../Assets/Imgs/checkImgError.svg";
import SuccesModal from "../../../Components/Modals/SucessModal";
import PatientHeader from "../PatientHeader/PatientHeader.jsx";

const Turn = () => {
  const [dataAppointments, setDataAppointments] = useState([]);
  const [cancelModalIndex, setCancelModalIndex] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showCancellationSuccessModal, setShowCancellationSuccessModal] = useState(false);
  const [turnCancellation, setTurnCancellation] = useState(null);
  const [showVerificando, setShowVerificando] = useState(false);

  const { authData } = useContext(DoctorContext);

  useEffect(() => {
    const handleGetAppointment = async () => {
      try {
        let datAppointment = await getAppointmentById(
          authData.token,
          authData.id
        );
        setDataAppointments(datAppointment);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch appointments");
      }
    };
    
    handleGetAppointment();
  }, [authData]);

  function openCancelModal(index) {
    setCancelModalIndex(index);
    setShowCancelModal(true);
  }

  function closeCancelModal() {
    setShowCancelModal(false);
    setCancelModalIndex(null);
  }

  function openCancellationSuccessModal() {
    setShowCancellationSuccessModal(true);
  }

  function closeCancellationSuccessModal() {
    setShowCancellationSuccessModal(false);
    setTurnCancellation(null);
  }

  const handleCancelAppointment = async () => {
    try {
      const appointmentId = dataAppointments[cancelModalIndex].appointmentId;
      await deactivateAppointment(authData.token, appointmentId);
      setDataAppointments((prev) =>
        prev.filter((_, index) => index !== cancelModalIndex)
      );
      setTurnCancellation(cancelModalIndex);
      openCancellationSuccessModal();
    } catch (error) {
      console.error("Error canceling appointment:", error);
    } finally {
      closeCancelModal();
    }
  };


  return (
    <section className='m-4'>
      <PatientHeader text="Turnos" color="#5A5555"  />
      
      {dataAppointments.length > 0 ? (
        dataAppointments.map((dataAppoint, index) => (
          <div key={index} className='mb-5 '>
            <Turns
              key={index}
              doctor={dataAppoint.fullnameDoctor}
              time={dataAppoint.appointmentHour}
              href={"/turn-calendar"}
              type={dataAppoint.typeOfAppointment}
            />
            <div className="flex flex-col items-center">
              <button className='mb-5 rounded-lg p-3 text-white w-[90%]' style={{backgroundColor:"#8163B0"}}
                onClick={() => openCancelModal(index)}
              >
                Cancelar Turno
              </button>
              <button className='mb-5 rounded-lg p-3 text-white w-[90%]' style={{backgroundColor:"#8163B0"}}
                onClick={() => setShowVerificando(true)}
              >
                Modificar Turno
              </button>
              <button className='mb-5 rounded-lg p-3 text-white w-[90%]' style={{backgroundColor:"#8163B0"}}
                onClick={() => setShowVerificando(true)}
              >
                Agendar Nuevo Turno
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>No se encontraron citas</h1>
      )}
      
      {/* Cancel Confirmation Modal */}
      {cancelModalIndex !== null && (
        <SuccesModal
          checkImg={checkImgError}
          title={"CANCELACIÓN DE TURNO"}
          text={"¿Estás seguro de querer cancelar tu turno?"}
          show={showCancelModal}
          onClose={() => closeCancelModal()}
          check
          viewButtons={true}
          confirm={() => handleCancelAppointment()}
        />
      )}
      
      {/* Cancellation Success Modal */}
      {turnCancellation !== null && (
        <SuccesModal
          checkImg={checkImgError}
          title={"TU TURNO SE CANCELO"}
          text={
            "Tu turno se cancelo. Si lo necesitas podes solicitarlo nuevamente."
          }
          show={showCancellationSuccessModal}
          onClose={() => closeCancellationSuccessModal()}
          check
        />
      )}
      <SuccesModal
        show={showVerificando}
        onClose={() => setShowVerificando(false)}
        none
        title='No disponible'
        text='Estamos trabajando en esta característica'
      />
    </section>
  );
};

export default Turn;
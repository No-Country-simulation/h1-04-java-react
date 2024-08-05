import { useContext, useEffect, useState } from "react";
import {
  getAppointmentById,
  deactivateAppointment,
} from "../../../services/appointmentService";
import { useNavigate } from "react-router-dom";
import DoctorContext from "../../../context/DoctorContext";
import turns from "../../../Assets/Imgs/turns.png";
import Turns from "./Turns.jsx";
import anotherArrowLeft from "../../../Assets/Imgs/otraArrowLeft.png";
import checkImgError from "../../../Assets/Imgs/checkImgError.svg";
import SuccesModal from "../../../Components/Modals/SucessModal";

const Turn = () => {
  const [dataAppointments, setDataAppointments] = useState([]);
  const [cancelModalIndex, setCancelModalIndex] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showCancellationSuccessModal, setShowCancellationSuccessModal] =
    useState(false);
  const [turnCancellation, setTurnCancellation] = useState(null);
  const [showVerificando, setShowVerificando] = useState(false);

  const { authData } = useContext(DoctorContext);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (turnCancellation !== null) {
      // Optionally handle other logic here
    }
  }, [turnCancellation]);

  return (
    <section className='m-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center text-center text-secondary'>
          <img src={turns} alt='turno img' className='w-8 h-8' />
          <h2 className='text-xl font-bold mb-4 mt-3 ml-2'>Turnos</h2>
        </div>
        <div>
          <p className='text-white bg-orangeColor rounded-3xl p-1 font-semibold'>
            {dataAppointments.length}
          </p>
        </div>
      </div>

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
            <div className='flex justify-around mt-2 items-center mb-2'>
              <button
                className='rounded-3xl bg-primary p-2 font-bold px-4'
                onClick={() => openCancelModal(index)}
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowVerificando(true)}
                className='rounded-3xl bg-orangeColor p-2 font-bold px-4'
              >
                Modificar
              </button>
              <button
                onClick={() => setShowVerificando(true)}
                className='rounded-3xl bg-blueColor p-2 font-bold px-4'
              >
                Finalizar
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>No se encontraron citas</h1>
      )}

      <div className='backContainer'>
        <button className='back' onClick={() => navigate(-1)}>
          <img src={anotherArrowLeft} alt='back' />
        </button>
      </div>

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

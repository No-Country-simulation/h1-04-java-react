import { useContext, useEffect, useState } from "react";
import { getAppointmentById } from "../../../services/appointmentService";
import { useNavigate } from "react-router-dom";
import DoctorContext from "../../../context/DoctorContext";
import turns from "../../../Assets/Imgs/turns.png"
import Turns from "./Turns.jsx"
import anotherArrowLeft from "../../../Assets/Imgs/otraArrowLeft.png"
import checkImgError from "../../../Assets/Imgs/checkImgError.svg"
import SuccesModal from "../../../Components/Modals/SucessModal";

const Turn = () => {
    const [dataAppointments, setDataAppointments] = useState([])
    const [cancelModalIndex, setCancelModalIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [turnCancellation, setTurnCancellation] = useState(null);

    const { authData } = useContext(DoctorContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleGetAppointment = async() =>{
            try {
                let datAppointment = await getAppointmentById(authData.token, authData.id)
                setDataAppointments(datAppointment)
            } catch (error) {
                console.error(error)
                throw new Error("Failed to fetch appointments")
            }
        }
        
        handleGetAppointment()
    }, [authData])

    function openModal(index) {
        setCancelModalIndex(index);
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
        setCancelModalIndex(null);
    }

    function handleCancelAppointment() {
        // Aquí debes añadir la lógica para cancelar el turno específico basado en `cancelModalIndex`.
        setTurnCancellation(cancelModalIndex);
        closeModal();
    }

    return (
        <section className='m-4'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-center text-secondary">
                    <img src={turns} alt="turno img" className="w-8 h-8" />
                    <h2 className='text-xl font-bold mb-4 mt-3 ml-2'>Turnos</h2>
                </div>
                <div>
                    <p className="text-white bg-orangeColor rounded-3xl p-1 font-semibold">{dataAppointments.length}</p>
                </div>
            </div>
            
            { dataAppointments.length > 0 ? (
                dataAppointments.map((dataAppoint, index) => (
                    <div key={index} className="border-b-2 mb-10">
                        <Turns
                            key={index}
                            doctor={dataAppoint.fullnameDoctor}
                            time={dataAppoint.appointmentHour}
                            href={"/turn-calendar"}
                            type={dataAppoint.typeOfAppointment}
                        />
                        <div className="flex justify-around items-center mb-2">
                            <button className="rounded-3xl bg-primary p-2 font-bold px-4" onClick={() => openModal(index)}>Cancelar</button>
                            <button className="rounded-3xl bg-primary p-2 font-bold px-4">Modificar</button>
                            <button className="rounded-3xl bg-primary p-2 font-bold px-4">Finalizar</button>
                        </div>
                    </div>
                ))
            ) : (
                <h1>No se encontraron citas</h1>
            ) }
            
            <div className="backContainer">
                <button className="back" onClick={() => navigate(-1)}>
                <img src={anotherArrowLeft} alt="back" />
                </button>
            </div>
            
            {/* Mensaje Error */}
            { cancelModalIndex !== null && (
                <SuccesModal
                    checkImg={checkImgError}
                    title={"CANCELACIÓN DE TURNO"}
                    text={"¿Estás seguro de querer cancelar tu turno?"}
                    show={showModal}
                    onClose={() => closeModal()}
                    check
                    viewButtons={true}
                    confirm={() => handleCancelAppointment()}
                />
            ) }
            { turnCancellation !== null && (
                <SuccesModal
                    checkImg={checkImgError}
                    title={"TU TURNO SE CANCELO"}
                    text={"Tu turno se cancelo. Si lo necesitas podes solicitarlo nuevamente."}
                    show={showModal}
                    onClose={() => closeModal()}
                    check
                />
            ) }
        </section>
    )
}

export default Turn
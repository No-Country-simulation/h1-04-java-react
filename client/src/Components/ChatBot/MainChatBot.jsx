/* eslint-disable no-undef */
import { ThemeProvider } from "styled-components";
import { useEffect, useRef, useState } from "react";
import ChatBot from "react-simple-chatbot";
import WikiComponent from "./WikiComponent";
import doctorAvatar from '../../Assets/Imgs/doctor.png';
import "./mainChatBot.css"

const DiseñoChat = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#fceade',
    headerFontColor: '#232233',
    headerFontSize: '15px',
    botBubbleColor: '#fceade',
    botFontColor: '#232233',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const validarNombre = (value) => {
    if (value.length > 8) {
        return 'El nombre debe tener máximo 8 caracteres.';
    }
    
    if (/\d/.test(value)) {
        return 'El nombre no puede contener números.';
    }
    
    return true;
};

const MainChatBot = () => {
    const [showChatBot, setShowChatBot] = useState(false);
    const chatBotRef = useRef(null);

    const handleClickOutside = (event) => {
        if (chatBotRef.current && !chatBotRef.current.contains(event.target)) {
            setShowChatBot(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button 
                className="ChatBotButton"
                onClick={() => setShowChatBot(!showChatBot)}
            />
            { showChatBot && (
                <div className={`ChatBotContainer ${showChatBot ? 'show' : ''}`} ref={chatBotRef}>
                    <ThemeProvider theme={DiseñoChat} >
                        <ChatBot
                            botAvatar={doctorAvatar}
                            steps={[
                                {
                                    id: 'intro',
                                    message: 'Bienvenido a Justina.io. ¿Cómo te llamas?',
                                    trigger: '1',
                                },
                                {
                                    id: '1',
                                    user: true,
                                    validator: validarNombre,
                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    message: 'Encantado de conocerte {previousValue}',
                                    trigger: '3',
                                },
                                {
                                    id: '3',
                                    message: '¿Qué necesitas?',
                                    trigger: 'select',
                                },
                                {
                                    id: 'select',
                                    options: [
                                        { value: 'ley-justina', label: '¿Qué es la Ley Justina?', trigger: 'ley-justina' },
                                        { value: 'justina-lo-cane', label: '¿Quién era Justina Lo Cane?', trigger: 'justina-lo-cane' },
                                        { value: 'solo-argentina', label: '¿Esta aplicación está solo para Argentina?', trigger: 'solo-argentina' },
                                        { value: 'usar-esta-aplicacion', label: '¿Por qué usar esta aplicación?', trigger: 'usar-esta-aplicacion' },
                                        { value: 't', label: 'Nada más', trigger: 'finCHAT' },
                                    ],
                                },
                                {
                                    id: 'ley-justina',
                                    message: "¡Claro, aquí tienes un enlace para ver qué es la Ley Justina!",
                                    trigger: '7',
                                },
                                {
                                    id: 'justina-lo-cane',
                                    message: "¡Claro, aquí tienes un enlace para conocer quién era Justina Lo Cane!",
                                    trigger: '7',
                                },
                                {
                                    id: 'solo-argentina',
                                    message: "Si, por ahora esta solo en argentina",
                                    trigger: 'preguntaVuelta',
                                },
                                {
                                    id: 'usar-esta-aplicacion',
                                    message: "Esta aplicación se penso para realizar todos los tramites medicos de una manera sencilla, dinamica, facil, rapida y segura, por lo que es recomendada usarla.",
                                    trigger: 'preguntaVuelta',
                                },
                                {
                                    id: "7",
                                    component: <WikiComponent />,
                                    asMessage: true,
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: 'preguntaVuelta',
                                    message: '¿Necesitas algo más?',
                                    trigger: '8',
                                },
                                {
                                    id: '8',
                                    options: [
                                        { value: 'yes', label: 'Sí, necesito más ayuda', trigger: '3' },
                                        { value: 'no', label: 'No gracias', trigger: 'finCHAT' },
                                    ],
                                },
                                {
                                    id: 'finCHAT',
                                    message: "Estupendo, ¡Ten un buen día!",
                                    end: true,
                                },
                            ]}
                        />
                    </ThemeProvider>
                </div>
            ) }
        </div>
    )
}

export default MainChatBot;
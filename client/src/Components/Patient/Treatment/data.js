import treatment from "../../../Assets/Imgs/treat.png"
import studies from "../../../Assets/Imgs/studies.png"
import nutricion from "../../../Assets/Imgs/nutricion.png"
import gim from "../../../Assets/Imgs/gim.png"
import historiaCli from "../../../Assets/Imgs/historiaCli.png"
import medicacion from "../../../Assets/Imgs/medicacion.png"
import psicologia from "../../../Assets/Imgs/psicologia.png"
import trabajoSocial from "../../../Assets/Imgs/trabajoSocial.png"
import physiotherapy from "../../../Assets/Imgs/fisioterapia.png"
import others from "../../../Assets/Imgs/otros.png"


export const treatmentData = {
    '/treatment-treatment': {
        image: treatment,
        title: "Tratamiento",
        buttons: [
            { label: "Indicaciones" },
            { label: "Precauciones" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-studies': {
        image: studies,
        title: "Estudios Clínicos",
        buttons: [
            { label: "Laboratorios" },
            { label: "Diagnostico por imagenes" },
            { label: "Estudio Complementarios" },
            { label: "Turnos" }
        ]
    },
    '/treatment-nutrition': {
        image: nutricion,
        title: "Nutrición",
        buttons: [
            { label: "Desayuno" },
            { label: "Media Mañana" },
            { label: "Almuerzo" },
            { label: "Media Tarde" },
            { label: "Merienda" },
            { label: "Cena" },
            { label: "Otros" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-physical-activity': {
        image: gim,
        title: "Actividad Física",
        buttons: [
            { label: "Día Uno" },
            { label: "Día Dos" },
            { label: "Día Tres" },
            { label: "Día Cuatro" },
            { label: "Día Cinco" },
            { label: "Extra" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-medication': {
        image: medicacion,
        title: "Medicación",
        buttons: [
            { label: "Azatioprima" },
            { label: "Clonazepan" },
            { label: "Ibuprofeno" }
        ]
    },
    '/treatment-clinical-history': {
        image: historiaCli,
        title: "Historia Clinica",
        buttons: [
            { label: "Diagnóstico" },
            { label: "Tratamiento Médico" },
            { label: "Tratamiento Psicológico" },
            { label: "Tratamiento Fisioterapéutico" },
            { label: "Trabajo Social" },
            { label: "Medicación" },
            { label: "Laboratorio/Estudios" }
        ]
    },
    '/treatment-psychology': {
        image: psicologia,
        title: "Psicología/Psiquiatría",
        buttons: [
            { label: "Tratamiento" },
            { label: "Turnos" },
            { label: "Medicación" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-social-work': {
        image: trabajoSocial,
        title: "Trabajo Social",
        buttons: [
            { label: "Certificado de Discapacidad" },
            { label: "Pensión por Discapacidad" },
            { label: "Turnos" },
            { label: "Trámites" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-physiotherapy': {
        image: physiotherapy,
        title: "Fisioterapia",
        buttons: [
            { label: "Tratamiento" },
            { label: "Turnos" },
            { label: "Medicación" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-others': {
        image: others,
        title: "Otros",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    }
};

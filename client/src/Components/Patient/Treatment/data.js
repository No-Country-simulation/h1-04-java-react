import nutricion from "../../../Assets/Imgs/nutricion.png"
import gim from "../../../Assets/Imgs/gim.png"
import historiaCli from "../../../Assets/Imgs/historiaCli.png"
import medicacion from "../../../Assets/Imgs/medicacion.png"
import psicologia from "../../../Assets/Imgs/psicologia.png"
import trabajoSocial from "../../../Assets/Imgs/trabajoSocial.png"
import physiotherapy from "../../../Assets/Imgs/trabajoSocial.png" //PONER IMG REAL
import others from "../../../Assets/Imgs/trabajoSocial.png" //PONER IMG REAL


export const treatmentData = {
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
            { label: "Otros" }
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
            { label: "Extra" }
        ]
    },
    '/treatment-clinical-history': {
        image: historiaCli,
        title: "Historia Clinica",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    },
    '/treatment-medication': {
        image: medicacion,
        title: "Medicación",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    },
    '/treatment-psychology': {
        image: psicologia,
        title: "Psicología",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    },
    '/treatment-social-work': {
        image: trabajoSocial,
        title: "Trabajo Social",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    },
    '/treatment-physiotherapy': {
        image: physiotherapy,
        title: "Fisioterapia",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    },
    '/treatment-others': {
        image: others,
        title: "Otros",
        buttons: [
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" },
            { label: "Algo" }
        ]
    }
};
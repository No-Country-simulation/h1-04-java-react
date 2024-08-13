import treatment from "../../../Assets/Imgs/treat.png"
import studies from "../../../Assets/Imgs/studies.png"
import nutricion from "../../../Assets/Imgs/nutricion.png"
import gim from "../../../Assets/Imgs/gim.png"
import historiaCli from "../../../Assets/Imgs/historiaCli.png"
import medicacion from "../../../Assets/Imgs/medicacion.png"

export const treatmentData = {
    '/treatment-treatment': {
        image: treatment,
        title: "Tratamiento Médico",
        plan: "Tratamiento Médico",
        description: "Diálisis Peritoneal",
        buttons: [
            { label: "Indicaciones _ Precauciones" },
            { label: "Comunicación" }
        ]
    },
    '/treatment-clinical-history': {
        image: historiaCli,
        title: "Historia Clínica",
        plan: "Historia Clínica",
        description: "Historia Completo",
        buttons: [
            { label: "Diagnóstico" },
            { label: "Tratamiento Médico" },
            { label: "Tratamiento Psicológico" },
            { label: "Medicación" },
            { label: "Laboratorio/Estudios" }
        ]
    },
    '/treatment-studies': {
        image: studies,
        title: "Estudios | Laboratorios",
        plan: "Estudios Clínicos | Laboratorios",
        description: "Tratamiento Completo",
        buttons: [
            { label: "Laboratorios" },
            { label: "Diagnostico por imagenes" },
            { label: "Estudio Complementarios" }
        ]
    },
    '/treatment-medication': {
        image: medicacion,
        title: "Medicación",
        plan: "Medicación",
        description: "Tratamiento Completo",
        buttons: [
            { label: "Azatioprima" },
            { label: "Clonazepan" },
            { label: "Ibuprofeno" }
        ]
    },
    '/treatment-physical-activity': {
        image: gim,
        title: "Actividad Física",
        plan: "Plan Físico",
        description: "Tratamiento Personalizado",
        buttons: [
            { label: "Lunes" },
            { label: "Martes" },
            { label: "Miércoles" },
            { label: "Jueves" },
            { label: "Viernes" },
            { label: "Extra" }
        ]
    },
    '/treatment-nutrition': {
        image: nutricion,
        title: "Alimentación",
        plan: "Plan Nutricional",
        description: "Tratamiento Personalizado",
        buttons: [
            { label: "Desayuno" },
            { label: "Media Mañana" },
            { label: "Almuerzo" },
            { label: "Media Tarde" },
            { label: "Merienda" },
            { label: "Cena" },
            { label: "Otros" }
        ]
    }
};
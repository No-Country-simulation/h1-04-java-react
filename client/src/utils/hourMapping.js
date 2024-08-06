

const hourMappings = {
  SEVEN_AM: "7:00 AM",
  EIGHT_AM: "8:00 AM",
  NINE_AM: "9:00 AM",
  TEN_AM: "10:00 AM",
  ELEVEN_AM: "11:00 AM",
  TWELVE_PM: "12:00 PM",
  ONE_PM: "1:00 PM",
  TWO_PM: "2:00 PM",
  THREE_PM: "3:00 PM",
  FOUR_PM: "4:00 PM",
  FIVE_PM: "5:00 PM",
  SIX_PM: "6:00 PM",
  SEVEN_PM: "7:00 PM",
  EIGHT_PM: "8:00 PM",
  NINE_PM: "9:00 PM",
  TEN_PM: "10:00 PM",
  ELEVEN_PM: "11:00 PM",
  TWELVE_AM: "12:00 AM",
};

const dayTranslations = {
  MONDAY: "Lunes",
  TUESDAY: "Martes",
  WEDNESDAY: "Miércoles",
  THURSDAY: "Jueves",
  FRIDAY: "Viernes",
  SATURDAY: "Sábado",
  SUNDAY: "Domingo",
};

const appointmentTypeTranslations = {
  OFFICE_VISIT: "Consulta en el consultorio",
  FOLLOW_UP: "Seguimiento",
  PSYCHOTHERAPY: "Psicoterapia",
  TREATMENTS: "Tratamientos",
  LAB: "Laboratorio",
  VACCINATION: "Vacunación",
  IMAGING: "Estudios por imágenes",
  SURGERY: "Cirugía",
  TELEMEDICINE: "Consulta a distancia",
  PREVENTIVE_CARE: "Cuidado preventivo",
  PHYSICAL_THERAPY: "Terapia física",
  SPECIALIST_CONSULTATION: "Consulta con especialista",
  DENTAL_CARE: "Cuidado dental",
  NUTRITIONAL_COUNSELING: "Asesoramiento nutricional",
  PRENATAL_CARE: "Cuidado prenatal",
  POSTNATAL_CARE: "Cuidado postnatal",
};
const specialtiesTranslation = {
  NEUROLOGY: "Neurología",
  CARDIOLOGY: "Cardiología",
  GYNECOLOGY: "Ginecología",
  DERMATOLOGY: "Dermatología",
  ORTHOPEDICS: "Ortopedia",
  PEDIATRICS: "Pediatría",
  RHEUMATOLOGY: "Reumatología",
  GASTROENTEROLOGY: "Gastroenterología",
  PSYCHIATRY: "Psiquiatría",
  INTERNAL_MEDICINE: "Medicina Interna",
  ENDOCRINOLOGY: "Endocrinología",
  RADIOLOGY: "Radiología",
  ALLERGY_AND_IMMUNOLOGY: "Alergología e Inmunología",
}

const formatHour = (hour) => hourMappings[hour] || hour;
const translateDay = (day) => dayTranslations[day.toUpperCase()] || day;
const translateAppointmentType = (type) => appointmentTypeTranslations[type.toUpperCase()] || type;
const translateSpecialty = (specialty) => specialtiesTranslation[specialty.toUpperCase()] || specialty;
export { formatHour, translateDay, translateAppointmentType, translateSpecialty };

const data = [
  {
    "nombre": "Ana Martínez",
    "edad": 45,
    "tipo_sangre": "O+",
    "organo_necesario": "Riñón",
    "fecha_nacimiento": "6 agosto de 1978",
    "nota_medico": "El paciente presenta un control adecuado de la hipertensión arterial, con los valores de presión arterial dentro del rango objetivo establecido. No se han observado efectos secundarios significativos del tratamiento actual. Se recomienda continuar con el régimen de tratamiento con Lisinopril 10 mg diariamente para mantener el control de la presión arterial."
  },
  {
    "nombre": "Juan Perez",
    "edad": 60,
    "tipo_sangre": "A-",
    "organo_necesario": "Hígado",
    "fecha_nacimiento": "12 marzo de 1964",
    "nota_medico": "El paciente muestra una recuperación estable tras la cirugía de reemplazo de cadera. El control del dolor y la movilidad están mejorando. Se sugiere continuar con la terapia física y revisar los niveles de glucosa en sangre."
  },
  {
    "nombre": "Maria Lopez",
    "edad": 34,
    "tipo_sangre": "B+",
    "organo_necesario": "Corazón",
    "fecha_nacimiento": "22 noviembre de 1989",
    "nota_medico": "El paciente está respondiendo bien al tratamiento para la insuficiencia cardíaca. Los niveles de colesterol están bajo control, pero se recomienda seguir una dieta baja en sodio y realizar ejercicios regularmente."
  },
  {
    "nombre": "Jorge Fernández",
    "edad": 50,
    "tipo_sangre": "AB+",
    "organo_necesario": "Páncreas",
    "fecha_nacimiento": "5 enero de 1974",
    "nota_medico": "El paciente ha presentado una respuesta positiva al tratamiento de la diabetes tipo 2. Los niveles de glucosa en sangre están bien controlados. Se recomienda mantener el régimen de medicación y seguir con la dieta recomendada."
  },
  {
    "nombre": "María Martinez",
    "edad": 29,
    "tipo_sangre": "O-",
    "organo_necesario": "Hígado",
    "fecha_nacimiento": "15 julio de 1994",
    "nota_medico": "El paciente está en recuperación tras el trasplante de Hígado. Los signos vitales son estables y no se han detectado rechazos. Se debe continuar con el tratamiento inmunosupresor y realizar chequeos periódicos."
  },
  {
    "nombre": "Jose Fernandez",
    "edad": 62,
    "tipo_sangre": "B-",
    "organo_necesario": "Riñón",
    "fecha_nacimiento": "30 septiembre de 1961",
    "nota_medico": "El paciente está manejando adecuadamente la insuficiencia renal crónica con tratamiento de diálisis. Se recomienda seguir con las visitas regulares al nefrólogo y monitorear la presión arterial."
  },
  {
    "nombre": "Sofia Morales",
    "edad": 37,
    "tipo_sangre": "A+",
    "organo_necesario": "Corazón",
    "fecha_nacimiento": "18 febrero de 1987",
    "nota_medico": "El paciente presenta una recuperación satisfactoria tras la cirugía de bypass cardíaco. Los resultados de los exámenes son positivos, y se recomienda seguir con el régimen de medicación y la rehabilitación cardiovascular."
  },
  {
    "nombre": "Luis Torres",
    "edad": 40,
    "tipo_sangre": "O+",
    "organo_necesario": "Páncreas",
    "fecha_nacimiento": "4 abril de 1984",
    "nota_medico": "El paciente muestra un buen control de la diabetes con el tratamiento actual. Se recomienda continuar con el seguimiento regular y ajustar el tratamiento según los resultados de los exámenes de glucosa."
  },
  {
    "nombre": "Isabel Jiménez",
    "edad": 55,
    "tipo_sangre": "A-",
    "organo_necesario": "Hígado",
    "fecha_nacimiento": "9 octubre de 1968",
    "nota_medico": "El paciente está en fase de recuperación post-operatoria tras el trasplante de Hígado. Los resultados de los exámenes son alentadores y se recomienda continuar con el régimen de inmunosupresores y chequeos periódicos."
  },
  {
    "nombre": "Fernando Ramírez",
    "edad": 48,
    "tipo_sangre": "AB-",
    "organo_necesario": "Riñón",
    "fecha_nacimiento": "21 mayo de 1976",
    "nota_medico": "El paciente presenta un manejo adecuado de la insuficiencia renal con tratamiento de diálisis. Se recomienda mantener la adherencia al tratamiento y realizar monitoreos regulares de la función renal."
  },
  {
    "nombre": "Valeria Ortega",
    "edad": 33,
    "tipo_sangre": "B+",
    "organo_necesario": "Corazón",
    "fecha_nacimiento": "11 diciembre de 1990",
    "nota_medico": "El paciente está respondiendo positivamente al tratamiento para la enfermedad cardíaca. Se recomienda seguir con la medicación y la terapia de rehabilitación cardiovascular."
  },
  {
    "nombre": "Ricardo Castillo",
    "edad": 58,
    "tipo_sangre": "O-",
    "organo_necesario": "Páncreas",
    "fecha_nacimiento": "28 junio de 1965",
    "nota_medico": "El paciente muestra un control adecuado de la diabetes tipo 1. Se recomienda continuar con el tratamiento y monitorear regularmente los niveles de glucosa en sangre."
  },
  {
    "nombre": "Elena Vargas",
    "edad": 42,
    "tipo_sangre": "A+",
    "organo_necesario": "Hígado",
    "fecha_nacimiento": "14 noviembre de 1981",
    "nota_medico": "El paciente está en recuperación tras el trasplante de Hígado. Los resultados iniciales son positivos, y se debe continuar con el tratamiento inmunosupresor y chequeos regulares."
  },
  {
    "nombre": "Manuel Gómez",
    "edad": 39,
    "tipo_sangre": "B-",
    "organo_necesario": "Riñón",
    "fecha_nacimiento": "19 enero de 1985",
    "nota_medico": "El paciente está manejando adecuadamente la insuficiencia renal con tratamiento de diálisis. Se recomienda continuar con el régimen de tratamiento y monitorear la presión arterial."
  },
  {
    "nombre": "Carla Silva",
    "edad": 31,
    "tipo_sangre": "AB+",
    "organo_necesario": "Corazón",
    "fecha_nacimiento": "7 marzo de 1993",
    "nota_medico": "El paciente está respondiendo bien al tratamiento para la cardiopatía. Se recomienda seguir con el tratamiento y realizar chequeos periódicos para evaluar la función cardíaca."
  },
  {
    "nombre": "Héctor Morales",
    "edad": 53,
    "tipo_sangre": "O+",
    "organo_necesario": "Páncreas",
    "fecha_nacimiento": "25 diciembre de 1970",
    "nota_medico": "El paciente presenta una respuesta positiva al tratamiento de la diabetes tipo 2. Se recomienda mantener el régimen de medicación y seguir con la dieta recomendada."
  },
  {
    "nombre": "Nina Reyes",
    "edad": 46,
    "tipo_sangre": "A-",
    "organo_necesario": "Hígado",
    "fecha_nacimiento": "3 febrero de 1978",
    "nota_medico": "El paciente está en recuperación tras el trasplante de Hígado. Los resultados de los exámenes son positivos, y se recomienda seguir con el tratamiento inmunosupresor y realizar chequeos periódicos."
  },
  {
    "nombre": "Javier Soto",
    "edad": 44,
    "tipo_sangre": "B+",
    "organo_necesario": "Riñón",
    "fecha_nacimiento": "8 julio de 1979",
    "nota_medico": "El paciente está manejando adecuadamente la insuficiencia renal con tratamiento de diálisis. Se recomienda continuar con el régimen de tratamiento y monitorear la función renal."
  },
  {
    "nombre": "Gabriela Aguirre",
    "edad": 52,
    "tipo_sangre": "AB-",
    "organo_necesario": "Corazón",
    "fecha_nacimiento": "17 agosto de 1972",
    "nota_medico": "El paciente está en tratamiento para la insuficiencia cardíaca. Los resultados de los exámenes son alentadores y se recomienda seguir con la medicación y la terapia de rehabilitación cardiovascular."
  },
  {
    "nombre": "Alejandro Romero",
    "edad": 41,
    "tipo_sangre": "O-",
    "organo_necesario": "Páncreas",
    "fecha_nacimiento": "26 abril de 1983",
    "nota_medico": "El paciente muestra una buena respuesta al tratamiento de la diabetes tipo 1. Se recomienda mantener el régimen de medicación y realizar chequeos regulares para evaluar los niveles de glucosa."
  }
];

export default data;

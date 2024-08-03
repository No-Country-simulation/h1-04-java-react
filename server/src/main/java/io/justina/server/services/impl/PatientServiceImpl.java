package io.justina.server.services.impl;

import io.justina.server.dtos.request.*;
import io.justina.server.dtos.response.PatientResponseDTO;
import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.exceptions.DocumentNumberAlreadyExistsException;
import io.justina.server.exceptions.EmailAlreadyExistsException;
import io.justina.server.exceptions.PatientNotFoundException;
import io.justina.server.exceptions.RegistrationException;
import io.justina.server.repositories.*;
import io.justina.server.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private FinancierRepository financierRepository;

    @Autowired
    private InstitutionRepository institutionRepository;

    @Autowired
    private EmailService emailService;

    private final String DEFAULT_PASSWORD = "12345Aa*";

    @Override
    public PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO) {
        if (patientRepository.existsByEmail(patientRequestDTO.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists.");
        }

        if (patientRepository.existsByDocumentNumber(patientRequestDTO.getDocumentNumber())) {
            throw new DocumentNumberAlreadyExistsException("Document number already exists.");
        }

        try {
            Role patientRole = roleRepository.findByName("PATIENT")
                    .orElseThrow(() -> new RuntimeException("Role PATIENT not found"));

            Financier financier = financierRepository.findById(patientRequestDTO.getIdFinancier())
                    .orElseThrow(() -> new RuntimeException("Financier not found"));

            Institution noCountryInstitution = institutionRepository.findByName("NO_COUNTRY")
                    .orElseThrow(() -> new RuntimeException("Institution NO_COUNTRY not found"));

            Document document = Document.builder()
                    .documentType(DocumentType.valueOf(patientRequestDTO.getDocumentType()))
                    .documentNumber(patientRequestDTO.getDocumentNumber())
                    .build();

            Address address = Address.builder()
                    .street(patientRequestDTO.getStreet())
                    .number(patientRequestDTO.getNumber())
                    .district(patientRequestDTO.getDistrict())
                    .city(patientRequestDTO.getCity())
                    .province(patientRequestDTO.getProvince())
                    .postalCode(patientRequestDTO.getPostalCode())
                    .build();

            User user = User.builder()
                    .email(patientRequestDTO.getEmail())
                    .password(passwordEncoder.encode(DEFAULT_PASSWORD))
                    .firstName(patientRequestDTO.getFirstName())
                    .lastName(patientRequestDTO.getLastName())
                    .birthDate(patientRequestDTO.getBirthDate())
                    .phone(patientRequestDTO.getPhone())
                    .role(patientRole)
                    .isActive(true)
                    .institution(noCountryInstitution)
                    .document(document)
                    .address(address)
                    .build();

            user = userRepository.save(user);

            Patient patient = Patient.builder()
                    .user(user)
                    .medicalHistory(patientRequestDTO.getMedicalHistory() != null ? patientRequestDTO.getMedicalHistory() : new ArrayList<>())
                    .pathologies(patientRequestDTO.getPathologies() != null ? patientRequestDTO.getPathologies() : new ArrayList<>())
                    .transplanted(patientRequestDTO.getTransplanted())
                    .bloodType(patientRequestDTO.getBloodType())
                    .civilStatus(patientRequestDTO.getCivilStatus())
                    .children(patientRequestDTO.getChildren())
                    .crossTransplant(patientRequestDTO.getCrossTransplant())
                    .tutorFullName(patientRequestDTO.getTutorFullName())
                    .tutorPhone(patientRequestDTO.getTutorPhone())
                    .financier(financier)
                    .build();

            patient = patientRepository.save(patient);

            sendWelcomeEmail(user.getEmail(), user.getFirstName(), user.getLastName(), DEFAULT_PASSWORD);

            return new PatientResponseDTO(patient);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    private void sendWelcomeEmail(String userEmail, String firstName, String lastName, String password) {
        try {
            String htmlContent = getWelcomeEmailBody(firstName, lastName, userEmail, password);
            emailService.sendHtmlEmail(userEmail, "Bienvenido a Justina", htmlContent);
        } catch (Exception e) {
            System.err.println("Error sending Welcome Email: " + e.getMessage());
        }
    }

    private String getWelcomeEmailBody(String firstName, String lastName, String userEmail, String password) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"es\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Bienvenido a Justina</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: 'Arial', sans-serif;\n" +
                "            background-color: #f9f9f9;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "            font-size: 16px;\n" +
                "        }\n" +
                "        .container {\n" +
                "            max-width: 600px;\n" +
                "            margin: 30px auto;\n" +
                "            background-color: #ffffff;\n" +
                "            padding: 20px;\n" +
                "            border-radius: 8px;\n" +
                "            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n" +
                "        }\n" +
                "        .header {\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "        h1 {\n" +
                "            color: #ff6961;\n" +
                "            font-size: 24px;\n" +
                "        }\n" +
                "        p {\n" +
                "            color: #333333;\n" +
                "        }\n" +
                "        ul {\n" +
                "            color: #333333;\n" +
                "            list-style-type: disc;\n" +
                "            margin-left: 20px;\n" +
                "        }\n" +
                "        .footer {\n" +
                "            margin-top: 20px;\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "        .footer-content {\n" +
                "            background-color: #ff7f50;\n" +
                "            color: #ffffff;\n" +
                "            padding: 20px;\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "        .footer-content p {\n" +
                "            color: #ffffff;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"container\">\n" +
                "        <div class=\"header\">\n" +
                "            <img src=\"cid:logo\" alt=\"Justina.io Logo\" style=\"max-width: 100%; height: auto;\">\n" +
                "        </div>\n" +
                "        <h1>¡Bienvenido a Justina!</h1>\n" +
                "        <p>Estimado/a <span style=\"color: #e91e63;\">" + firstName + " " + lastName + "</span>,</p>\n" +
                "        <p>Gracias por unirte a Justina, tu plataforma de confianza para gestionar tu salud. Dentro de la plataforma, podrás:</p>\n" +
                "        <ul>\n" +
                "            <li>Ver y gestionar tus turnos con distintos especialistas.</li>\n" +
                "            <li>Consultar y gestionar tus tratamientos.</li>\n" +
                "            <li>Registrar y hacer seguimiento de tu actividad física.</li>\n" +
                "            <li>Gestionar tus medicamentos y dosis.</li>\n" +
                "            <li>Acceder y actualizar tu historial clínico.</li>\n" +
                "            <li>Recibir notificaciones y recordatorios importantes.</li>\n" +
                "            <li>Generar reportes y estadísticas de tu salud.</li>\n" +
                "        </ul>\n" +
                "        <p>A continuación, encontrarás tus credenciales para acceder a Justina:</p>\n" +
                "        <p><strong>Email:</strong> " + userEmail + "</p>\n" +
                "        <p><strong>Contraseña:</strong> " + password + "</p>\n" +
                "        <p>Puedes iniciar sesión <a href=\"https://hackaton-no-country.vercel.app/\">aquí</a>.</p>\n" +
                "        <div class=\"footer\">\n" +
                "            <p>Saludos cordiales,<br>El equipo de Justina</p>\n" +
                "        </div>\n" +
                "        <div class=\"footer-content\">\n" +
                "            <p>MEJORANDO VIDAS PARA UN FUTURO MEJOR</p>\n" +
                "            <p>Nos esforzamos por marcar la diferencia en la vida de nuestros pacientes, proporcionando atención y apoyo excepcionales.</p>\n" +
                "            <p>Si tienes alguna pregunta, no dudes en escribirnos a <a href=\"mailto:h104.justina@gmail.com\" style=\"color: #ffffff;\">h104.justina@gmail.com</a></p>\n" +
                "            <p>&copy; 2024 Justina</p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";
    }

    @Override
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll().stream()
                .map(PatientResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getPatientFiles(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        // Convertir los archivos a base64 para poder enviarlos en la respuesta
        return patient.getFiles().stream()
                .map(fileBytes -> Base64.getEncoder().encodeToString(fileBytes))
                .collect(Collectors.toList());
    }

    @Override
    public PatientResponseDTO getPatientById(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO updatePatient(Long patientId, PatientUpdateDTO patientUpdateDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        Financier financier = financierRepository.findById(patientUpdateDTO.getIdFinancier())
                .orElseThrow(() -> new RuntimeException("Financier not found"));

        patient.setTransplanted(patientUpdateDTO.getTransplanted());
        patient.setBloodType(patientUpdateDTO.getBloodType());
        patient.setCivilStatus(patientUpdateDTO.getCivilStatus());
        patient.setChildren(patientUpdateDTO.getChildren());
        patient.setCrossTransplant(patientUpdateDTO.getCrossTransplant());
        patient.setTutorFullName(patientUpdateDTO.getTutorFullName());
        patient.setTutorPhone(patientUpdateDTO.getTutorPhone());
        patient.setFinancier(financier);

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO uploadPatientFile(Long patientId, MultipartFile file) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        try {
            byte[] fileBytes = file.getBytes();
            if (patient.getFiles() == null) {
                patient.setFiles(new ArrayList<>());
            }
            patient.getFiles().add(fileBytes);
            patient = patientRepository.save(patient);
            return new PatientResponseDTO(patient);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file", e);
        }
    }

    @Override
    public PatientResponseDTO addMedicalHistory(Long patientId, AddMedicalHistoryDTO addMedicalHistoryDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        List<String> medicalHistory = patient.getMedicalHistory();
        if (medicalHistory == null) {
            medicalHistory = new ArrayList<>();
        }
        medicalHistory.add(addMedicalHistoryDTO.getMedicalHistoryEntry());

        patient.setMedicalHistory(medicalHistory);
        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO updateMedicalHistory(Long patientId, MedicalHistoryUpdateDTO medicalHistoryUpdateDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        patient.setMedicalHistory(medicalHistoryUpdateDTO.getMedicalHistory());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO addPathology(Long patientId, AddPathologyDTO pathologyAddDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        if (patient.getPathologies() == null) {
            patient.setPathologies(new ArrayList<>());
        }
        patient.getPathologies().add(pathologyAddDTO.getPathology());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    public PatientResponseDTO updatePathologies(Long patientId, PathologiesUpdateDTO pathologiesUpdateDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        patient.setPathologies(pathologiesUpdateDTO.getPathologies());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public void deactivatePatient(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        User user = patient.getUser();
        user.setIsActive(false);
        patientRepository.save(patient);
    }

}

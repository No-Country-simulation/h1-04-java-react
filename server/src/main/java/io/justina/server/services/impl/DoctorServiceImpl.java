package io.justina.server.services.impl;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.request.DoctorUpdateRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.dtos.response.UpdateDoctorResponseDTO;
import io.justina.server.entities.*;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.enumerations.Specialty;
import io.justina.server.exceptions.*;
import io.justina.server.repositories.*;
import io.justina.server.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.management.relation.RoleNotFoundException;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

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
    public DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) throws RoleNotFoundException, LicenceNumberAlreadyExistsException, EmailAlreadyExistsException, DocumentNumberAlreadyExistsException {
        if (doctorRepository.existsByLicenceNumber(doctorRequestDTO.getLicenceNumber())) {
            throw new LicenceNumberAlreadyExistsException("Licence number already exists.");
        }

        if (doctorRepository.existsByEmail(doctorRequestDTO.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists.");
        }

        if (doctorRepository.existsByDocumentNumber(doctorRequestDTO.getDocumentNumber())) {
            throw new DocumentNumberAlreadyExistsException("Document number already exists.");
        }

        Role doctorRole = roleRepository.findByName("DOCTOR")
                .orElseThrow(() -> new RoleNotFoundException("Role DOCTOR not found"));

        Financier financier = financierRepository.findById(doctorRequestDTO.getIdFinancier())
                .orElseThrow(() -> new FinancierNotFoundException("Financier not found"));

        Institution noCountryInstitution = institutionRepository.findByName("NO_COUNTRY")
                .orElseThrow(() -> new RegistrationException("Institution NO_COUNTRY not found"));

        Document document = Document.builder()
                .documentType(DocumentType.valueOf(doctorRequestDTO.getDocumentType()))
                .documentNumber(doctorRequestDTO.getDocumentNumber())
                .build();

        Address address = Address.builder()
                .street(doctorRequestDTO.getStreet())
                .number(doctorRequestDTO.getNumber())
                .district(doctorRequestDTO.getDistrict())
                .city(doctorRequestDTO.getCity())
                .province(doctorRequestDTO.getProvince())
                .postalCode(doctorRequestDTO.getPostalCode())
                .build();

        User user = User.builder()
                .email(doctorRequestDTO.getEmail())
                .password(passwordEncoder.encode(DEFAULT_PASSWORD))
                .firstName(doctorRequestDTO.getFirstName())
                .lastName(doctorRequestDTO.getLastName())
                .birthDate(doctorRequestDTO.getBirthDate())
                .phone(doctorRequestDTO.getPhone())
                .role(doctorRole)
                .isActive(true)
                .institution(noCountryInstitution)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Doctor doctor = Doctor.builder()
                .user(user)
                .licenceNumber(doctorRequestDTO.getLicenceNumber())
                .specialties(doctorRequestDTO.getSpecialties())
                .workdays(doctorRequestDTO.getWorkdays())
                .schedule(EnumSet.allOf(AvailableHours.class))
                .financier(financier)
                .build();

        doctor = doctorRepository.save(doctor);

        sendWelcomeEmail(user.getEmail(), user.getFirstName(), user.getLastName(), DEFAULT_PASSWORD);

        return new DoctorResponseDTO(doctor);
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
                "        <p>Estimado/a Dr(a). <span style=\"color: #e91e63;\">" + firstName + " " + lastName + "</span>,</p>\n" +
                "        <p>Gracias por unirte a Justina, tu plataforma de confianza para gestionar todas las necesidades médicas y administrativas. Dentro de la plataforma, podrás:</p>\n" +
                "        <ul>\n" +
                "            <li>Ver y gestionar la información de tus pacientes.</li>\n" +
                "            <li>Programar y gestionar tus citas médicas.</li>\n" +
                "            <li>Acceder y actualizar el historial clínico de tus pacientes.</li>\n" +
                "            <li>Emitir recetas médicas electrónicas.</li>\n" +
                "            <li>Recibir notificaciones y recordatorios importantes.</li>\n" +
                "            <li>Generar reportes y estadísticas de tus consultas.</li>\n" +
                "            <li>Acceder a recursos y herramientas educativas.</li>\n" +
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
                "            <p>Nos esforzamos por marcar la diferencia en la vida de nuestros pacientes y profesionales de la salud, proporcionando atención y apoyo excepcionales.</p>\n" +
                "            <p>Si tienes alguna pregunta, no dudes en escribirnos a <a href=\"mailto:h104.justina@gmail.com\" style=\"color: #ffffff;\">h104.justina@gmail.com</a></p>\n" +
                "            <p>&copy; 2024 Justina</p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";
    }

    @Override
    public DoctorResponseDTO getDoctorById(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        return new DoctorResponseDTO(doctor);
    }

    @Override
    public List<DoctorResponseDTO> getAllDoctors() {
        return doctorRepository.findAll().stream()
                .map(DoctorResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public UpdateDoctorResponseDTO updateDoctor(Long id, DoctorUpdateRequestDTO doctorUpdateRequestDTO) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));

        if (doctorUpdateRequestDTO.getSpecialties() != null) {
            validateEnumOptions(doctorUpdateRequestDTO.getSpecialties(), Specialty.class);
            doctor.setSpecialties(doctorUpdateRequestDTO.getSpecialties());
        }

        if (doctorUpdateRequestDTO.getLicenceNumber() != null) {
            doctor.setLicenceNumber(doctorUpdateRequestDTO.getLicenceNumber());
        }

        if (doctorUpdateRequestDTO.getWorkdays() != null) {
            validateEnumOptions(doctorUpdateRequestDTO.getWorkdays(), Day.class);
            doctor.setWorkdays(doctorUpdateRequestDTO.getWorkdays());
        }

        if (doctorUpdateRequestDTO.getSchedule() != null) {
            validateEnumOptions(doctorUpdateRequestDTO.getSchedule(), AvailableHours.class);
            doctor.setSchedule(doctorUpdateRequestDTO.getSchedule());
        }

        doctor = doctorRepository.save(doctor);
        return new UpdateDoctorResponseDTO(doctor);
    }

    private <T extends Enum<T>> void validateEnumOptions(Set<T> values, Class<T> enumClass) {
        for (T value : values) {
            if (!EnumSet.allOf(enumClass).contains(value)) {
                throw new IllegalArgumentException("Invalid value for enum " + enumClass.getSimpleName());
            }
        }
    }

    @Override
    public void deactivateDoctor(Long doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        User user = doctor.getUser();
        user.setIsActive(false);
        doctor.setUser(user);
        doctorRepository.save(doctor);
    }

}

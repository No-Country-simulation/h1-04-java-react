package io.justina.server.data;

import io.justina.server.entities.*;
import io.justina.server.enumerations.BloodType;
import io.justina.server.enumerations.CivilStatus;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.List;

@Component
@Order(10)
public class DataLoaderPatient implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private FinancierRepository financierRepository;

    @Autowired
    private InstitutionRepository institutionRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        if (roleRepository.findByName("PATIENT").isEmpty()) {
            Role patientRole = new Role();
            patientRole.setName("PATIENT");
            roleRepository.save(patientRole);
        }

        Role patientRole = roleRepository.findByName("PATIENT")
                .orElseThrow(() -> new RuntimeException("Role PATIENT not found"));

        Financier financier = financierRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("Financier not found"));

        Institution defaultInstitution = institutionRepository.findByName("JUSTINA_IO")
                .orElseThrow(() -> new RuntimeException("Institution JUSTINA_IO not found"));

        createPatientUser("juan@patient.com", "Juan", "Perez", patientRole, "DNI", "1236645678", "Calle Corrientes", "1234", "San Nicolás", "CABA", "Buenos Aires", "1043", "+541112345678", LocalDate.of(1985, 5, 15), financier, defaultInstitution, List.of("Hipertensión", "Diabetes tipo 2"), List.of("Operación de apendicitis en 2010", "Tratamiento de quimioterapia en 2015"), BloodType.O_POSITIVE, CivilStatus.SINGLE, 2, "No", "María Perez", "+549112345678");
        createPatientUser("maria@patient.com", "Maria", "Lopez", patientRole, "DNI", "2366456789", "Av. Santa Fe", "5678", "Palermo", "CABA", "Buenos Aires", "1425", "+541198765432", LocalDate.of(1990, 3, 22), financier, defaultInstitution, List.of("Asma"), List.of("Neumonía en 2018", "Cirugía de rodilla en 2019"), BloodType.A_NEGATIVE, CivilStatus.MARRIED, 1, "No", "Carlos Lopez", "+5491198765432");
        createPatientUser("carlos@patient.com", "Carlos", "Gomez", patientRole, "DNI", "3466567890", "Calle Florida", "987", "Retiro", "CABA", "Buenos Aires", "1005", "+541176543210", LocalDate.of(1978, 8, 30), financier, defaultInstitution, List.of("Enfermedad celíaca"), List.of("Alergia a los mariscos", "Hospitalización por gastroenteritis en 2020"), BloodType.B_POSITIVE, CivilStatus.DIVORCED, 0, "No", "Ana Gomez", "+5491176543210");
        createPatientUser("ana@patient.com", "Ana", "Martinez", patientRole, "DNI", "4566678901", "Av. Callao", "456", "Recoleta", "CABA", "Buenos Aires", "1022", "+541165432198", LocalDate.of(1982, 12, 10), financier, defaultInstitution, List.of("Artritis reumatoide"), List.of("Fractura de brazo en 2016", "Tratamiento de fisioterapia en 2017"), BloodType.O_NEGATIVE, CivilStatus.WIDOWED, 3, "Sí", "Miguel Martinez", "+5491165432198");
        createPatientUser("jose@patient.com", "Jose", "Fernandez", patientRole, "DNI", "5666789012", "Av. Belgrano", "789", "Monserrat", "CABA", "Buenos Aires", "1092", "+541154321987", LocalDate.of(1975, 1, 5), financier, defaultInstitution, List.of("Hipotiroidismo"), List.of("Cirugía de tiroides en 2019", "Tratamiento de radioterapia en 2020"), BloodType.AB_POSITIVE, CivilStatus.SINGLE, 0, "No", "Laura Fernandez", "+5491154321987");
    }

    private void createPatientUser(String email, String firstName, String lastName, Role patientRole, String documentType, String documentNumber, String street, String number, String district, String city, String province, String postalCode, String phone, LocalDate birthDate, Financier financier, Institution institution, List<String> pathologies, List<String> medicalHistory, BloodType bloodType, CivilStatus civilStatus, Integer children, String crossTransplant, String tutorFullName, String tutorPhone) {
        if (userRepository.existsByEmail(email)) {
            return;
        }

        Address address = Address.builder()
                .street(street)
                .number(number)
                .district(district)
                .city(city)
                .province(province)
                .postalCode(postalCode)
                .build();

        Document document = Document.builder()
                .documentType(DocumentType.valueOf(documentType))
                .documentNumber(documentNumber)
                .build();

        User user = User.builder()
                .email(email)
                .password(passwordEncoder.encode("12345Aa*"))
                .firstName(firstName)
                .lastName(lastName)
                .birthDate(birthDate)
                .phone(phone)
                .role(patientRole)
                .isActive(true)
                .institution(institution)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Patient patient = Patient.builder()
                .user(user)
                .pathologies(pathologies)
                .medicalHistory(medicalHistory)
                .transplanted(crossTransplant.equalsIgnoreCase("Sí"))
                .bloodType(bloodType)
                .civilStatus(civilStatus)
                .children(children)
                .crossTransplant(crossTransplant)
                .tutorFullName(tutorFullName)
                .tutorPhone(tutorPhone)
                .financier(financier)
                .build();
        patientRepository.save(patient);
    }

}
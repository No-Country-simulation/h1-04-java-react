//package io.justina.server.data;
//
//import io.justina.server.entities.*;
//import io.justina.server.enumerations.BloodType;
//import io.justina.server.enumerations.CivilStatus;
//import io.justina.server.enumerations.DocumentType;
//import io.justina.server.repositories.FinancierRepository;
//import io.justina.server.repositories.PatientRepository;
//import io.justina.server.repositories.RoleRepository;
//import io.justina.server.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//import javax.management.relation.RoleNotFoundException;
//import java.time.LocalDate;
//import java.util.List;
//
//@Component
//@Order(8)
//public class DataLoaderPatient implements CommandLineRunner {
//
//    @Autowired
//    private PatientRepository patientRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private RoleRepository roleRepository;
//
//    @Autowired
//    private FinancierRepository financierRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    private final String DEFAULT_PASSWORD = "12345Aa*";
//
//    @Override
//    public void run(String... args) throws Exception {
//        if (patientRepository.count() == 0) {
//            Role patientRole = roleRepository.findByName("PATIENT")
//                    .orElseThrow(() -> new RoleNotFoundException("Role PATIENT not found"));
//
//            List<Financier> financiers = financierRepository.findAll();
//            if (financiers.isEmpty()) {
//                throw new RuntimeException("No financiers found. Please load financiers first.");
//            }
//
//            List<Patient> patients = List.of(
//                    createPatient("Carlos", "González", "carlos.gonzalez@example.com", "12345678", "+54 351 1234567", LocalDate.of(1980, 1, 1), financiers.get(0), patientRole,
//                            CivilStatus.SINGLE, BloodType.A_POSITIVE, "Av. Santa Fe", "1234", "Recoleta", "CABA", "Buenos Aires", "C1055"),
//                    createPatient("Lucía", "Pérez", "lucia.perez@example.com", "23456789", "+54 351 2345678", LocalDate.of(1985, 2, 2), financiers.get(1), patientRole,
//                            CivilStatus.MARRIED, BloodType.O_NEGATIVE, "Calle Florida", "5678", "San Nicolás", "CABA", "Buenos Aires", "C1005"),
//                    createPatient("Javier", "Martínez", "javier.martinez@example.com", "34567890", "+54 351 3456789", LocalDate.of(1990, 3, 3), financiers.get(2), patientRole,
//                            CivilStatus.SEPARATED, BloodType.B_POSITIVE, "Av. Corrientes", "7890", "Balvanera", "CABA", "Buenos Aires", "C1043"),
//                    createPatient("Ana", "Rodríguez", "ana.rodriguez@example.com", "45678901", "+54 351 4567890", LocalDate.of(1995, 4, 4), financiers.get(3), patientRole,
//                            CivilStatus.DIVORCED, BloodType.AB_NEGATIVE, "Calle Lavalle", "8901", "San Nicolás", "CABA", "Buenos Aires", "C1048"),
//                    createPatient("María", "López", "maria.lopez@example.com", "56789012", "+54 351 5678901", LocalDate.of(1982, 5, 5), financiers.get(4), patientRole,
//                            CivilStatus.WIDOWED, BloodType.O_POSITIVE, "Av. Córdoba", "9012", "Palermo", "CABA", "Buenos Aires", "C1055"),
//                    createPatient("Pedro", "Gómez", "pedro.gomez@example.com", "67890123", "+54 351 6789012", LocalDate.of(1987, 6, 6), financiers.get(5), patientRole,
//                            CivilStatus.COHABITATING, BloodType.A_NEGATIVE, "Calle Sarmiento", "12345", "Retiro", "CABA", "Buenos Aires", "C1001"),
//                    createPatient("Sofía", "Fernández", "sofia.fernandez@example.com", "78901234", "+54 351 7890123", LocalDate.of(1992, 7, 7), financiers.get(6), patientRole,
//                            CivilStatus.SINGLE, BloodType.B_NEGATIVE, "Av. de Mayo", "56789", "Monserrat", "CABA", "Buenos Aires", "C1085"),
//                    createPatient("Miguel", "Ruiz", "miguel.ruiz@example.com", "89012345", "+54 351 8901234", LocalDate.of(1983, 8, 8), financiers.get(7), patientRole,
//                            CivilStatus.MARRIED, BloodType.AB_POSITIVE, "Calle Tacuarí", "78901", "San Telmo", "CABA", "Buenos Aires", "C1069"),
//                    createPatient("Julia", "Sánchez", "julia.sanchez@example.com", "90123456", "+54 351 9012345", LocalDate.of(1988, 9, 9), financiers.get(8), patientRole,
//                            CivilStatus.SEPARATED, BloodType.O_NEGATIVE, "Av. Rivadavia", "89012", "Caballito", "CABA", "Buenos Aires", "C1405"),
//                    createPatient("Hernán", "Morales", "hernan.morales@example.com", "01234567", "+54 351 0123456", LocalDate.of(1993, 10, 10), financiers.get(9), patientRole,
//                            CivilStatus.DIVORCED, BloodType.A_POSITIVE, "Calle Callao", "90123", "Recoleta", "CABA", "Buenos Aires", "C1425")
//            );
//
//            patientRepository.saveAll(patients);
//        }
//    }
//
//    private Patient createPatient(String firstName, String lastName, String email, String documentNumber, String phone, LocalDate birthDate, Financier financier, Role role,
//                                  CivilStatus civilStatus, BloodType bloodType, String street, String number, String district, String city, String province, String postalCode) {
//        Document document = Document.builder()
//                .documentType(DocumentType.DNI)
//                .documentNumber(documentNumber)
//                .build();
//
//        User user = User.builder()
//                .email(email)
//                .password(passwordEncoder.encode(DEFAULT_PASSWORD))
//                .firstName(firstName)
//                .lastName(lastName)
//                .birthDate(birthDate)
//                .phone(phone)
//                .role(role)
//                .isActive(true)
//                .document(document)
//                .address(createAddress(street, number, district, city, province, postalCode))
//                .build();
//
//        user = userRepository.save(user);
//
//        return Patient.builder()
//                .user(user)
//                .medicalHistory(List.of("Historial médico de " + firstName))
//                .pathologies(List.of("Patología de " + firstName))
//                .transplanted(false)
//                .bloodType(bloodType)
//                .civilStatus(civilStatus)
//                .children(2)
//                .crossTransplant("No aplica")
//                .tutorFullName("Tutor de " + firstName)
//                .tutorPhone("+54 351 " + documentNumber.substring(0, 7))
//                .financier(financier)
//                .build();
//    }
//
//    private Address createAddress(String street, String number, String district, String city, String province, String postalCode) {
//        return Address.builder()
//                .street(street)
//                .number(number)
//                .district(district)
//                .city(city)
//                .province(province)
//                .postalCode(postalCode)
//                .build();
//    }
//
//}
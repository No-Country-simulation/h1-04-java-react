package io.justina.server.data;

import io.justina.server.entities.*;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.enumerations.Specialty;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.FinancierRepository;
import io.justina.server.repositories.RoleRepository;
import io.justina.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import javax.management.relation.RoleNotFoundException;
import java.time.LocalDate;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;

@Component
@Order(10)
public class DataLoaderDoctor implements CommandLineRunner {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private FinancierRepository financierRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final String DEFAULT_PASSWORD = "12345Aa*";

    @Override
    public void run(String... args) throws Exception {
        if (doctorRepository.count() == 0) {
            Role doctorRole = roleRepository.findByName("DOCTOR")
                    .orElseThrow(() -> new RoleNotFoundException("Role DOCTOR not found"));

            List<Financier> financiers = financierRepository.findAll();
            if (financiers.isEmpty()) {
                throw new RuntimeException("No financiers found. Please load financiers first.");
            }

            List<Doctor> doctors = List.of(
                    createDoctor("Juan", "Pérez", "juan.perez@example.com", "12345678", "+54 351 1234567", LocalDate.of(1980, 1, 1), financiers.get(0), doctorRole, Set.of(Specialty.CARDIOLOGY),
                            createAddress("Av. Santa Fe", "1234", "Recoleta", "CABA", "Buenos Aires", "C1055")),
                    createDoctor("María", "García", "maria.garcia@example.com", "23456789", "+54 351 2345678", LocalDate.of(1985, 2, 2), financiers.get(1), doctorRole, Set.of(Specialty.DERMATOLOGY),
                            createAddress("Calle Florida", "5678", "San Nicolás", "CABA", "Buenos Aires", "C1005")),
                    createDoctor("Carlos", "López", "carlos.lopez@example.com", "34567890", "+54 351 3456789", LocalDate.of(1990, 3, 3), financiers.get(2), doctorRole, Set.of(Specialty.NEUROLOGY),
                            createAddress("Av. Corrientes", "7890", "Balvanera", "CABA", "Buenos Aires", "C1043")),
                    createDoctor("Ana", "Martínez", "ana.martinez@example.com", "45678901", "+54 351 4567890", LocalDate.of(1995, 4, 4), financiers.get(3), doctorRole, Set.of(Specialty.ORTHOPEDICS),
                            createAddress("Calle Lavalle", "8901", "San Nicolás", "CABA", "Buenos Aires", "C1048")),
                    createDoctor("Pablo", "Rodríguez", "pablo.rodriguez@example.com", "56789012", "+54 351 5678901", LocalDate.of(1982, 5, 5), financiers.get(4), doctorRole, Set.of(Specialty.PEDIATRICS),
                            createAddress("Av. Córdoba", "9012", "Palermo", "CABA", "Buenos Aires", "C1055")),
                    createDoctor("Laura", "González", "laura.gonzalez@example.com", "67890123", "+54 351 6789012", LocalDate.of(1987, 6, 6), financiers.get(5), doctorRole, Set.of(Specialty.PSYCHIATRY),
                            createAddress("Calle Sarmiento", "12345", "Retiro", "CABA", "Buenos Aires", "C1001")),
                    createDoctor("Jorge", "Fernández", "jorge.fernandez@example.com", "78901234", "+54 351 7890123", LocalDate.of(1992, 7, 7), financiers.get(6), doctorRole, Set.of(Specialty.RADIOLOGY),
                            createAddress("Av. de Mayo", "56789", "Monserrat", "CABA", "Buenos Aires", "C1085")),
                    createDoctor("Sofía", "Gómez", "sofia.gomez@example.com", "89012345", "+54 351 8901234", LocalDate.of(1983, 8, 8), financiers.get(7), doctorRole, Set.of(Specialty.SURGERY),
                            createAddress("Calle Tacuarí", "78901", "San Telmo", "CABA", "Buenos Aires", "C1069")),
                    createDoctor("Miguel", "Hernández", "miguel.hernandez@example.com", "90123456", "+54 351 9012345", LocalDate.of(1988, 9, 9), financiers.get(8), doctorRole, Set.of(Specialty.UROLOGY),
                            createAddress("Av. Rivadavia", "89012", "Caballito", "CABA", "Buenos Aires", "C1405")),
                    createDoctor("Lucía", "Ruiz", "lucia.ruiz@example.com", "01234567", "+54 351 0123456", LocalDate.of(1993, 10, 10), financiers.get(9), doctorRole, Set.of(Specialty.GYNECOLOGY),
                            createAddress("Calle Callao", "90123", "Recoleta", "CABA", "Buenos Aires", "C1425")),
                    createDoctor("Martín", "Díaz", "martin.diaz@example.com", "22334455", "+54 351 2233445", LocalDate.of(1981, 11, 11), financiers.get(10), doctorRole, Set.of(Specialty.GASTROENTEROLOGY),
                            createAddress("Calle Montevideo", "11234", "Balvanera", "CABA", "Buenos Aires", "C1023")),
                    createDoctor("Valeria", "Álvarez", "valeria.alvarez@example.com", "33445566", "+54 351 3344556", LocalDate.of(1986, 12, 12), financiers.get(11), doctorRole, Set.of(Specialty.ENDOCRINOLOGY),
                            createAddress("Av. Callao", "22345", "San Nicolás", "CABA", "Buenos Aires", "C1022")),
                    createDoctor("Diego", "Ramírez", "diego.ramirez@example.com", "44556677", "+54 351 4455667", LocalDate.of(1991, 1, 13), financiers.get(12), doctorRole, Set.of(Specialty.ONCOLOGY),
                            createAddress("Calle Ayacucho", "33456", "Balvanera", "CABA", "Buenos Aires", "C1084")),
                    createDoctor("Julieta", "Torres", "julieta.torres@example.com", "55667788", "+54 351 5566778", LocalDate.of(1996, 2, 14), financiers.get(13), doctorRole, Set.of(Specialty.OPHTHALMOLOGY),
                            createAddress("Calle Rodríguez Peña", "44567", "San Nicolás", "CABA", "Buenos Aires", "C1043")),
                    createDoctor("Federico", "Sánchez", "federico.sanchez@example.com", "66778899", "+54 351 6677889", LocalDate.of(1984, 3, 15), financiers.get(14), doctorRole, Set.of(Specialty.REHABILITATION),
                            createAddress("Calle Junín", "55678", "Recoleta", "CABA", "Buenos Aires", "C1113")),
                    createDoctor("Patricia", "Cruz", "patricia.cruz@example.com", "77889900", "+54 351 7788990", LocalDate.of(1989, 4, 16), financiers.get(15), doctorRole, Set.of(Specialty.NUTRITION),
                            createAddress("Calle Paraná", "66789", "Balvanera", "CABA", "Buenos Aires", "C1041")),
                    createDoctor("Gustavo", "Ortiz", "gustavo.ortiz@example.com", "88990011", "+54 351 8899001", LocalDate.of(1994, 5, 17), financiers.get(16), doctorRole, Set.of(Specialty.PATHOLOGY),
                            createAddress("Av. Belgrano", "77890", "Monserrat", "CABA", "Buenos Aires", "C1092")),
                    createDoctor("Florencia", "Morales", "florencia.morales@example.com", "99001122", "+54 351 9900112", LocalDate.of(1981, 6, 18), financiers.get(17), doctorRole, Set.of(Specialty.NEPHROLOGY),
                            createAddress("Calle Talcahuano", "88901", "San Nicolás", "CABA", "Buenos Aires", "C1013")),
                    createDoctor("Hernán", "Suárez", "hernan.suarez@example.com", "10001123", "+54 351 1000113", LocalDate.of(1986, 7, 19), financiers.get(18), doctorRole, Set.of(Specialty.PSYCHOLOGY),
                            createAddress("Calle Esmeralda", "99012", "San Nicolás", "CABA", "Buenos Aires", "C1007")),
                    createDoctor("Camila", "Rojas", "camila.rojas@example.com", "11001124", "+54 351 1100114", LocalDate.of(1991, 8, 20), financiers.get(19), doctorRole, Set.of(Specialty.GERIATRICS),
                            createAddress("Av. Callao", "10123", "Balvanera", "CABA", "Buenos Aires", "C1042"))
            );

            doctorRepository.saveAll(doctors);
        }
    }

    private Doctor createDoctor(String firstName, String lastName, String email, String documentNumber, String phone, LocalDate birthDate, Financier financier, Role role, Set<Specialty> specialties, Address address) {
        Document document = Document.builder()
                .documentType(DocumentType.DNI)
                .documentNumber(documentNumber)
                .build();

        User user = User.builder()
                .email(email)
                .password(passwordEncoder.encode(DEFAULT_PASSWORD))
                .firstName(firstName)
                .lastName(lastName)
                .birthDate(birthDate)
                .phone(phone)
                .role(role)
                .isActive(true)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        return Doctor.builder()
                .user(user)
                .licenceNumber("LIC-" + documentNumber)
                .specialties(specialties)
                .workdays(EnumSet.allOf(Day.class))
                .schedule(EnumSet.allOf(AvailableHours.class))
                .financier(financier)
                .build();
    }

    private Address createAddress(String street, String number, String district, String city, String province, String postalCode) {
        return Address.builder()
                .street(street)
                .number(number)
                .district(district)
                .city(city)
                .province(province)
                .postalCode(postalCode)
                .build();
    }

}



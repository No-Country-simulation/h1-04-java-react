package io.justina.server.data;

import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;

@Component
@Order(9)
public class DataLoaderDoctor implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DoctorRepository doctorRepository;

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
        if (roleRepository.findByName("DOCTOR").isEmpty()) {
            Role doctorRole = new Role();
            doctorRole.setName("DOCTOR");
            roleRepository.save(doctorRole);
        }

        Role doctorRole = roleRepository.findByName("DOCTOR")
                .orElseThrow(() -> new RuntimeException("Role DOCTOR not found"));

        Financier financier = financierRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("Financier not found"));

        Institution defaultInstitution = institutionRepository.findByName("JUSTINA_IO")
                .orElseThrow(() -> new RuntimeException("Institution JUSTINA_IO not found"));

        createDoctorUser("doctor1@doctor.com", "Martín", "Álvarez", doctorRole, defaultInstitution, financier, "DNI", "12395678123", "Calle Corrientes", "1234", "San Nicolás", "CABA", "Buenos Aires", "1043", "+541112345678", LocalDate.of(1980, 5, 20), "LIC123456");
        createDoctorUser("doctor2@doctor.com", "Laura", "Fernández", doctorRole, defaultInstitution, financier, "DNI", "23496789123", "Av. Santa Fe", "5678", "Palermo", "CABA", "Buenos Aires", "1425", "+541198765432", LocalDate.of(1985, 8, 15), "LIC234567");
        createDoctorUser("doctor3@doctor.com", "Carlos", "Domínguez", doctorRole, defaultInstitution, financier, "DNI", "34967890123", "Calle Florida", "987", "Retiro", "CABA", "Buenos Aires", "1005", "+541176543210", LocalDate.of(1990, 11, 10), "LIC345678");
        createDoctorUser("doctor4@doctor.com", "Sofía", "Gutiérrez", doctorRole, defaultInstitution, financier, "DNI", "45698901123", "Av. Callao", "456", "Recoleta", "CABA", "Buenos Aires", "1022", "+541165432198", LocalDate.of(1975, 3, 5), "LIC456789");
        createDoctorUser("doctor5@doctor.com", "Javier", "Martínez", doctorRole, defaultInstitution, financier, "DNI", "56799012123", "Av. Belgrano", "789", "Monserrat", "CABA", "Buenos Aires", "1092", "+541154321987", LocalDate.of(1982, 12, 25), "LIC567890");
    }

    private void createDoctorUser(String email, String firstName, String lastName, Role doctorRole, Institution institution, Financier financier, String documentType, String documentNumber, String street, String number, String district, String city, String province, String postalCode, String phone, LocalDate birthDate, String licenceNumber) {
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
                .role(doctorRole)
                .isActive(true)
                .institution(institution)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Doctor doctor = Doctor.builder()
                .licenceNumber(licenceNumber)
                .user(user)
                .financier(financier)
                .build();
        doctorRepository.save(doctor);
    }

}


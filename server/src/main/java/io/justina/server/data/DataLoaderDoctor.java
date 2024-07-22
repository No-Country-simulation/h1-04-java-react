package io.justina.server.data;

import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.FinancierRepository;
import io.justina.server.repositories.RoleRepository;
import io.justina.server.repositories.UserRepository;
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

        createDoctorUser("doctor1@example.com", "Doctor", "One", doctorRole, "DNI", "12345678123", "Calle Falsa", "123", "Barrio Ficticio", "Ciudad Ejemplo", "Provincia Ejemplo", "1000", financier);
        createDoctorUser("doctor2@example.com", "Doctor", "Two", doctorRole, "DNI", "23456789123", "Av. Siempre Viva", "742", "Barrio Springfield", "Ciudad Ejemplo", "Provincia Ejemplo", "2000", financier);
        createDoctorUser("doctor3@example.com", "Doctor", "Three", doctorRole, "DNI", "34567890123", "Calle Inventada", "456", "Barrio Imaginario", "Ciudad Ejemplo", "Provincia Ejemplo", "3000", financier);
        createDoctorUser("doctor4@example.com", "Doctor", "Four", doctorRole, "DNI", "45678901123", "Av. Principal", "789", "Barrio Central", "Ciudad Ejemplo", "Provincia Ejemplo", "4000", financier);
        createDoctorUser("doctor5@example.com", "Doctor", "Five", doctorRole, "DNI", "56789012123", "Calle Secundaria", "321", "Barrio Alternativo", "Ciudad Ejemplo", "Provincia Ejemplo", "5000", financier);
    }

    private void createDoctorUser(String email, String firstName, String lastName, Role doctorRole, String documentType, String documentNumber, String street, String number, String district, String city, String province, String postalCode, Financier financier) {
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
                .birthDate(LocalDate.of(1980, 1, 1))
                .phone("+1234567890")
                .role(doctorRole)
                .isActive(true)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Doctor doctor = Doctor.builder()
                .licenceNumber("123456")
                .user(user)
                .financier(financier)
                .build();
        doctorRepository.save(doctor);
    }
    
}


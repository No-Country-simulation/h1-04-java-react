package io.justina.server.data;

import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.repositories.FinancierRepository;
import io.justina.server.repositories.PatientRepository;
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

        createPatientUser("patient1@example.com", "Patient", "One", patientRole, "DNI", "12345678666", "Calle Falsa", "123", "Barrio Ficticio", "Ciudad Ejemplo", "Provincia Ejemplo", "1000", financier);
        createPatientUser("patient2@example.com", "Patient", "Two", patientRole, "DNI", "23456789666", "Av. Siempre Viva", "742", "Barrio Springfield", "Ciudad Ejemplo", "Provincia Ejemplo", "2000", financier);
        createPatientUser("patient3@example.com", "Patient", "Three", patientRole, "DNI", "34567890666", "Calle Inventada", "456", "Barrio Imaginario", "Ciudad Ejemplo", "Provincia Ejemplo", "3000", financier);
        createPatientUser("patient4@example.com", "Patient", "Four", patientRole, "DNI", "45678901666", "Av. Principal", "789", "Barrio Central", "Ciudad Ejemplo", "Provincia Ejemplo", "4000", financier);
        createPatientUser("patient5@example.com", "Patient", "Five", patientRole, "DNI", "56789012666", "Calle Secundaria", "321", "Barrio Alternativo", "Ciudad Ejemplo", "Provincia Ejemplo", "5000", financier);
    }

    private void createPatientUser(String email, String firstName, String lastName, Role patientRole, String documentType, String documentNumber, String street, String number, String district, String city, String province, String postalCode, Financier financier) {
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
                .role(patientRole)
                .isActive(true)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Patient patient = Patient.builder()
                .user(user)
                .financier(financier)
                .build();
        patientRepository.save(patient);
    }

}
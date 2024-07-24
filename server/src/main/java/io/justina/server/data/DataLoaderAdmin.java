package io.justina.server.data;

import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.repositories.InstitutionRepository;
import io.justina.server.repositories.RoleRepository;
import io.justina.server.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.LocalDate;
@Component
@Order(10)
public class DataLoaderAdmin implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private InstitutionRepository institutionRepository;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.findByName("ADMIN").isEmpty()) {
            Role adminRole = new Role();
            adminRole.setName("ADMIN");
            roleRepository.save(adminRole);
        }

        Role adminRole = roleRepository.findByName("ADMIN")
                .orElseThrow(() -> new RuntimeException("Role ADMIN not found"));

        Institution defaultInstitution = institutionRepository.findByName("JUSTINA_IO")
                .orElseThrow(() -> new RuntimeException("Institution JUSTINA_IO not found"));

        createAdminUser("admin1@admin.com", "Federico", "González", adminRole, defaultInstitution, "DNI", "120045678", "Calle Corrientes", "1234", "San Nicolás", "CABA", "Buenos Aires", "1043", "+541112345678", LocalDate.of(1980, 5, 20));
        createAdminUser("admin2@admin.com", "Elena", "Ramírez", adminRole, defaultInstitution, "DNI", "2300456789", "Av. Santa Fe", "5678", "Palermo", "CABA", "Buenos Aires", "1425", "+541198765432", LocalDate.of(1985, 8, 15));
        createAdminUser("admin3@admin.com", "Andrés", "Torres", adminRole, defaultInstitution, "DNI", "3400567890", "Calle Florida", "987", "Retiro", "CABA", "Buenos Aires", "1005", "+541176543210", LocalDate.of(1990, 11, 10));
        createAdminUser("admin4@admin.com", "Valeria", "Sánchez", adminRole, defaultInstitution, "DNI", "4500678901", "Av. Callao", "456", "Recoleta", "CABA", "Buenos Aires", "1022", "+541165432198", LocalDate.of(1975, 3, 5));
        createAdminUser("admin5@admin.com", "Roberto", "Herrera", adminRole, defaultInstitution, "DNI", "5600789012", "Av. Belgrano", "789", "Monserrat", "CABA", "Buenos Aires", "1092", "+541154321987", LocalDate.of(1982, 12, 25));
    }

    private void createAdminUser(String email, String firstName, String lastName, Role adminRole, Institution institution, String documentType, String documentNumber, String street, String number, String district, String city, String province, String postalCode, String phone, LocalDate birthDate) {
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
                .role(adminRole)
                .isActive(true)
                .institution(institution)
                .document(document)
                .address(address)
                .build();

        userRepository.save(user);
    }
}


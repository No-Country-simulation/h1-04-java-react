//package io.justina.server.data;
//
//import io.justina.server.entities.Address;
//import io.justina.server.entities.Document;
//import io.justina.server.entities.Role;
//import io.justina.server.entities.User;
//import io.justina.server.enumerations.DocumentType;
//import io.justina.server.repositories.RoleRepository;
//import io.justina.server.repositories.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//import org.springframework.beans.factory.annotation.Autowired;
//import java.time.LocalDate;
//
//@Component
//@Order(9)
//public class DataLoaderAdmin implements CommandLineRunner {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Autowired
//    private RoleRepository roleRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        if (roleRepository.findByName("ADMIN").isEmpty()) {
//            Role adminRole = new Role();
//            adminRole.setName("ADMIN");
//            roleRepository.save(adminRole);
//        }
//
//        Role adminRole = roleRepository.findByName("ADMIN")
//                .orElseThrow(() -> new RuntimeException("Role ADMIN not found"));
//
//        createAdminUser("admin1@example.com", "Admin", "One", adminRole, "DNI", "12345678", "Calle Falsa", "123", "Barrio Ficticio", "Ciudad Ejemplo", "Provincia Ejemplo", "1000");
//        createAdminUser("admin2@example.com", "Admin", "Two", adminRole, "DNI", "23456789", "Av. Siempre Viva", "742", "Barrio Springfield", "Ciudad Ejemplo", "Provincia Ejemplo", "2000");
//        createAdminUser("admin3@example.com", "Admin", "Three", adminRole, "DNI", "34567890", "Calle Inventada", "456", "Barrio Imaginario", "Ciudad Ejemplo", "Provincia Ejemplo", "3000");
//        createAdminUser("admin4@example.com", "Admin", "Four", adminRole, "DNI", "45678901", "Av. Principal", "789", "Barrio Central", "Ciudad Ejemplo", "Provincia Ejemplo", "4000");
//        createAdminUser("admin5@example.com", "Admin", "Five", adminRole, "DNI", "56789012", "Calle Secundaria", "321", "Barrio Alternativo", "Ciudad Ejemplo", "Provincia Ejemplo", "5000");
//    }
//
//    private void createAdminUser(String email, String firstName, String lastName, Role adminRole, String documentType, String documentNumber, String street, String number, String district, String city, String province, String postalCode) {
//        if (userRepository.existsByEmail(email)) {
//            return;
//        }
//
//        Address address = Address.builder()
//                .street(street)
//                .number(number)
//                .district(district)
//                .city(city)
//                .province(province)
//                .postalCode(postalCode)
//                .build();
//
//        Document document = Document.builder()
//                .documentType(DocumentType.valueOf(documentType))
//                .documentNumber(documentNumber)
//                .build();
//
//        User user = User.builder()
//                .email(email)
//                .password(passwordEncoder.encode("12345Aa*"))
//                .firstName(firstName)
//                .lastName(lastName)
//                .birthDate(LocalDate.of(1980, 1, 1))
//                .phone("+1234567890")
//                .role(adminRole)
//                .isActive(true)
//                .document(document)
//                .address(address)
//                .build();
//
//        userRepository.save(user);
//    }
//
//}
//

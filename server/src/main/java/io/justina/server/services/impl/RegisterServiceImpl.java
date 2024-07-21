package io.justina.server.services.impl;

import io.justina.server.entities.Address;
import io.justina.server.entities.Document;
import io.justina.server.entities.Role;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.enumerations.Institution;
import io.justina.server.exceptions.RegistrationException;
import io.justina.server.repositories.DocumentRepository;
import io.justina.server.repositories.RoleRepository;
import lombok.RequiredArgsConstructor;
import io.justina.server.config.jwt.JwtService;
import io.justina.server.dtos.request.RegisterRequestDTO;
import io.justina.server.dtos.response.RegisterResponseDTO;
import io.justina.server.entities.User;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public RegisterResponseDTO register(RegisterRequestDTO registerRequest) throws AuthenticationException {

        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RegistrationException("Ya existe un usuario con ese email.");
        }

        if (documentRepository.existsByDocumentNumber(registerRequest.getDocumentNumber())) {
            throw new RegistrationException("Ya existe un usuario con ese número de documento.");
        }

        try {
            Document document = Document.builder()
                    .documentType(DocumentType.valueOf(registerRequest.getDocumentType()))
                    .documentNumber(registerRequest.getDocumentNumber())
                    .build();

            Address address = Address.builder()
                    .street(registerRequest.getStreet())
                    .number(registerRequest.getNumber())
                    .district(registerRequest.getDistrict())
                    .city(registerRequest.getCity())
                    .province(registerRequest.getProvince())
                    .postalCode(registerRequest.getPostalCode())
                    .build();

            Role adminRole = roleRepository.findByName("ADMIN")
                    .orElseThrow(() -> new RegistrationException("Role ADMIN not found"));

            User user = User.builder()
                    .email(registerRequest.getEmail())
                    .password(passwordEncoder.encode(registerRequest.getPassword()))
                    .firstName(registerRequest.getFirstName())
                    .lastName(registerRequest.getLastName())
                    .birthDate(registerRequest.getBirthDate())
                    .phone(registerRequest.getPhone())
                    .institutionName(Institution.NO_COUNTRY)
                    .role(adminRole)
                    .isActive(true)
                    .document(document)
                    .address(address)
                    .build();

            userRepository.save(user);
            return RegisterResponseDTO.builder().build();

        } catch (DataIntegrityViolationException e) {
            throw new RegistrationException("Error al registrar usuario.");
        }
    }

}

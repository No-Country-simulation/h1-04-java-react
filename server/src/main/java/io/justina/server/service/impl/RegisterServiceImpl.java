package io.justina.server.service.impl;

import io.justina.server.entity.Address;
import io.justina.server.entity.Document;
import io.justina.server.enumeration.DocumentType;
import io.justina.server.enumeration.Institution;
import io.justina.server.exception.RegistrationException;
import io.justina.server.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import io.justina.server.config.jwt.JwtService;
import io.justina.server.dto.request.RegisterRequestDTO;
import io.justina.server.dto.response.RegisterResponseDTO;
import io.justina.server.entity.User;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.RegisterService;
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

    @Override
    public RegisterResponseDTO register(RegisterRequestDTO registerRequest) throws AuthenticationException {
        // Verificar si el email ya está en uso
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RegistrationException("Ya existe un usuario con ese email.");
        }

        // Verificar si el número de documento ya está en uso
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

            User user = User.builder()
                    .email(registerRequest.getEmail())
                    .password(passwordEncoder.encode(registerRequest.getPassword()))
                    .firstName(registerRequest.getFirstName())
                    .lastName(registerRequest.getLastName())
                    .birthDate(registerRequest.getBirthDate())
                    .phone(registerRequest.getPhone())
                    .institutionName(Institution.NO_COUNTRY) // por defecto todos los user pertenecen a No Country.
                    .role(registerRequest.getRole())
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

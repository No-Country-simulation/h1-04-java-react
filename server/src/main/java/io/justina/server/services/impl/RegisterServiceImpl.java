package io.justina.server.services.impl;

import io.justina.server.entities.Address;
import io.justina.server.entities.Document;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.enumerations.Institution;
import io.justina.server.enumerations.Role;
import io.justina.server.exceptions.RegistrationException;
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

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Override
    public RegisterResponseDTO register(RegisterRequestDTO registerRequest) throws AuthenticationException {
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

//            Set<Role> roles = registerRequest.getRoles().stream()
//                    .map(Role::valueOf)
//                    .collect(Collectors.toSet());

            User user = User.builder()
                    .email(registerRequest.getEmail())
                    .password(passwordEncoder.encode(registerRequest.getPassword()))
                    .firstName(registerRequest.getFirstName())
                    .lastName(registerRequest.getLastName())
                    .birthDate(registerRequest.getBirthDate())
                    .phone(registerRequest.getPhone())
                    .institutionName(Institution.NO_COUNTRY) // por defecto todos los user pertenecen a No Country.
                    .role(Role.PATIENT) // por defecto todos los user son PATIENT.
                    //.roles(roles.isEmpty() ? Set.of(Role.PATIENT) : roles) //if no roles are specified, the default is PATIENT.
                    .isActive(true) // por defecto todos los user estan activos.
                    .document(document)
                    .address(address)
                    .build();

            userRepository.save(user);
            return RegisterResponseDTO.builder()
                    .message("User registered successfully")
                    .build();

        } catch (DataIntegrityViolationException e) {
            String errorMessage = e.getCause().getMessage();
            if (errorMessage.contains(registerRequest.getEmail())) {
                throw new RegistrationException("Ya existe un usuario con ese email. Error al registrar usuario");
            } else {
                throw new RegistrationException("Error al registrar usuario");
            }
        }
    }
}

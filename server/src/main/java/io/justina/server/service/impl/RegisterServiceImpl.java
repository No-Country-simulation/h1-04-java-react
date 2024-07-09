package io.justina.server.service.impl;

import io.justina.server.entity.Address;
import io.justina.server.entity.Document;
import io.justina.server.enumeration.DocumentType;
import io.justina.server.enumeration.Institution;
import io.justina.server.enumeration.Role;
import io.justina.server.exception.RegistrationException;
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

            User user = User.builder()
                    .email(registerRequest.getEmail())
                    .password(passwordEncoder.encode(registerRequest.getPassword()))
                    .firsName(registerRequest.getFirstName())
                    .lastName(registerRequest.getLastName())
                    .birthDate(registerRequest.getBirthDate())
                    .phone(registerRequest.getPhone())
                    .institutionName(Institution.NO_COUNTRY) // por defecto todos los user pertenecen a No Country.
                    .role(Role.PATIENT) // por defecto todos los user son PATIENT.
                    .isActive(true) // por defecto todos los user estan activos.
                    .document(document)
                    .address(address)
                    .build();

            userRepository.save(user);
            return RegisterResponseDTO.builder()
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

package io.justina.server.service.impl;

import lombok.RequiredArgsConstructor;
import io.justina.server.config.jwt.JwtService;
import io.justina.server.dto.request.RegisterRequestDTO;
import io.justina.server.dto.response.RegisterResponseDTO;
import io.justina.server.entity.User;
import io.justina.server.exception.ExceptionMethods;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public RegisterResponseDTO register(RegisterRequestDTO requestDTO) {

        if (userRepository.existsByEmail(requestDTO.getEmail())) {
            throw new IllegalArgumentException("There is already a user registered with the email: " + requestDTO.getEmail());
        }

        if (requestDTO.getEmail() == null || ExceptionMethods.onlySpaces(requestDTO.getEmail())) {
            System.out.println("Email can't be null or empty.");
            return null;
        }

        if (requestDTO.getPassword() == null || ExceptionMethods.onlySpaces(requestDTO.getPassword())) {
            System.out.println("Password can't be null or empty.");
            return null;
        }

        if (requestDTO.getFirstName() == null || ExceptionMethods.onlySpaces(requestDTO.getFirstName())) {
            System.out.println("FirstName can't be null or empty.");
            return null;
        }

        if (requestDTO.getLastName() == null || ExceptionMethods.onlySpaces(requestDTO.getLastName())) {
            System.out.println("LastName can't be null or empty.");
            return null;
        }

        User user = User.builder()
                .email(requestDTO.getEmail())
                .password(passwordEncoder.encode(requestDTO.getPassword()))
                .firsName(requestDTO.getFirstName())
                .lastName(requestDTO.getLastName())
                .build();

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        Long id = user.getId();
        String email = user.getEmail();
        String firstName = user.getFirsName();
        String lastName = user.getLastName();

        return RegisterResponseDTO.builder()
                .id(id)
                .firstName(firstName)
                .lastName(lastName)
                .token(jwtToken)
                .email(email)
                .build();
    }

}

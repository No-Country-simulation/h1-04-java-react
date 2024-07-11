package io.justina.server.services.impl;

import io.justina.server.config.jwt.JwtService;
import io.justina.server.dtos.request.LoginRequestDTO;
import io.justina.server.dtos.response.LoginResponseDTO;
import io.justina.server.entities.User;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequest) throws AuthenticationException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            User userDetails = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
            String email = loginRequest.getEmail();
            String token = jwtService.getToken(userDetails, email);
            String role = userDetails.getRoles().toString();
            return LoginResponseDTO.builder()
                    .token(token)
                    .role(role)
                    .message("Welcome to Justina.io")
                    .build();
        } catch (AuthenticationException e) {
            return LoginResponseDTO.builder()
                    .token(null)
                    .role(null)
                    .message("Error al iniciar sesión: " + e.getMessage())
                    .build();
        }
    }

}


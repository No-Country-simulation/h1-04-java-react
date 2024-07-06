package io.justina.server.service.impl;

import io.justina.server.config.jwt.JwtService;
import io.justina.server.dto.request.LoginRequestDTO;
import io.justina.server.dto.response.LoginResponseDTO;
import io.justina.server.entity.User;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.LoginService;
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
            return LoginResponseDTO.builder()
                    .token(token)
                    .message("Welcome to Justina.io")
                    .build();
        } catch (AuthenticationException e) {
            return new LoginResponseDTO(null, e.getMessage());
        }
    }

}


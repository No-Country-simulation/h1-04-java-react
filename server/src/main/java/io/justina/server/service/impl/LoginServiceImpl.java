package io.justina.server.service.impl;

import io.justina.server.config.jwt.JwtService;
import io.justina.server.dto.request.LoginRequestDTO;
import io.justina.server.dto.response.LoginResponseDTO;
import io.justina.server.entity.User;
import io.justina.server.exception.MyException;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    public LoginResponseDTO login(LoginRequestDTO requestDTO) throws MyException {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            requestDTO.getEmail(),
                            requestDTO.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            System.out.println("Bad credentials for email: " + requestDTO.getEmail());
            return null;
        }

        User user = userRepository.findUserByEmail(requestDTO.getEmail())
                .orElseThrow(() -> new MyException("User not found"));

        var jwtToken = jwtService.generateToken(user);

        return LoginResponseDTO.builder()
                .email(user.getEmail())
                .id(user.getId())
                .token(jwtToken)
                .firstName(user.getFirsName())
                .lastName(user.getLastName())
                .build();
    }

}


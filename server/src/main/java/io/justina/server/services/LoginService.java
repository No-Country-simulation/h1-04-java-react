package io.justina.server.services;

import io.justina.server.dtos.request.LoginRequestDTO;
import io.justina.server.dtos.response.LoginResponseDTO;
import org.springframework.security.core.AuthenticationException;

public interface LoginService {

    LoginResponseDTO login(LoginRequestDTO requestDTO) throws AuthenticationException;

}

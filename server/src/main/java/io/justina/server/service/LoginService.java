package io.justina.server.service;

import io.justina.server.dto.request.LoginRequestDTO;
import io.justina.server.dto.response.LoginResponseDTO;
import org.springframework.security.core.AuthenticationException;

public interface LoginService {

    LoginResponseDTO login(LoginRequestDTO requestDTO) throws AuthenticationException;

}

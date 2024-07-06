package io.justina.server.service;

import io.justina.server.dto.request.RegisterRequestDTO;
import io.justina.server.dto.response.RegisterResponseDTO;
import org.springframework.security.core.AuthenticationException;

public interface RegisterService {

    RegisterResponseDTO register(RegisterRequestDTO requestDTO) throws AuthenticationException;

}

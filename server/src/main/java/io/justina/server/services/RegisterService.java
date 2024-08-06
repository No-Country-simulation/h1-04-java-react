package io.justina.server.services;

import io.justina.server.dtos.request.RegisterRequestDTO;
import io.justina.server.dtos.response.RegisterResponseDTO;
import org.springframework.security.core.AuthenticationException;

public interface RegisterService {

    RegisterResponseDTO register(RegisterRequestDTO requestDTO) throws AuthenticationException;

}

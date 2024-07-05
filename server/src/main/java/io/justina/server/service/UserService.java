package io.justina.server.service;

import io.justina.server.dto.response.UserResponseDTO;

public interface UserService {

    UserResponseDTO getById(Long id);

}

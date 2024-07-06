package io.justina.server.service;

import io.justina.server.dto.response.UserResponseDTO;
import java.util.List;

public interface UserService {

    List<UserResponseDTO> getAllUsers();
    UserResponseDTO findUserById(Long id);

}

package io.justina.server.service;

import io.justina.server.dto.response.UserResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public interface UserService extends UserDetailsService {

    @Transactional(readOnly = true)
    List<UserResponseDTO> getAllUsers();

    @Transactional(readOnly = true)
    ResponseEntity<UserResponseDTO> findById(Long id) throws UsernameNotFoundException;

}

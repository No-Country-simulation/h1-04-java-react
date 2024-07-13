package io.justina.server.services;

import io.justina.server.dtos.request.UpdateUserRequestDTO;
import io.justina.server.dtos.response.UserResponseDTO;
import io.justina.server.enumerations.DocumentType;
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

    ResponseEntity<UserResponseDTO> updateUser(Long id, UpdateUserRequestDTO requestDTO);

    ResponseEntity<Void> deleteUser(Long id);

    ResponseEntity<Void> updatePassword(Long id, String newPassword);

    ResponseEntity<Void> updateEmail(Long id, String newEmail);

    ResponseEntity<Void> updateDocument(Long id, DocumentType documentType, String documentNumber);

}

package io.justina.server.services;

import io.jsonwebtoken.io.IOException;
import io.justina.server.dtos.request.UpdatePasswordRequestDTO;
import io.justina.server.dtos.request.UpdateUserRequestDTO;
import io.justina.server.dtos.response.UpdateUserResponseDTO;
import io.justina.server.dtos.response.UserResponseDTO;
import io.justina.server.enumerations.DocumentType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService extends UserDetailsService {

    @Transactional(readOnly = true)
    UserResponseDTO findById(Long id) throws UsernameNotFoundException;

    @Transactional(readOnly = true)
    List<UserResponseDTO> getAllUsers();

    UpdateUserResponseDTO updateUser(Long id, UpdateUserRequestDTO requestDTO);

    void updatePassword(Long id, UpdatePasswordRequestDTO newPassword);

    void updateEmail(Long id, String newEmail);

    void updateDocument(Long id, DocumentType documentType, String documentNumber) throws IllegalArgumentException;

    void addImages(Long id, List<MultipartFile> images) throws IOException;

    void deleteUser(Long id);

    void deactivateUser(Long id);

    UserDetails loadUserByUsername(String email) throws UsernameNotFoundException;

}

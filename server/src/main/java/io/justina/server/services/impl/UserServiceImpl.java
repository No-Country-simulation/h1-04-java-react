package io.justina.server.services.impl;

import io.justina.server.dtos.request.UpdatePasswordRequestDTO;
import io.justina.server.dtos.request.UpdateUserRequestDTO;
import io.justina.server.dtos.response.UpdateUserResponseDTO;
import io.justina.server.dtos.response.UserResponseDTO;
import io.justina.server.entities.Address;
import io.justina.server.entities.Document;
import io.justina.server.entities.User;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.repositories.DocumentRepository;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public UserResponseDTO findById(Long id) throws UsernameNotFoundException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new UserResponseDTO(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponseDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(UserResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public UpdateUserResponseDTO updateUser(Long id, UpdateUserRequestDTO requestDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        updateUserFields(user, requestDTO);

        User updatedUser = userRepository.save(user);
        UserResponseDTO userResponseDTO = mapUserToDTO(updatedUser);
        return UpdateUserResponseDTO.builder()
                .message("User updated successfully")
                .data(userResponseDTO)
                .build();
    }

    @Override
    @Transactional
    public void updatePassword(Long id, UpdatePasswordRequestDTO newPassword) {
        String password = newPassword.getNewPassword();
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void updateEmail(Long id, String newEmail) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setEmail(newEmail);
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void updateDocument(Long id, DocumentType documentType, String documentNumber) throws IllegalArgumentException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (documentRepository.existsByDocumentNumber(documentNumber)) {
            throw new IllegalArgumentException("Document number is already in use.");
        }

        Document document = user.getDocument();
        if (document == null) {
            document = new Document();
            user.setDocument(document);
        }
        document.setDocumentType(documentType);
        document.setDocumentNumber(documentNumber);
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        userRepository.delete(user);
    }

    @Override
    @Transactional
    public void desactivateUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setIsActive(false);
        user.setDeletedAt(LocalDate.now());
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("The user does not exist"));
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                user.getAuthorities()
        );
    }

    private UserResponseDTO mapUserToDTO(User user) {
        return UserResponseDTO.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .birthDate(user.getBirthDate())
                .phone(user.getPhone())
                .institutionName(user.getInstitutionName())
                .role(user.getRole())
                .document(user.getDocument())
                .address(user.getAddress())
                .build();
    }

    private void updateUserFields(User user, UpdateUserRequestDTO requestDTO) {
        if (requestDTO.getFirstName() != null && !requestDTO.getFirstName().trim().isEmpty()) {
            user.setFirstName(requestDTO.getFirstName());
        }
        if (requestDTO.getLastName() != null && !requestDTO.getLastName().trim().isEmpty()) {
            user.setLastName(requestDTO.getLastName());
        }
        if (requestDTO.getBirthDate() != null) {
            user.setBirthDate(requestDTO.getBirthDate());
        }
        if (requestDTO.getPhone() != null) {
            user.setPhone(requestDTO.getPhone());
        }
        if (requestDTO.getRole() != null) {
            user.setRole(requestDTO.getRole());
        }

        Address address = user.getAddress();
        if (address == null) {
            address = new Address();
            user.setAddress(address);
        }
        if (requestDTO.getStreet() != null) {
            address.setStreet(requestDTO.getStreet());
        }
        if (requestDTO.getNumber() != null) {
            address.setNumber(requestDTO.getNumber());
        }
        if (requestDTO.getDistrict() != null) {
            address.setDistrict(requestDTO.getDistrict());
        }
        if (requestDTO.getCity() != null) {
            address.setCity(requestDTO.getCity());
        }
        if (requestDTO.getProvince() != null) {
            address.setProvince(requestDTO.getProvince());
        }
        if (requestDTO.getPostalCode() != null) {
            address.setPostalCode(requestDTO.getPostalCode());
        }
    }

}

package io.justina.server.service.impl;

import io.justina.server.dto.request.UpdateUserRequestDTO;
import io.justina.server.dto.response.UserResponseDTO;
import io.justina.server.entity.Address;
import io.justina.server.entity.User;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("The user does not exists"));
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                user.getAuthorities()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponseDTO> getAllUsers() {
        return userListToUserDtoList(userRepository.findAll());
    }

    @Override
    @Transactional(readOnly = true)
    public ResponseEntity<UserResponseDTO> findById(Long id) throws UsernameNotFoundException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new ResponseEntity<>(new UserResponseDTO(user), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<UserResponseDTO> updateUser(Long id, UpdateUserRequestDTO requestDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (requestDTO.getFirstName() != null && !requestDTO.getFirstName().trim().isEmpty()) {
            user.setFirstName(requestDTO.getFirstName());
        } else if (requestDTO.getFirstName() != null) {
            throw new IllegalArgumentException("First name cannot be blank");
        }
        if (requestDTO.getLastName() != null && !requestDTO.getLastName().trim().isEmpty()) {
            user.setLastName(requestDTO.getLastName());
        } else if (requestDTO.getLastName() != null) {
            throw new IllegalArgumentException("Last name cannot be blank");
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

        // Actualizar Address
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

        User updatedUser = userRepository.save(user);
        return new ResponseEntity<>(mapUserToDTO(updatedUser), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setIsActive(false);
        user.setDeletedAt(LocalDate.now());
        userRepository.save(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<Void> updatePassword(Long id, String newPassword) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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

    public static List<UserResponseDTO> userListToUserDtoList(List<User> users) {
        return users.stream().map(UserResponseDTO::new).toList();
    }

}

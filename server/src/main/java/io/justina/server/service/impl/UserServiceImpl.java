package io.justina.server.service.impl;

import io.justina.server.dto.response.UserResponseDTO;
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

    private UserResponseDTO mapUserToDTO(User user) {
        return UserResponseDTO.builder()
                .id(user.getId())
                .firstName(user.getFirsName())
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

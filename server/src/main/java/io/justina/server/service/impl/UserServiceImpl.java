package io.justina.server.service.impl;

import io.justina.server.dto.response.UserResponseDTO;
import io.justina.server.entity.User;
import io.justina.server.exception.ObjectNotFoundException;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserResponseDTO findUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);

        if (user != null) {
            return mapUserToDTO(user);
        } else {
            System.out.println("It wasn't possible to find a user with the ID: " + id);
            return null;
        }
    }

    @Override
    public List<UserResponseDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::mapUserToDTO).collect(Collectors.toList());
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

}

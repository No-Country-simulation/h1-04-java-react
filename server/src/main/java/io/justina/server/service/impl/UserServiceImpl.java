package io.justina.server.service.impl;

import io.justina.server.dto.response.UserResponseDTO;
import io.justina.server.entity.User;
import io.justina.server.repository.UserRepository;
import io.justina.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserResponseDTO getById(Long id) {
        User user = userRepository.findById(id).orElse(null);

        if (user != null) {
            return mapUserToDTO(user);
        } else {
            System.out.println("It wasn't possible to find a user with the ID: " + id);
            return null;
        }
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

package io.justina.server.controllers;

import io.justina.server.dtos.request.UpdateDocumentRequestDTO;
import io.justina.server.dtos.request.UpdateEmailRequestDTO;
import io.justina.server.dtos.request.UpdateUserRequestDTO;
import io.justina.server.dtos.response.UpdateUserResponseDTO;
import io.justina.server.dtos.response.UserResponseDTO;
import io.justina.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("v1/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<UserResponseDTO> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable long id){
        return userService.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UpdateUserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UpdateUserRequestDTO requestDTO) {
        return userService.updateUser(id, requestDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

    @PutMapping("/{id}/password")
    public ResponseEntity<Void> updatePassword(@PathVariable Long id, @RequestBody String newPassword) {
        return userService.updatePassword(id, newPassword);
    }

    @PutMapping("/{id}/email")
    public ResponseEntity<Void> updateEmail(@PathVariable Long id, @RequestBody UpdateEmailRequestDTO requestDTO) {
        return userService.updateEmail(id, requestDTO.getNewEmail());
    }

    @PutMapping("/{id}/document")
    public ResponseEntity<Void> updateDocument(@PathVariable Long id, @RequestBody UpdateDocumentRequestDTO requestDTO) {
        return userService.updateDocument(id, requestDTO.getDocumentType(), requestDTO.getDocumentNumber());
    }

}

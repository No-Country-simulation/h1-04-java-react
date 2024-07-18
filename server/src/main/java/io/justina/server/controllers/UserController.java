package io.justina.server.controllers;

import io.justina.server.dtos.request.UpdateDocumentRequestDTO;
import io.justina.server.dtos.request.UpdateEmailRequestDTO;
import io.justina.server.dtos.request.UpdatePasswordRequestDTO;
import io.justina.server.dtos.request.UpdateUserRequestDTO;
import io.justina.server.dtos.response.UpdateUserResponseDTO;
import io.justina.server.dtos.response.UserResponseDTO;
import io.justina.server.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("v1/api/users")
@Tag(name = "User", description = "Endpoints to manage users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUserById/{id}")
    @Operation(summary = "Get user by ID", description = "Retrieve detailed information about a user by their ID")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable long id) {
        UserResponseDTO userResponse = userService.findById(id);
        return ResponseEntity.ok(userResponse);
    }

    @GetMapping("/getAllUsers")
    @Operation(summary = "Get all users", description = "Retrieve a list of all users in the system")
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> usersResponse = userService.getAllUsers();
        return ResponseEntity.ok(usersResponse);
    }

    @PutMapping("/updateUser/{id}")
    @Operation(summary = "Update a user", description = "Update information of an existing user by ID")
    public ResponseEntity<UpdateUserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UpdateUserRequestDTO requestDTO) {
        UpdateUserResponseDTO updateUserResponse = userService.updateUser(id, requestDTO);
        return ResponseEntity.ok(updateUserResponse);
    }

    @PutMapping("/updateUserPassword/{id}")
    @Operation(summary = "Update a user password", description = "Update password of an existing user by ID")
    public ResponseEntity<String> updatePassword(@PathVariable Long id, @RequestBody UpdatePasswordRequestDTO newPassword) {
        userService.updatePassword(id, newPassword);
        return ResponseEntity.ok("Password updated successfully");
    }

    @PutMapping("/updateUserEmail/{id}")
    @Operation(summary = "Update a user email", description = "Update email of an existing user by ID")
    public ResponseEntity<String> updateEmail(@PathVariable Long id, @RequestBody UpdateEmailRequestDTO requestDTO) {
        userService.updateEmail(id, requestDTO.getNewEmail());
        return ResponseEntity.ok("Email updated successfully");
    }

    @PutMapping("/updateUserDocument/{id}")
    @Operation(summary = "Update a user document", description = "Update document of an existing user by ID")
    public ResponseEntity<String> updateDocument(@PathVariable Long id, @RequestBody UpdateDocumentRequestDTO requestDTO) {
        try {
            userService.updateDocument(id, requestDTO.getDocumentType(), requestDTO.getDocumentNumber());
            return ResponseEntity.ok("Document updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/addDocumentImages/{id}")
    public ResponseEntity<String> addImages(@PathVariable Long id, @RequestParam("images") List<MultipartFile> images) {
        try {
            userService.addImages(id, images);
            return ResponseEntity.ok("Document images uploaded successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    @DeleteMapping("/deleteUser/{id}")
    @Operation(summary = "Delete a user", description = "Delete a user from the system by ID")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }

    @DeleteMapping("/deactivateUser/{id}")
    @Operation(summary = "Deactivate a user", description = "Deactivate a user from the system by ID")
    public ResponseEntity<String> deactivateUser(@PathVariable Long id) {
        userService.deactivateUser(id);
        return ResponseEntity.ok("User deactivated successfully");
    }

}
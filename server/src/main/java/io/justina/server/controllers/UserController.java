package io.justina.server.controllers;

import io.justina.server.dtos.request.UpdateDocumentRequestDTO;
import io.justina.server.dtos.request.UpdateEmailRequestDTO;
import io.justina.server.dtos.request.UpdatePasswordRequestDTO;
import io.justina.server.dtos.request.UpdateUserRequestDTO;
import io.justina.server.dtos.response.UpdateUserResponseDTO;
import io.justina.server.dtos.response.UserResponseDTO;
import io.justina.server.exceptions.UserNotFoundException;
import io.justina.server.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
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
        try {
            UserResponseDTO userResponse = userService.findById(id);
            return ResponseEntity.ok(userResponse);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getAllUsers")
    @Operation(summary = "Get all users", description = "Retrieve a list of all users in the system")
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        try {
            List<UserResponseDTO> usersResponse = userService.getAllUsers();
            return ResponseEntity.ok(usersResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updateUser/{id}")
    @Operation(summary = "Update a user", description = "Update information of an existing user by ID")
    public ResponseEntity<UpdateUserResponseDTO> updateUser(@PathVariable Long id, @Valid @RequestBody UpdateUserRequestDTO requestDTO) {
        try {
            UpdateUserResponseDTO updateUserResponse = userService.updateUser(id, requestDTO);
            return ResponseEntity.ok(updateUserResponse);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updateUserPassword/{id}")
    @Operation(summary = "Update a user password", description = "Update password of an existing user by ID")
    public ResponseEntity<String> updatePassword(@PathVariable Long id, @Valid @RequestBody UpdatePasswordRequestDTO newPassword) {
        try {
            userService.updatePassword(id, newPassword);
            return ResponseEntity.ok("Password updated successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updateUserEmail/{id}")
    @Operation(summary = "Update a user email", description = "Update email of an existing user by ID")
    public ResponseEntity<String> updateEmail(@PathVariable Long id, @Valid @RequestBody UpdateEmailRequestDTO requestDTO) {
        try {
            userService.updateEmail(id, requestDTO.getNewEmail());
            return ResponseEntity.ok("Email updated successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updateUserDocument/{id}")
    @Operation(summary = "Update a user document", description = "Update document of an existing user by ID")
    public ResponseEntity<String> updateDocument(@PathVariable Long id, @Valid @RequestBody UpdateDocumentRequestDTO requestDTO) {
        try {
            userService.updateDocument(id, requestDTO.getDocumentType(), requestDTO.getDocumentNumber());
            return ResponseEntity.ok("Document updated successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/addDocumentImages/{id}")
    @Operation(summary = "Add document images", description = "Upload document images for a user by ID")
    public ResponseEntity<String> addImages(@PathVariable Long id, @RequestParam("images") List<MultipartFile> images) {
        try {
            userService.addImages(id, images);
            return ResponseEntity.ok("Document images uploaded successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/deleteUser/{id}")
    @Operation(summary = "Delete a user", description = "Delete a user from the system by ID")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("User deleted successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/deactivateUser/{id}")
    @Operation(summary = "Deactivate a user", description = "Deactivate a user from the system by ID")
    public ResponseEntity<String> deactivateUser(@PathVariable Long id) {
        try {
            userService.deactivateUser(id);
            return ResponseEntity.ok("User deactivated successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
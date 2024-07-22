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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("v1/api/users")
@Tag(name = "User", description = "Endpoints to manage users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUserById/{id}")
    @Operation(summary = "Get user by ID", description = "Retrieve detailed information about a user by their ID")
    public ResponseEntity<Map<String, Object>> getUser(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            UserResponseDTO userResponse = userService.findById(id);
            response.put("user", userResponse);
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getAllUsers")
    @Operation(summary = "Get all users", description = "Retrieve a list of all users in the system")
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<UserResponseDTO> usersResponse = userService.getAllUsers();
            response.put("users", usersResponse);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateUser/{id}")
    @Operation(summary = "Update a user", description = "Update information of an existing user by ID")
    public ResponseEntity<Map<String, Object>> updateUser(@PathVariable Long id, @Valid @RequestBody UpdateUserRequestDTO requestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            UpdateUserResponseDTO updateUserResponse = userService.updateUser(id, requestDTO);
            response.put("user", updateUserResponse);
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateUserPassword/{id}")
    @Operation(summary = "Update a user password", description = "Update password of an existing user by ID")
    public ResponseEntity<Map<String, Object>> updatePassword(@PathVariable Long id, @Valid @RequestBody UpdatePasswordRequestDTO newPassword) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.updatePassword(id, newPassword);
            response.put("message", "Password updated successfully");
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateUserEmail/{id}")
    @Operation(summary = "Update a user email", description = "Update email of an existing user by ID")
    public ResponseEntity<Map<String, Object>> updateEmail(@PathVariable Long id, @Valid @RequestBody UpdateEmailRequestDTO requestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.updateEmail(id, requestDTO.getNewEmail());
            response.put("message", "Email updated successfully");
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateUserDocument/{id}")
    @Operation(summary = "Update a user document", description = "Update document of an existing user by ID")
    public ResponseEntity<Map<String, Object>> updateDocument(@PathVariable Long id, @Valid @RequestBody UpdateDocumentRequestDTO requestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.updateDocument(id, requestDTO.getDocumentType(), requestDTO.getDocumentNumber());
            response.put("message", "Document updated successfully");
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalArgumentException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/addDocumentImages/{id}")
    @Operation(summary = "Add document images", description = "Upload document images for a user by ID")
    public ResponseEntity<Map<String, Object>> addImages(@PathVariable Long id, @RequestParam("images") List<MultipartFile> images) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.addImages(id, images);
            response.put("message", "Document images uploaded successfully");
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (RuntimeException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deleteUser/{id}")
    @Operation(summary = "Delete a user", description = "Delete a user from the system by ID")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.deleteUser(id);
            response.put("message", "User deleted successfully");
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deactivateUser/{id}")
    @Operation(summary = "Deactivate a user", description = "Deactivate a user from the system by ID")
    public ResponseEntity<Map<String, Object>> deactivateUser(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.deactivateUser(id);
            response.put("message", "User deactivated successfully");
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            response.put("message", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
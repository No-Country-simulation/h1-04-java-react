package io.justina.server.controllers;

import io.justina.server.dtos.request.LoginRequestDTO;
import io.justina.server.dtos.response.LoginResponseDTO;
import io.justina.server.exceptions.InvalidCredentialsException;
import io.justina.server.services.LoginService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("v1/api/auth/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> login(@Valid @RequestBody LoginRequestDTO loginRequest) {
        Map<String, Object> response = new HashMap<>();
        Map<String, Object> data = new HashMap<>();

        try {
            LoginResponseDTO loginResponse = loginService.login(loginRequest);
            if (loginResponse.getToken() != null) {
                data.put("token", loginResponse.getToken());
                data.put("role", loginResponse.getRole());
                data.put("id", loginResponse.getId());
                response.put("data", data);
                response.put("message", loginResponse.getMessage());
                return ResponseEntity.ok(response);
            } else {
                response.put("message", loginResponse.getMessage());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (InvalidCredentialsException e) {
            response.put("message", "Invalid username or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        } catch (Exception e) {
            response.put("message", "An unexpected error occurred.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
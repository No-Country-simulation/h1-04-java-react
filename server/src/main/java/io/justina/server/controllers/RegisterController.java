package io.justina.server.controllers;

import io.justina.server.dtos.request.RegisterRequestDTO;
import io.justina.server.dtos.response.RegisterResponseDTO;
import io.justina.server.exceptions.RegistrationException;
import io.justina.server.services.RegisterService;
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
@RequestMapping("v1/api/auth/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> register(@Valid @RequestBody RegisterRequestDTO registerRequest){
        Map<String, Object> response = new HashMap<>();
        try {
            RegisterResponseDTO registerResponse = registerService.register(registerRequest);
            response.put("message", "Successful registration");
            return ResponseEntity.ok(response);
        } catch (RegistrationException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

}

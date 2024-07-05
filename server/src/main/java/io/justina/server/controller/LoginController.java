package io.justina.server.controller;

import io.justina.server.dto.request.LoginRequestDTO;
import io.justina.server.dto.response.LoginResponseDTO;
import io.justina.server.exception.MyException;
import io.justina.server.service.LoginService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/api/auth/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequestDTO requestDTO) throws MyException {

        LoginResponseDTO loginResponseDTO = loginService.login(requestDTO);

        if (loginResponseDTO == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect credentials or user not found");
        } else {
            return ResponseEntity.status(HttpStatus.OK)
                    .header("Authorization", "Bearer" + loginResponseDTO.getToken())
                    .body(loginResponseDTO);
        }
    }

}

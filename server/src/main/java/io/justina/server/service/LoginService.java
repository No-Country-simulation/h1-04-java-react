package io.justina.server.service;

import io.justina.server.dto.request.LoginRequestDTO;
import io.justina.server.dto.response.LoginResponseDTO;
import io.justina.server.exception.MyException;

public interface LoginService {

    LoginResponseDTO login(LoginRequestDTO requestDTO) throws MyException;

}

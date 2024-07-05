package io.justina.server.service;

public interface LoginService {

    LoginResponseDTO login(LoginRequestDTO requestDTO) throws MyException;

}

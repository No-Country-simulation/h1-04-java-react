package io.justina.server.dto.response;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
public class LoginResponseDTO {

    private String token;
    private String email;
    private Long id_user;
    private String fullName;
}

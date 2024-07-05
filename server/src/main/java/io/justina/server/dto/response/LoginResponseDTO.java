package io.justina.server.dto.response;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
public class LoginResponseDTO {

    private Long id;
    private String token;
    private String email;
    private String firstName;
    private String lastName;

}

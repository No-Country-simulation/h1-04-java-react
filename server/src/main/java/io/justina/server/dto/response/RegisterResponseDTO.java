package io.justina.server.dto.response;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
public class RegisterResponseDTO {

    private Long id;
    private String token;
    private String email;
    private String firstName;
    private String lastName;

}

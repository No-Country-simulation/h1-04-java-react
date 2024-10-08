package io.justina.server.dtos.response;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDTO {

    String token;
    String role;
    Long id;
    String message;

}

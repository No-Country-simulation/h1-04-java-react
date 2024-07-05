package io.justina.server.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
public class RegisterResponseDTO {

    private String token;
    private String email;
    private long id;
    private String fullName;
}

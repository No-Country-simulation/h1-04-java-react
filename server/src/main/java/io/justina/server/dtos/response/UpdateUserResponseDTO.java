package io.justina.server.dtos.response;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserResponseDTO {

    private String message;
    private UserResponseDTO data;

}

package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePasswordRequestDTO {

    @NotBlank(message = "Password is required.")
    @Size(min = 8, max = 25, message = "Password must be between 8 and 25 characters.")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$", message = "Password must contain at least one uppercase letter, one number, and one special character.")
    private String newPassword;

}

package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddPathologyDTO {

    @NotBlank(message = "Pathology is required.")
    @Size(max = 255, message = "Pathology must not exceed 255 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Pathology should only contain letters and spaces.")
    private String pathology;

}

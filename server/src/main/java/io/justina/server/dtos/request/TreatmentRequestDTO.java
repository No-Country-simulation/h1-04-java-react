package io.justina.server.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TreatmentRequestDTO {

    @NotBlank(message = "Treatment name is required.")
    @Size(max = 100, message = "Treatment name must not exceed 100 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Treatment name should only contain letters and spaces.")
    private String treatmentName;

    @NotBlank(message = "Indications are required.")
    @Size(max = 5000, message = "Indications must not exceed 5000 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Indications should only contain letters, spaces, commas, periods, and hyphens.")
    private String indications;

}

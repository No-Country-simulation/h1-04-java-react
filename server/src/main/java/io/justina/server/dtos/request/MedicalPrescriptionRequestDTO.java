package io.justina.server.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicalPrescriptionRequestDTO {

    @NotBlank(message = "Dose size is required.")
    @Size(max = 50, message = "Dose size must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Dose size should only contain letters, spaces, commas, periods, and hyphens.")
    private String doseSize;

    @NotBlank(message = "Dose frequency is required.")
    @Size(max = 100, message = "Dose frequency must not exceed 100 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Dose frequency should only contain letters, spaces, commas, periods, and hyphens.")
    private String doseFrequency;

    @NotBlank(message = "Indications are required.")
    @Size(max = 255, message = "Indications must not exceed 255 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Indications should only contain letters, spaces, commas, periods, and hyphens.")
    private String indications;

    @NotNull(message = "Medication ID is required.")
    private Long medicationId;

}

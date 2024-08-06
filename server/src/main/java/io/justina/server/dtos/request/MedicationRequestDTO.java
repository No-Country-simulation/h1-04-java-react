package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicationRequestDTO {

    @NotBlank(message = "Medication name is required.")
    @Size(max = 100, message = "Medication name must not exceed 100 characters.")
    private String medicationName;

    @NotNull(message = "Laboratory ID is required.")
    private Long laboratoryId;

}

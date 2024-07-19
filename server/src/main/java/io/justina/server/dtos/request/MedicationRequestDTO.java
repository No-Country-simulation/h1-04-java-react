package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicationRequestDTO {

    @NotNull(message = "Medical prescription ID is required.")
    private Long medicalPrescriptionId;

    @NotNull(message = "Laboratory ID is required.")
    private Long laboratoryId;

    @NotBlank(message = "Medication name is required.")
    @Size(max = 100, message = "Medication name must not exceed 100 characters.")
    private String medicationName;

    @NotNull(message = "Active status is required.")
    private Boolean active;

    @NotNull(message = "Creation date is required.")
    private LocalDateTime createdAt;

    @NotNull(message = "Update date is required.")
    private LocalDateTime updatedAt;

}

package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddMedicalPrescriptionToTreatmentDTO {

    @NotNull(message = "Treatment ID is required.")
    private Long treatmentId;

    @NotNull(message = "Medical Prescription ID is required.")
    private Long medicalPrescriptionId;

}


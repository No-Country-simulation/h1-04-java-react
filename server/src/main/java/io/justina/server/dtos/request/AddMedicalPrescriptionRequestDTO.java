package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddMedicalPrescriptionRequestDTO {

    @NotNull(message = "MedicalPrescription ID is required.")
    private Long medicalPrescriptionId;

}
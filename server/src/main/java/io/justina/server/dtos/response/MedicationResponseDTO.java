package io.justina.server.dtos.response;

import io.justina.server.entities.Medication;
import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicationResponseDTO {

    private Long medicationId;
    private Long medicalPrescriptionId;
    private Long laboratoryId;
    private String medicationName;
    private Boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public MedicationResponseDTO(Medication medication) {
        this.medicationId = medication.getMedicationId();
        this.medicalPrescriptionId = medication.getMedicalPrescription().getMedicalPrescriptionId();
        this.laboratoryId = medication.getLaboratory().getLaboratoryId();
        this.medicationName = medication.getMedicationName();
        this.active = medication.getActive();
        this.createdAt = medication.getCreatedAt();
        this.updatedAt = medication.getUpdatedAt();
    }
}

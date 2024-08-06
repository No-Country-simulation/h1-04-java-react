package io.justina.server.dtos.response;

import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicalPrescriptionResponseDTO {

    private Long id;
    private LocalDate datePrescription;
    private String doseSize;
    private String doseFrequency;
    private String indications;
    private Medication medication;
    private Boolean active;

    public MedicalPrescriptionResponseDTO(MedicalPrescription medicalPrescription) {
        this.id = medicalPrescription.getId();
        this.datePrescription = medicalPrescription.getDatePrescription();
        this.doseSize = medicalPrescription.getDoseSize();
        this.doseFrequency = medicalPrescription.getDoseFrequency();
        this.indications = medicalPrescription.getIndications();
        this.medication = medicalPrescription.getMedication();
        this.active = medicalPrescription.getActive();
    }

}

package io.justina.server.dtos.response;

import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Treatment;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TreatmentResponseDTO {

    private Long id;
    private String treatmentName;
    private String indications;
    private LocalDate startDate;
    private Boolean active;
    private List<MedicalPrescription> medicalPrescriptions;
    private Long patientId;

    public TreatmentResponseDTO(Treatment treatment) {
        this.id = treatment.getId();
        this.treatmentName = treatment.getTreatmentName();
        this.indications = treatment.getIndications();
        this.startDate = treatment.getStartDate();
        this.active = treatment.getActive();
        this.medicalPrescriptions = treatment.getMedicalPrescriptions();
        this.patientId = treatment.getPatient().getId();
    }

}

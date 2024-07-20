package io.justina.server.dtos.response;


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

    private Long treatmentId;
    private String treatmentName;
    private String indications;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long medicalPrescriptionId;
    private String dosageSize;
    private String dosageFrequency;
    private String dosageIndications;
    private Long patientId;
    private String patientFirstName;
    private String patientLastName;
    private String patientDocumentType;
    private String patientDocumentNumber;
    private List<String> patientPathologies;

    public TreatmentResponseDTO(Treatment treatment) {
        this.treatmentId = treatment.getTreatmentId();
        this.treatmentName = treatment.getTreatmentName();
        this.indications = treatment.getIndications();
        this.startDate = treatment.getStartDate();
        this.endDate = treatment.getEndDate();
        this.medicalPrescriptionId = treatment.getMedicalPrescription().getMedicalPrescriptionId();
        this.dosageSize = treatment.getMedicalPrescription().getDosageSize();
        this.dosageFrequency = treatment.getMedicalPrescription().getDosageFrequency();
        this.dosageIndications = treatment.getMedicalPrescription().getDosageIndications();
        this.patientId = treatment.getPatient().getPatientId();
        this.patientFirstName = treatment.getPatient().getUser().getFirstName();
        this.patientLastName = treatment.getPatient().getUser().getLastName();
        this.patientDocumentType = treatment.getPatient().getUser().getDocument().getDocumentType().name();
        this.patientDocumentNumber = treatment.getPatient().getUser().getDocument().getDocumentNumber();
        this.patientPathologies = treatment.getPatient().getPathologies();
    }

}

package io.justina.server.dtos.response;


import io.justina.server.entities.Treatment;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

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
    private String doseSize;
    private String doseFrequency;
    private String Indications;
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
        this.medicalPrescriptionId = treatment.getMedicalPrescription().getId();
        this.doseSize = treatment.getMedicalPrescription().getDoseSize();
        this.doseFrequency = treatment.getMedicalPrescription().getDoseFrequency();
        this.Indications = treatment.getMedicalPrescription().getIndications();
        this.patientId = treatment.getPatient().getPatientId();
        this.patientFirstName = treatment.getPatient().getUser().getFirstName();
        this.patientLastName = treatment.getPatient().getUser().getLastName();
        this.patientDocumentType = treatment.getPatient().getUser().getDocument().getDocumentType().name();
        this.patientDocumentNumber = treatment.getPatient().getUser().getDocument().getDocumentNumber();
        this.patientPathologies = treatment.getPatient().getPathologies();
    }

}

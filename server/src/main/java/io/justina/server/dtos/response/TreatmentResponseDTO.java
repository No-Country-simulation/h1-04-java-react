package io.justina.server.dtos.response;


import io.justina.server.entities.Patient;
import io.justina.server.entities.Treatment;
import io.justina.server.entities.MedicalPrescription;
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
    private List<Long> medicalPrescriptionId;
    private List<String> doseSizes;
    private List<String> doseFrequencies;
    private List<String> Indications;
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

        this.medicalPrescriptionId = treatment.getMedicalPrescriptions().stream()
                .map(MedicalPrescription::getMedicalPrescriptionId)
                .collect(Collectors.toList());
        this.doseSizes = treatment.getMedicalPrescriptions().stream()
                .map(MedicalPrescription::getDoseSize)
                .collect(Collectors.toList());
        this.doseFrequencies = treatment.getMedicalPrescriptions().stream()
                .map(MedicalPrescription::getDoseFrequency)
                .collect(Collectors.toList());
        this.Indications = treatment.getMedicalPrescriptions().stream()
                .map(MedicalPrescription::getIndications)
                .collect(Collectors.toList());

        Patient patient = treatment.getPatient();
        if (patient != null) {
            this.patientId = patient.getPatientId();
            this.patientFirstName = patient.getUser().getFirstName();
            this.patientLastName = patient.getUser().getLastName();
            this.patientDocumentType = patient.getUser().getDocument().getDocumentType().name();
            this.patientDocumentNumber = patient.getUser().getDocument().getDocumentNumber();
            this.patientPathologies = patient.getPathologies();
        }
    }

}

package io.justina.server.dtos.response;

import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
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
public class MedicalPrescriptionResponseDTO {

    private Long medicalPrescriptionId;
    private String doseSize;
    private String doseFrequency;
    private String indications;
    private LocalDate startDate;
    private Long medicationId;
    private String medicationName;
    private Boolean medicationActive;
    private Long treatmentId;
    private String treatmentName;
    private String patientFirstName;
    private String patientLastName;
    private String patientDocumentType;
    private String patientDocumentNumber;
    private List<String> patientPathologies;

    public MedicalPrescriptionResponseDTO(MedicalPrescription medicalPrescription) {
        this.medicalPrescriptionId = medicalPrescription.getMedicalPrescriptionId();
        this.doseSize = medicalPrescription.getDoseSize();
        this.doseFrequency = medicalPrescription.getDoseFrequency();
        this.indications = medicalPrescription.getIndications();
        this.startDate = medicalPrescription.getStartDate();
        Medication medication = medicalPrescription.getMedication();
        this.medicationId = medication.getMedicationId();
        this.medicationName = medication.getMedicationName();
        this.medicationActive = medication.getActive();
        Treatment treatment = medicalPrescription.getTreatment();
        this.treatmentId = treatment.getTreatmentId();
        this.treatmentName = treatment.getTreatmentName();
        this.patientFirstName = treatment.getPatient().getUser().getFirstName();
        this.patientLastName = treatment.getPatient().getUser().getLastName();
        this.patientDocumentType = treatment.getPatient().getUser().getDocument().getDocumentType().name();
        this.patientDocumentNumber = treatment.getPatient().getUser().getDocument().getDocumentNumber();
        this.patientPathologies = treatment.getPatient().getPathologies();
    }


}

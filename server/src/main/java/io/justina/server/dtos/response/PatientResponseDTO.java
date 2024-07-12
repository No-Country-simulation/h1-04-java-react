package io.justina.server.dtos.response;


import io.justina.server.entities.Patient;
import io.justina.server.enumerations.BloodType;
import io.justina.server.enumerations.CivilStatus;
import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientResponseDTO {

    private Long patientId;
    private List<String> medicalHistory;
    private List<String> pathologies;
    private List<String> treatments;
    private List<String> medications;
    private String healthInsurance;
    private String affiliateNumber;
    private Boolean transplanted;
    private BloodType bloodType;
    private CivilStatus civilStatus;
    private Integer children;
    private String crossTransplant;

    public PatientResponseDTO(Patient patient) {
        this.patientId = patient.getPatientId();
        this.medicalHistory = patient.getMedicalHistory();
        this.pathologies = patient.getPathologies();
        this.treatments = patient.getTreatments();
        this.medications = patient.getMedications();
        this.healthInsurance = patient.getHealthInsurance();
        this.affiliateNumber = patient.getAffiliateNumber();
        this.transplanted = patient.getTransplanted();
        this.bloodType = patient.getBloodType();
        this.civilStatus = patient.getCivilStatus();
        this.children = patient.getChildren();
        this.crossTransplant = patient.getCrossTransplant();
    }
}

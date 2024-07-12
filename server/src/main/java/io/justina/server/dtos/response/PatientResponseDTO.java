package io.justina.server.dtos.response;


import io.justina.server.entities.Address;
import io.justina.server.entities.Document;
import io.justina.server.entities.Patient;
import io.justina.server.enumerations.BloodType;
import io.justina.server.enumerations.CivilStatus;
import io.justina.server.enumerations.Institution;
import io.justina.server.enumerations.Role;
import lombok.*;

import java.time.LocalDate;
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
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private Institution institutionName;
    private Role role;
    private Boolean isActive;
    private LocalDate deletedAt;
    private Document document;
    private Address address;

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
        this.firstName = patient.getFirstName();
        this.lastName = patient.getLastName();
        this.email = patient.getEmail();
        this.birthDate = patient.getBirthDate();
        this.phone = patient.getPhone();
        this.institutionName = patient.getInstitutionName();
        this.role = patient.getRole();
        this.isActive = patient.getIsActive();
        this.deletedAt = patient.getDeletedAt();
        this.document = patient.getDocument();
        this.address = patient.getAddress();
    }
}

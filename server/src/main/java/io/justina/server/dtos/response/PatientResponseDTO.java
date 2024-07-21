package io.justina.server.dtos.response;

import io.justina.server.entities.Financier;
import io.justina.server.entities.Patient;
import io.justina.server.entities.Treatment;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientResponseDTO {

    private Long patientId;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private String documentType;
    private String documentNumber;
    private String street;
    private String number;
    private String district;
    private String city;
    private String province;
    private String postalCode;
    private String institutionName;
    private Boolean transplanted;
    private String bloodType;
    private String civilStatus;
    private Integer children;
    private String crossTransplant;
    private List<String> medicalHistory;
    private List<String> pathologies;
    private String tutorFullName;
    private String tutorPhone;
    private byte[] file;
    private List<Treatment> treatments;
    private String financierName;
    private String cuit;
//    private Financier financier;



    public PatientResponseDTO(Patient patient) {
        this.patientId = patient.getPatientId();
        this.firstName = patient.getUser().getFirstName();
        this.lastName = patient.getUser().getLastName();
        this.email = patient.getUser().getEmail();
        this.birthDate = patient.getUser().getBirthDate();
        this.phone = patient.getUser().getPhone();
        this.documentType = patient.getUser().getDocument().getDocumentType().name();
        this.documentNumber = patient.getUser().getDocument().getDocumentNumber();
        this.street = patient.getUser().getAddress().getStreet();
        this.number = patient.getUser().getAddress().getNumber();
        this.district = patient.getUser().getAddress().getDistrict();
        this.city = patient.getUser().getAddress().getCity();
        this.province = patient.getUser().getAddress().getProvince();
        this.postalCode = patient.getUser().getAddress().getPostalCode();
        this.institutionName = patient.getUser().getInstitutionName().name();
        this.transplanted = patient.getTransplanted();
        this.bloodType = patient.getBloodType().name();
        this.civilStatus = patient.getCivilStatus().name();
        this.children = patient.getChildren();
        this.crossTransplant = patient.getCrossTransplant();
        this.medicalHistory = new ArrayList<>(patient.getMedicalHistory());
        this.pathologies = new ArrayList<>(patient.getPathologies());
        this.tutorFullName = patient.getTutorFullName();
        this.tutorPhone = patient.getTutorPhone();
        this.file = patient.getFile();
        this.treatments = new ArrayList<>(patient.getTreatments());
        this.financierName = patient.getFinancier().getName();
        this.cuit = patient.getFinancier().getCuit();
//        this.financier = patient.getFinancier();

    }

}

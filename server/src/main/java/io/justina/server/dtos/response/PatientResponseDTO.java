package io.justina.server.dtos.response;

import io.justina.server.entities.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientResponseDTO {

    private Long id;
    private List<String> medicalHistory;
    private List<String> pathologies;
    private Boolean transplanted;
    private String bloodType;
    private String civilStatus;
    private Integer children;
    private String financierName;
    private String crossTransplant;
    private String tutorFullName;
    private String tutorPhone;
    private List<Treatment> treatments;
    private List<Appointment> appointments;
    private UserResponseDTO user;

    public PatientResponseDTO(Patient patient) {
        this.id = patient.getId();
        this.medicalHistory = patient.getMedicalHistory() != null ? new ArrayList<>(patient.getMedicalHistory()) : new ArrayList<>();
        this.pathologies = patient.getPathologies() != null ? new ArrayList<>(patient.getPathologies()) : new ArrayList<>();
        this.transplanted = patient.getTransplanted();
        this.bloodType = patient.getBloodType() != null ? patient.getBloodType().name() : null;
        this.civilStatus = patient.getCivilStatus() != null ? patient.getCivilStatus().name() : null;
        this.children = patient.getChildren();
        this.financierName = patient.getFinancier() != null ? patient.getFinancier().getName() : null;
        this.crossTransplant = patient.getCrossTransplant();
        this.tutorFullName = patient.getTutorFullName();
        this.tutorPhone = patient.getTutorPhone();
        this.treatments = patient.getTreatments() != null ? new ArrayList<>(patient.getTreatments()) : new ArrayList<>();
        this.appointments = patient.getAppointments() != null ? new ArrayList<>(patient.getAppointments()) : new ArrayList<>();
        this.user = new UserResponseDTO(patient.getUser());
    }

}
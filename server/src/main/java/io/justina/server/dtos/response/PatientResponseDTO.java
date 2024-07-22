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
    private String crossTransplant;
    private String tutorFullName;
    private String tutorPhone;
    private byte[] file;
    private List<Treatment> treatments;
    private List<Appointment> appointments;
    private User user;
    private Financier financier;

    public PatientResponseDTO(Patient patient) {
        this.id = patient.getId();
        this.medicalHistory = new ArrayList<>(patient.getMedicalHistory());
        this.pathologies = new ArrayList<>(patient.getPathologies());
        this.transplanted = patient.getTransplanted();
        this.bloodType = patient.getBloodType().name();
        this.civilStatus = patient.getCivilStatus().name();
        this.children = patient.getChildren();
        this.crossTransplant = patient.getCrossTransplant();
        this.tutorFullName = patient.getTutorFullName();
        this.tutorPhone = patient.getTutorPhone();
        this.file = patient.getFile();
        this.treatments = new ArrayList<>(patient.getTreatments());
        this.appointments = new ArrayList<>(patient.getAppointments());
        this.user = patient.getUser();
        this.financier = patient.getFinancier();
    }

}

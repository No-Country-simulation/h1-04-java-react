package io.justina.server.entities;

import io.justina.server.enumerations.*;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;
import java.util.Set;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id")
    private Long patientId;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ElementCollection
    @CollectionTable(name = "patient_medical_history", joinColumns = @JoinColumn(name = "patient_id"))
    @Column(name = "medical_history", columnDefinition = "TEXT")
    private List<String> medicalHistory;

    @ElementCollection
    @CollectionTable(name = "patient_pathologies", joinColumns = @JoinColumn(name = "patient_id"))
    @Column(name = "pathologies", columnDefinition = "TEXT")
    private List<String> pathologies;

    @Column(name = "transplanted")
    private Boolean transplanted;

    @Enumerated(EnumType.STRING)
    @Column(name = "blood_type")
    private BloodType bloodType;

    @Enumerated(EnumType.STRING)
    @Column(name = "civil_status")
    private CivilStatus civilStatus;

    @Column(name = "children")
    private Integer children;

    @Column(name = "cross_transplant", length = 255)
    private String crossTransplant;

    @Column(name = "tutor_full_name", length = 150)
    private String tutorFullName;

    @Column(name = "tutor_phone", length = 100)
    private String tutorPhone;

    @Lob
    @Column(name = "file", columnDefinition = "BLOB")
    private byte[] file;


}

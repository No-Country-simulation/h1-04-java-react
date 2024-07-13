package io.justina.server.entities;


import io.justina.server.enumerations.*;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    @Column(name = "medical_history", columnDefinition = "TEXT")
    @CollectionTable(name = "patient_medical_history", joinColumns = @JoinColumn(name = "patient_id"))
    @ElementCollection
    private List<String> medicalHistory;

    @Column(name = "pathologies", columnDefinition = "TEXT")
    @CollectionTable(name = "patient_pathologies", joinColumns = @JoinColumn(name = "patient_id"))
    @ElementCollection
    private List<String> pathologies;

    @Column(name = "treatments", columnDefinition = "TEXT")
    @CollectionTable(name = "patient_treatments", joinColumns = @JoinColumn(name = "patient_id"))
    @ElementCollection
    private List<String> treatments;

    @Column(name = "medications", columnDefinition = "TEXT")
    @CollectionTable(name = "patient_medications", joinColumns = @JoinColumn(name = "patient_id"))
    @ElementCollection
    private List<String> medications;

    @Column(name = "health_insurance", length = 100)
    private String healthInsurance;

    @Column(name = "affiliate_number", length = 100)
    private String affiliateNumber;

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


}

package io.justina.server.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="medication")
public class MedicalPrescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medication_id")
    private Long medicalPrescriptionId;

    @Column(name = "medication_name", length = 100)
    private String medicationName;

    @Column(name = "dose_size", length = 100)
    private String doseSize;

    @Column(name = "dose_frequency", length = 100)
    private String doseFrequency;

    @Column(name = "indications", columnDefinition = "TEXT")
    private String indications;

    @ManyToMany(mappedBy = "medicationsList")
    private Set<Patient> patients;

}

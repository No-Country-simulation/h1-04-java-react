package io.justina.server.entities;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "treatment")
@EntityListeners(AuditingEntityListener.class)
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "treatment_id")
    private Long treatmentId;

    @ManyToOne
    @JoinColumn(name = "medical_prescription_id", nullable = false)
    private MedicalPrescription medicalPrescription;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @Column(name = "treatment_name", nullable = false)
    private String treatmentName;

    @Column(name = "indications", columnDefinition = "TEXT", nullable = false)
    private String indications;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

}

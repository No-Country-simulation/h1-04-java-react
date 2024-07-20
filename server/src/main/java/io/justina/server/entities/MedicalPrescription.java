package io.justina.server.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "medical_prescription")
@EntityListeners(AuditingEntityListener.class)
public class MedicalPrescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medication_id")
    private Long medicalPrescriptionId;

    @OneToOne
    @JoinColumn(name = "medication_id", referencedColumnName = "medication_id")
    private Medication medication;

    @ManyToOne
    @JoinColumn(name = "treatment_id", referencedColumnName = "treatment_id")
    private Treatment treatment;

    @Column(name = "medication_name", length = 100)
    private String medicationName;

    @Column(name = "dose_size", length = 50, nullable = false)
    private String doseSize;

    @Column(name = "dose_frequency", length = 100, nullable = false)
    private String doseFrequency;

    @Column(name = "indications", length = 255, nullable = false)
    private String indications;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

}

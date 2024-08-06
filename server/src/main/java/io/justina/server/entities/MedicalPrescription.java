package io.justina.server.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.LocalDate;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@EntityListeners(AuditingEntityListener.class)
public class MedicalPrescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(name = "date_prescription", nullable = false, updatable = false)
    private LocalDate datePrescription;

    @Column(name = "dose_size", length = 50, nullable = false)
    private String doseSize;

    @Column(name = "dose_frequency", length = 100, nullable = false)
    private String doseFrequency;

    @Column(name = "indications", length = 255, nullable = false)
    private String indications;

    private Boolean active;

    @ManyToOne
    @JoinColumn(name = "medication_id", referencedColumnName = "id", nullable = false)
    private Medication medication;

}

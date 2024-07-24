package io.justina.server.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.LocalDate;
import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "treatment_name", nullable = false)
    private String treatmentName;

    @Column(name = "indications", columnDefinition = "TEXT", nullable = false)
    private String indications;

    @CreatedDate
    @Column(name = "start_date", nullable = false, updatable = false)
    private LocalDate startDate;

    private Boolean active;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPrescription> medicalPrescriptions;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

}

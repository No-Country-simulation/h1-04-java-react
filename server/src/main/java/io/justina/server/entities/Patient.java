package io.justina.server.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.justina.server.enumerations.*;
import org.springframework.data.annotation.CreatedDate;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.LastModifiedDate;
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
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    private Integer children;

    @Column(name = "cross_transplant", length = 255)
    private String crossTransplant;

    @Column(name = "tutor_full_name", length = 150)
    private String tutorFullName;

    @Column(name = "tutor_phone", length = 100)
    private String tutorPhone;

    @ElementCollection
    @CollectionTable(name = "patient_files", joinColumns = @JoinColumn(name = "patient_id"))
    @Column(name = "file", columnDefinition = "BYTEA")
    private List<byte[]> files;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDate createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDate updatedAt;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Treatment> treatments;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Appointment> appointments;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "financier_id", referencedColumnName = "id", nullable = false)
    private Financier financier;

}

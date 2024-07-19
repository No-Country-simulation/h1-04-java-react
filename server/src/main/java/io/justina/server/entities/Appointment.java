package io.justina.server.entities;

import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Days;
import io.justina.server.enumerations.TypeOfAppointments;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.Set;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="appointment")
@EntityListeners(AuditingEntityListener.class)
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appoitment_id")
    private Long appointmentId;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @ElementCollection(targetClass = Days.class)
    @CollectionTable(name = "appointment_days", joinColumns = @JoinColumn(name = "appointment_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "days")
    private Set<Days> appointmentDays;

    @ElementCollection(targetClass = AvailableHours.class)
    @CollectionTable(name = "appointment_hours", joinColumns = @JoinColumn(name = "appointment_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "hours")
    private Set<AvailableHours> appointmentHours;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_of_appointments", nullable = false)
    private TypeOfAppointments typeOfAppointment;

    @Column(name = "appointment_description", length = 255)
    private String appointmentDescription;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

}

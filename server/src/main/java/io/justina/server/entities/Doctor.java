package io.justina.server.entities;


import io.justina.server.enumerations.*;
import jakarta.persistence.*;
import lombok.*;


import java.time.LocalDate;
import java.util.Set;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private Long doctorId;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ElementCollection(targetClass = Specialty.class)
    @CollectionTable(name = "doctor_specialties", joinColumns = @JoinColumn(name = "doctor_id"))
    @Column(name = "specialties")
    @Enumerated(EnumType.STRING)
    private Set<Specialty> specialties;

    @Column(name = "licence_number", length = 20)
    private String licenceNumber;

    @ElementCollection(targetClass = Workday.class)
    @CollectionTable(name = "doctor_workdays", joinColumns = @JoinColumn(name = "doctor_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "workdays")
    private Set<Workday> workdays;

    @ElementCollection(targetClass = Workday.class)
    @CollectionTable(name = "doctor_busy_days", joinColumns = @JoinColumn(name = "doctor_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "busy_days")
    private Set<BusyDays> busyDays;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "phone")
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(name = "institution_name")
    private Institution institutionName;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "deleted_at")
    private LocalDate deletedAt;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "document_id", referencedColumnName = "id")
    private Document document;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

}

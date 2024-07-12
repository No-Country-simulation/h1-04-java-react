package io.justina.server.dtos.response;


import io.justina.server.entities.Address;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Document;
import io.justina.server.enumerations.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DoctorResponseDTO {

    private Long doctorId;
    private String licenceNumber;
    private Set<Specialty> specialties;
    private Set<Workday> workdays;
    private Set<BusyDays> busyDays;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private Institution institutionName;
    private Role role;
    private Boolean isActive;
    private LocalDate deletedAt;
    private Document document;
    private Address address;

    public DoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getDoctorId();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.workdays = doctor.getWorkdays();
        this.busyDays = doctor.getBusyDays();
        this.firstName = doctor.getFirstName();
        this.lastName = doctor.getLastName();
        this.email = doctor.getEmail();
        this.birthDate = doctor.getBirthDate();
        this.phone = doctor.getPhone();
        this.institutionName = doctor.getInstitutionName();
        this.role = doctor.getRole();
        this.isActive = doctor.getIsActive();
        this.deletedAt = doctor.getDeletedAt();
        this.document = doctor.getDocument();
        this.address = doctor.getAddress();
    }

}

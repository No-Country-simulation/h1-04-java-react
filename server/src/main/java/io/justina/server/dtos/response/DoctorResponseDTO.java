package io.justina.server.dtos.response;

import io.justina.server.entities.Address;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Document;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.Day;
import lombok.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DoctorResponseDTO {

    private Long doctorId;
    private Set<Specialty> specialties;
    private String licenceNumber;
    private Set<Day> workdays;
    private List<AvailableHours> schedule;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private String financierName;
    private String institutionName;
    private Boolean isActive;
    private Document document;
    private Address address;
    private List<AppointmentResponseDTO> appointments;
    private Long userId;

    public DoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getId();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.workdays = doctor.getWorkdays();
        this.schedule = doctor.getSchedule() != null ? new ArrayList<>(doctor.getSchedule()) : null;
        this.userId = doctor.getUser().getId();
        this.firstName = doctor.getUser().getFirstName();
        this.lastName = doctor.getUser().getLastName();
        this.email = doctor.getUser().getEmail();
        this.birthDate = doctor.getUser().getBirthDate();
        this.phone = doctor.getUser().getPhone();
        this.financierName = doctor.getFinancier() != null ? doctor.getFinancier().getName() : null;
        this.institutionName = doctor.getUser().getInstitution() != null ? doctor.getUser().getInstitution().getName() : null;
        this.isActive = doctor.getUser().getIsActive();
        this.document = doctor.getUser().getDocument();
        this.address = doctor.getUser().getAddress();
        this.appointments = doctor.getAppointments() != null ? doctor.getAppointments().stream().map(AppointmentResponseDTO::new).collect(Collectors.toList()) : new ArrayList<>();
    }

}


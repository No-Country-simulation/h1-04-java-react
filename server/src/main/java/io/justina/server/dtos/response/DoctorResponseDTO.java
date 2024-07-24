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
    private String financierName;
    private Set<Day> workdays;
    private List<AvailableHours> schedule;
    private List<AppointmentResponseDTO> appointments;
    private UserResponseDTO user;

    public DoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getId();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.financierName = doctor.getFinancier() != null ? doctor.getFinancier().getName() : null;
        this.workdays = doctor.getWorkdays();
        this.schedule = doctor.getSchedule() != null ? new ArrayList<>(doctor.getSchedule()) : null;
        this.appointments = doctor.getAppointments() != null ? doctor.getAppointments().stream().map(AppointmentResponseDTO::new).collect(Collectors.toList()) : new ArrayList<>();
        this.user = new UserResponseDTO(doctor.getUser());
    }

}


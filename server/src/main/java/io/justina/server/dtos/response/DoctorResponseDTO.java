package io.justina.server.dtos.response;

import io.justina.server.entities.Appointment;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Financier;
import io.justina.server.entities.User;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.Days;
import lombok.*;
import java.util.List;
import java.util.Set;

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
    private Set<Days> workdays;
    private Set<AvailableHours> schedule;
    private List<Appointment> appointments;
    private User user;
    private Financier financier;

    public DoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getId();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.workdays = doctor.getWorkdays();
        this.schedule = doctor.getSchedule();
        this.appointments = doctor.getAppointments();
        this.user = doctor.getUser();
        this.financier = doctor.getFinancier();
    }

}

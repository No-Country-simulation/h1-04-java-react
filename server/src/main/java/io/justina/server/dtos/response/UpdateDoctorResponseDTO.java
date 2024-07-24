package io.justina.server.dtos.response;

import io.justina.server.entities.Doctor;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.Specialty;
import lombok.*;
import java.util.Set;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateDoctorResponseDTO {

    private Long doctorId;
    private Set<Specialty> specialties;
    private String licenceNumber;
    private Set<Day> workdays;
    private Set<AvailableHours> schedule;

    public UpdateDoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getId();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.workdays = doctor.getWorkdays();
        this.schedule = doctor.getSchedule();
    }

}

package io.justina.server.dtos.response;


import io.justina.server.entities.Doctor;
import io.justina.server.enumerations.BusyDays;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.Workday;
import lombok.*;

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

    public DoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getDoctorId();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.workdays = doctor.getWorkdays();
        this.busyDays = doctor.getBusyDays();
    }

}

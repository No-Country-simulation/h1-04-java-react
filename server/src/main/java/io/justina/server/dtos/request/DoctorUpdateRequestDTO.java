package io.justina.server.dtos.request;

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
public class DoctorUpdateRequestDTO {

    private Set<Specialty> specialties;
    private String licenceNumber;
    private Set<Day> workdays;
    private Set<AvailableHours> schedule;

}


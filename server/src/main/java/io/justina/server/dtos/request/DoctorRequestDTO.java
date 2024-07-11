package io.justina.server.dtos.request;


import io.justina.server.enumerations.BusyDays;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.Workday;
import jakarta.validation.constraints.*;
import lombok.*;


import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DoctorRequestDTO {

    @NotNull(message = "User ID is required.")
    private Long userId;

    @NotEmpty(message = "Specialty is required.")
    private Set<Specialty> specialties;

    @NotBlank(message = "Licence number is required.")
    @Size(max = 20, message = "Licence number must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Licence number should contain only letters and numbers.")
    private String licenceNumber;

    @NotEmpty(message = "Workdays are required.")
    private Set<Workday> workdays;

    @NotEmpty(message = "Busy Days are required.")
    private Set<BusyDays> busyDays;


}

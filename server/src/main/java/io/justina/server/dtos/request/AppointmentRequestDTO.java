package io.justina.server.dtos.request;

import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.TypeOfAppointment;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequestDTO {

    @NotNull(message = "Doctor ID is required.")
    private Long doctorId;

    @NotNull(message = "Patient ID is required.")
    private Long patientId;

    @NotNull(message = "Appointment day is required.")
    private Day appointmentDay;

    @NotNull(message = "Appointment hour is required.")
    private AvailableHours appointmentHour;

    @NotNull(message = "Type of appointment is required.")
    private TypeOfAppointment typeOfAppointment;

    @Size(max = 255, message = "Appointment description must not exceed 255 characters.")
    private String appointmentDescription;

}

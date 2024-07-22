package io.justina.server.dtos.request;

import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.TypeOfAppointment;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

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

    @NotEmpty(message = "Appointment days are required.")
    private Set<Day> appointmentDays;

    @NotEmpty(message = "Appointment hours are required.")
    private Set<AvailableHours> appointmentHours;

    @NotNull(message = "Type of appointment is required.")
    private TypeOfAppointment typeOfAppointment;

    @Size(max = 255, message = "Appointment description must not exceed 255 characters.")
    private String appointmentDescription;

    @NotBlank(message = "Doctor first name is required.")
    @Size(max = 50, message = "Doctor first name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Doctor first name should only contain letters and spaces.")
    private String doctorFirstName;

    @NotBlank(message = "Doctor last name is required.")
    @Size(max = 50, message = "Doctor last name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Doctor last name should only contain letters and spaces.")
    private String doctorLastName;

    @NotEmpty(message = "Doctor specialties are required.")
    private Set<Specialty> doctorSpecialties;

    @NotBlank(message = "Patient first name is required.")
    @Size(max = 50, message = "Patient first name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Patient first name should only contain letters and spaces.")
    private String patientFirstName;

    @NotBlank(message = "Patient last name is required.")
    @Size(max = 50, message = "Patient last name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Patient last name should only contain letters and spaces.")
    private String patientLastName;

    @NotBlank(message = "Patient email is required.")
    @Email(message = "Invalid patient email address.")
    @Size(max = 50, message = "Patient email must not exceed 50 characters.")
    @Pattern(regexp = ".+@.+\\.[a-zA-Z]{2,}", message = "Patient email should have a valid domain with at least two characters.")
    private String patientEmail;

    @Size(max = 15, message = "Patient phone must not exceed 15 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Patient phone number must contain only digits and optional leading +.")
    private String patientPhone;

    @NotNull(message = "Creation date is required.")
    private LocalDateTime createdAt;

    @NotNull(message = "Update date is required.")
    private LocalDateTime updatedAt;

}

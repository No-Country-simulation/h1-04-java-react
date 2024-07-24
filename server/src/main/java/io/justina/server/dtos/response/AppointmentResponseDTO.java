package io.justina.server.dtos.response;

import io.justina.server.entities.Appointment;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.TypeOfAppointment;
import lombok.*;
import java.time.LocalDate;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentResponseDTO {

    private Long appointmentId;
    private Long doctorId;
    private Long patientId;
    private Day appointmentDay;
    private AvailableHours appointmentHour;
    private TypeOfAppointment typeOfAppointment;
    private String appointmentDescription;
    private LocalDate createdAt;
    private LocalDate updatedAt;

    public AppointmentResponseDTO(Appointment appointment) {
        this.appointmentId = appointment.getId();
        this.doctorId = appointment.getDoctor().getId();
        this.patientId = appointment.getPatient().getId();
        this.appointmentDay = appointment.getAppointmentDay();
        this.appointmentHour = appointment.getAppointmentHour();
        this.typeOfAppointment = appointment.getTypeOfAppointment();
        this.appointmentDescription = appointment.getAppointmentDescription();
        this.createdAt = appointment.getCreatedAt();
        this.updatedAt = appointment.getUpdatedAt();
    }

}

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
    private String fullnameDoctor;
    private Long patientId;
    private String fullnamePatient;
    private Day appointmentDay;
    private AvailableHours appointmentHour;
    private TypeOfAppointment typeOfAppointment;
    private String appointmentDescription;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private Boolean isActive;

    public AppointmentResponseDTO(Appointment appointment) {
        this.appointmentId = appointment.getId();
        this.doctorId = appointment.getDoctor().getId();
        this.fullnameDoctor = appointment.getDoctor().getUser().getFirstName() + " " + appointment.getDoctor().getUser().getLastName();
        this.patientId = appointment.getPatient().getId();
        this.fullnamePatient = appointment.getPatient().getUser().getFirstName() + " " + appointment.getPatient().getUser().getLastName();
        this.appointmentDay = appointment.getAppointmentDay();
        this.appointmentHour = appointment.getAppointmentHour();
        this.typeOfAppointment = appointment.getTypeOfAppointment();
        this.appointmentDescription = appointment.getAppointmentDescription();
        this.createdAt = appointment.getCreatedAt();
        this.updatedAt = appointment.getUpdatedAt();
        this.isActive  = appointment.getIsActive();
    }

}

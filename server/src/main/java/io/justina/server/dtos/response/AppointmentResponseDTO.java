package io.justina.server.dtos.response;

import io.justina.server.entities.Appointment;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Days;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.TypeOfAppointments;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

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
    private Set<Days> appointmentDays;
    private Set<AvailableHours> appointmentHours;
    private TypeOfAppointments typeOfAppointment;
    private String appointmentDescription;
    private String doctorFirstName;
    private String doctorLastName;
    private Set<Specialty> doctorSpecialties;
    private String patientFirstName;
    private String patientLastName;
    private String patientEmail;
    private String patientPhone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public AppointmentResponseDTO(Appointment appointment) {
        this.appointmentId = appointment.getAppointmentId();
        this.doctorId = appointment.getDoctor().getDoctorId();
        this.patientId = appointment.getPatient().getId();
        this.appointmentDays = appointment.getAppointmentDays();
        this.appointmentHours = appointment.getAppointmentHours();
        this.typeOfAppointment = appointment.getTypeOfAppointment();
        this.appointmentDescription = appointment.getAppointmentDescription();
        this.doctorFirstName = appointment.getDoctor().getUser().getFirstName();
        this.doctorLastName = appointment.getDoctor().getUser().getLastName();
        this.doctorSpecialties = appointment.getDoctor().getSpecialties();
        this.patientFirstName = appointment.getPatient().getUser().getFirstName();
        this.patientLastName = appointment.getPatient().getUser().getLastName();
        this.patientEmail = appointment.getPatient().getUser().getEmail();
        this.patientPhone = appointment.getPatient().getUser().getPhone();
        this.createdAt = appointment.getCreatedAt();
        this.updatedAt = appointment.getUpdatedAt();
    }
}

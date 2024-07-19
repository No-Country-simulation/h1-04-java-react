package io.justina.server.services;

import io.justina.server.dtos.request.AppointmentRequestDTO;
import io.justina.server.dtos.response.AppointmentResponseDTO;

import java.util.List;

public interface AppointmentService {

    AppointmentResponseDTO createAppointment(AppointmentRequestDTO appointmentRequestDTO);
    AppointmentResponseDTO updateAppointment(Long appointmentId, AppointmentRequestDTO appointmentRequestDTO);
    void deleteAppointment(Long appointmentId);
    AppointmentResponseDTO getAppointmentById(Long appointmentId);
    List<AppointmentResponseDTO> getAppointmentsByDoctorId(Long doctorId);
    List<AppointmentResponseDTO> getAppointmentsByPatientId(Long patientId);

}

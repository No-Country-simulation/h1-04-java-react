package io.justina.server.controllers;


import io.justina.server.dtos.request.AppointmentRequestDTO;
import io.justina.server.dtos.response.AppointmentResponseDTO;
import io.justina.server.services.AppointmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("v1/api/appointments")
@Tag(name = "Appointment", description = "Endpoints to manage appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create")
    @Operation(summary = "Create a new appointment", description = "Creates a new appointment in the system")
    public ResponseEntity<AppointmentResponseDTO> createAppointment(@Valid @RequestBody AppointmentRequestDTO appointmentRequestDTO) {
        AppointmentResponseDTO createdAppointment = appointmentService.createAppointment(appointmentRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAppointment);
    }

    @PutMapping("/update")
    @Operation(summary = "Update an appointment", description = "Update information of an existing appointment by ID")
    public ResponseEntity<AppointmentResponseDTO> updateAppointment(@RequestParam Long appointmentId, @Valid @RequestBody AppointmentRequestDTO appointmentRequestDTO) {
        AppointmentResponseDTO updatedAppointment = appointmentService.updateAppointment(appointmentId, appointmentRequestDTO);
        return ResponseEntity.ok(updatedAppointment);
    }

    @DeleteMapping("/delete")
    @Operation(summary = "Delete an appointment", description = "Delete an appointment from the system by ID")
    public ResponseEntity<Void> deleteAppointment(@RequestParam Long appointmentId) {
        appointmentService.deleteAppointment(appointmentId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getById")
    @Operation(summary = "Get appointment by ID", description = "Retrieve detailed information about an appointment by its ID")
    public ResponseEntity<AppointmentResponseDTO> getAppointmentById(@RequestParam Long appointmentId) {
        AppointmentResponseDTO appointment = appointmentService.getAppointmentById(appointmentId);
        return ResponseEntity.ok(appointment);
    }

    @GetMapping("/getByDoctorId")
    @Operation(summary = "Get appointments by doctor ID", description = "Retrieve a list of all appointments for a specific doctor by their ID")
    public ResponseEntity<List<AppointmentResponseDTO>> getAppointmentsByDoctorId(@RequestParam Long doctorId) {
        List<AppointmentResponseDTO> appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/getByPatientId")
    @Operation(summary = "Get appointments by patient ID", description = "Retrieve a list of all appointments for a specific patient by their ID")
    public ResponseEntity<List<AppointmentResponseDTO>> getAppointmentsByPatientId(@RequestParam Long patientId) {
        List<AppointmentResponseDTO> appointments = appointmentService.getAppointmentsByPatientId(patientId);
        return ResponseEntity.ok(appointments);
    }
}

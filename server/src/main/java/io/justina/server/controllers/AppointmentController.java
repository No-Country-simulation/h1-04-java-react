package io.justina.server.controllers;

import io.justina.server.dtos.request.AppointmentRequestDTO;
import io.justina.server.dtos.response.AppointmentResponseDTO;
import io.justina.server.exceptions.ConflictException;
import io.justina.server.exceptions.DoctorNotAvailableException;
import io.justina.server.exceptions.PatientNotAvailableException;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.services.AppointmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("v1/api/appointments")
@Tag(name = "Appointment", description = "Endpoints to manage appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/createAppointment")
    @Operation(summary = "Create a new appointment", description = "Creates a new appointment in the system")
    public ResponseEntity<Map<String, String>> createAppointment(@Valid @RequestBody AppointmentRequestDTO appointmentRequestDTO) {
        Map<String, String> response = new HashMap<>();
        try {
            AppointmentResponseDTO createdAppointment = appointmentService.createAppointment(appointmentRequestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(Collections.singletonMap("message", "Appointment created successfully"));
        } catch (ResourceNotFoundException e) {
            response.put("message", "Doctor or Patient not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (DoctorNotAvailableException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } catch (PatientNotAvailableException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateAppointment/{appointmentId}")
    @Operation(summary = "Update an appointment", description = "Update information of an existing appointment by ID")
    public ResponseEntity<AppointmentResponseDTO> updateAppointment(@PathVariable Long appointmentId, @Valid @RequestBody AppointmentRequestDTO appointmentRequestDTO) {
        try {
            AppointmentResponseDTO updatedAppointment = appointmentService.updateAppointment(appointmentId, appointmentRequestDTO);
            return ResponseEntity.ok(updatedAppointment);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/deactivateAppointment/{appointmentId}")
    @Operation(summary = "Deactivate an appointment", description = "Deactivate an appointment from the system by ID")
    public ResponseEntity<Map<String, Object>> deactivateAppointment(@PathVariable Long appointmentId) {
        Map<String, Object> response = new HashMap<>();
        try {
            appointmentService.deactivateAppointment(appointmentId);
            response.put("message", "Appointment deactivated successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", "Appointment not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getAppointmentById/{appointmentId}")
    @Operation(summary = "Get appointment by ID", description = "Retrieve detailed information about an appointment by its ID")
    public ResponseEntity<AppointmentResponseDTO> getAppointmentById(@PathVariable Long appointmentId) {
        try {
            AppointmentResponseDTO appointment = appointmentService.getAppointmentById(appointmentId);
            return ResponseEntity.ok(appointment);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getByDoctorId/{doctorId}")
    @Operation(summary = "Get appointments by doctor ID", description = "Retrieve a list of all appointments for a specific doctor by their ID")
    public ResponseEntity<List<AppointmentResponseDTO>> getAppointmentsByDoctorId(@PathVariable Long doctorId) {
        try {
            List<AppointmentResponseDTO> appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
            return ResponseEntity.ok(appointments);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getByPatientId/{patientId}")
    @Operation(summary = "Get appointments by patient ID", description = "Retrieve a list of all appointments for a specific patient by their ID")
    public ResponseEntity<List<AppointmentResponseDTO>> getAppointmentsByPatientId(@PathVariable Long patientId) {
        try {
            List<AppointmentResponseDTO> appointments = appointmentService.getAppointmentsByPatientId(patientId);
            return ResponseEntity.ok(appointments);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getAll")
    @Operation(summary = "Get all appointments", description = "Retrieve a list of all appointments")
    public ResponseEntity<List<AppointmentResponseDTO>> getAllAppointments() {
        try {
            List<AppointmentResponseDTO> appointments = appointmentService.getAllAppointments();
            return ResponseEntity.ok(appointments);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}

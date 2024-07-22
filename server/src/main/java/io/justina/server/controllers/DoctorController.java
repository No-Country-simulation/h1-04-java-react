package io.justina.server.controllers;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.exceptions.DoctorNotFoundException;
import io.justina.server.services.DoctorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("v1/api/doctors")
@Tag(name = "Doctor", description = "Endpoints to manage doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/create")
    @Operation(summary = "Create a new doctor", description = "Creates a new doctor in the system")
    public ResponseEntity<Map<String, Object>> createDoctor(@Valid @RequestBody DoctorRequestDTO doctorRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            DoctorResponseDTO createdDoctor = doctorService.createDoctor(doctorRequestDTO);
            response.put("doctor", createdDoctor);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getDoctorById")
    @Operation(summary = "Get doctor by ID", description = "Retrieve detailed information about a doctor by their ID")
    public ResponseEntity<Map<String, Object>> getDoctorById(@RequestParam Long doctorId) {
        Map<String, Object> response = new HashMap<>();
        try {
            DoctorResponseDTO doctor = doctorService.getDoctorById(doctorId);
            response.put("doctor", doctor);
            return ResponseEntity.ok(response);
        } catch (DoctorNotFoundException e) {
            response.put("message", "Doctor not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getAllDoctors")
    @Operation(summary = "Get all doctors", description = "Retrieve a list of all doctors in the system")
    public ResponseEntity<Map<String, Object>> getAllDoctors() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<DoctorResponseDTO> doctors = doctorService.getAllDoctors();
            response.put("doctors", doctors);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateDoctor")
    @Operation(summary = "Update a doctor", description = "Update information of an existing doctor by ID")
    public ResponseEntity<Map<String, Object>> updateDoctor(@RequestParam Long doctorId, @Valid @RequestBody DoctorRequestDTO doctorRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            DoctorResponseDTO updatedDoctor = doctorService.updateDoctor(doctorId, doctorRequestDTO);
            response.put("doctor", updatedDoctor);
            return ResponseEntity.ok(response);
        } catch (DoctorNotFoundException e) {
            response.put("message", "Doctor not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deleteDoctor")
    @Operation(summary = "Delete a doctor", description = "Delete a doctor from the system by ID")
    public ResponseEntity<Map<String, Object>> deleteDoctor(@RequestParam Long doctorId) {
        Map<String, Object> response = new HashMap<>();
        try {
            DoctorResponseDTO deletedDoctor = doctorService.deleteDoctor(doctorId);
            response.put("doctor", deletedDoctor);
            return ResponseEntity.ok(response);
        } catch (DoctorNotFoundException e) {
            response.put("message", "Doctor not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deactivateDoctor")
    @Operation(summary = "Deactivate a doctor", description = "Deactivate a doctor from the system by ID")
    public ResponseEntity<Map<String, Object>> deactivateDoctor(@RequestParam Long doctorId) {
        Map<String, Object> response = new HashMap<>();
        try {
            doctorService.deactivateDoctor(doctorId);
            response.put("message", "Doctor deactivated successfully");
            return ResponseEntity.ok(response);
        } catch (DoctorNotFoundException e) {
            response.put("message", "Doctor not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}

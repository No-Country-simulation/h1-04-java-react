package io.justina.server.controllers;

import io.justina.server.dtos.request.PatientRequestDTO;
import io.justina.server.dtos.response.PatientResponseDTO;
import io.justina.server.exceptions.PatientNotFoundException;
import io.justina.server.services.PatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/patients")
@Tag(name = "Patient", description = "Endpoints to manage patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/create")
    @Operation(summary = "Create a new patient", description = "Creates a new patient in the system")
    public ResponseEntity<PatientResponseDTO> createPatient(@Valid @RequestBody PatientRequestDTO patientRequestDTO) {
        try {
            PatientResponseDTO createdPatient = patientService.createPatient(patientRequestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPatient);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getPatientById")
    @Operation(summary = "Get patient by ID", description = "Retrieve detailed information about a patient by their ID")
    public ResponseEntity<PatientResponseDTO> getPatientById(@RequestParam Long patientId) {
        try {
            PatientResponseDTO patient = patientService.getPatientById(patientId);
            return ResponseEntity.ok(patient);
        } catch (PatientNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/getAllPatients")
    @Operation(summary = "Get all patients", description = "Retrieve a list of all patients in the system")
    public ResponseEntity<List<PatientResponseDTO>> getAllPatients() {
        try {
            List<PatientResponseDTO> patients = patientService.getAllPatients();
            return ResponseEntity.ok(patients);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updatePatient")
    @Operation(summary = "Update a patient", description = "Update information of an existing patient by ID")
    public ResponseEntity<PatientResponseDTO> updatePatient(@RequestParam Long patientId, @Valid @RequestBody PatientRequestDTO patientRequestDTO) {
        try {
            PatientResponseDTO updatedPatient = patientService.updatePatient(patientId, patientRequestDTO);
            return ResponseEntity.ok(updatedPatient);
        } catch (PatientNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/deletePatient")
    @Operation(summary = "Delete a patient", description = "Delete a patient from the system by ID")
    public ResponseEntity<PatientResponseDTO> deletePatient(@RequestParam Long patientId) {
        try {
            PatientResponseDTO response = patientService.deletePatient(patientId);
            return ResponseEntity.ok(response);
        } catch (PatientNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/deactivatePatient")
    @Operation(summary = "Deactivate a patient", description = "Deactivate a patient from the system by ID")
    public ResponseEntity<String> deactivatePatient(@RequestParam Long patientId) {
        try {
            patientService.deactivatePatient(patientId);
            return ResponseEntity.ok("Patient deactivated successfully");
        } catch (PatientNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}

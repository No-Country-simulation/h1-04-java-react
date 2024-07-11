package io.justina.server.controllers;


import io.justina.server.dtos.request.PatientRequestDTO;
import io.justina.server.dtos.response.PatientResponseDTO;
import io.justina.server.entities.User;
import io.justina.server.services.PatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/patients")
@Tag(name = "Patient", description = "Endpoints to manage patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/create")
    @Operation(summary = "Create a new patient", description = "Creates a new patient in the system")
    public ResponseEntity<PatientResponseDTO> createPatient(@Valid @RequestBody PatientRequestDTO patientRequestDTO) {
        PatientResponseDTO createdPatient = patientService.createPatient(patientRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPatient);
    }


    @GetMapping("/getPatientById")
    @Operation(summary = "Get patient by ID", description = "Retrieve detailed information about a patient by their ID")
    public ResponseEntity<PatientResponseDTO> getPatientById(@RequestParam Long patientId) {
        PatientResponseDTO patient = patientService.getPatientById(patientId);
        return ResponseEntity.ok(patient);
    }

    @GetMapping("/getAllPatients")
    @Operation(summary = "Get all patients", description = "Retrieve a list of all patients in the system")
    public ResponseEntity<List<PatientResponseDTO>> getAllPatients() {
        List<PatientResponseDTO> patients = patientService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    @PutMapping("/updatePatient")
    @Operation(summary = "Update a patient", description = "Update information of an existing patient by ID")
    public ResponseEntity<PatientResponseDTO> updatePatient(@RequestParam Long patientId, @Valid @RequestBody PatientRequestDTO patientRequestDTO) {
        PatientResponseDTO updatedPatient = patientService.updatePatient(patientId, patientRequestDTO);
        return ResponseEntity.ok(updatedPatient);
    }

    @DeleteMapping("/deletePatient")
    @Operation(summary = "Delete a patient", description = "Delete a patient from the system by ID")
    public ResponseEntity<Void> deletePatient(@RequestParam Long patientId) {
        patientService.deletePatient(patientId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/deactivatePatient")
    @Operation(summary = "Deactivate a patient", description = "Deactivate a patient from the system by ID")
    public ResponseEntity<PatientResponseDTO> deactivatePatient(@RequestParam Long patientId) {
        PatientResponseDTO deactivatedPatient = patientService.deactivatePatient(patientId);
        return ResponseEntity.ok(deactivatedPatient);
    }

    @GetMapping("/view")
    @Operation(summary = "View patient's own details", description = "View the details of the logged-in patient")
    public ResponseEntity<PatientResponseDTO> viewPatient(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return ResponseEntity.ok(patientService.getPatientByUserId(user.getId()));
    }


}

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
import org.springframework.web.multipart.MultipartFile;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("v1/api/patients")
@Tag(name = "Patient", description = "Endpoints to manage patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/create")
    @Operation(summary = "Create a new patient", description = "Creates a new patient in the system")
    public ResponseEntity<Map<String, Object>> createPatient(@Valid @RequestBody PatientRequestDTO patientRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO createdPatient = patientService.createPatient(patientRequestDTO);
            response.put("patient", createdPatient);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getPatientById")
    @Operation(summary = "Get patient by ID", description = "Retrieve detailed information about a patient by their ID")
    public ResponseEntity<Map<String, Object>> getPatientById(@RequestParam Long patientId) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO patient = patientService.getPatientById(patientId);
            response.put("patient", patient);
            return ResponseEntity.ok(response);
        } catch (PatientNotFoundException e) {
            response.put("message", "Patient not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getAllPatients")
    @Operation(summary = "Get all patients", description = "Retrieve a list of all patients in the system")
    public ResponseEntity<Map<String, Object>> getAllPatients() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<PatientResponseDTO> patients = patientService.getAllPatients();
            response.put("patients", patients);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updatePatient")
    @Operation(summary = "Update a patient", description = "Update information of an existing patient by ID")
    public ResponseEntity<Map<String, Object>> updatePatient(@RequestParam Long patientId, @Valid @RequestBody PatientRequestDTO patientRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO updatedPatient = patientService.updatePatient(patientId, patientRequestDTO);
            response.put("patient", updatedPatient);
            return ResponseEntity.ok(response);
        } catch (PatientNotFoundException e) {
            response.put("message", "Patient not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/uploadFile")
    @Operation(summary = "Upload a file for a patient", description = "Uploads a file for a specific patient by ID")
    public ResponseEntity<Map<String, Object>> uploadPatientFile(@RequestParam Long patientId, @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO updatedPatient = patientService.uploadPatientFile(patientId, file);
            response.put("patient", updatedPatient);
            return ResponseEntity.ok(response);
        } catch (PatientNotFoundException e) {
            response.put("message", "Patient not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deletePatient")
    @Operation(summary = "Delete a patient", description = "Delete a patient from the system by ID")
    public ResponseEntity<Map<String, Object>> deletePatient(@RequestParam Long patientId) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO responseDTO = patientService.deletePatient(patientId);
            response.put("patient", responseDTO);
            return ResponseEntity.ok(response);
        } catch (PatientNotFoundException e) {
            response.put("message", "Patient not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deactivatePatient")
    @Operation(summary = "Deactivate a patient", description = "Deactivate a patient from the system by ID")
    public ResponseEntity<Map<String, Object>> deactivatePatient(@RequestParam Long patientId) {
        Map<String, Object> response = new HashMap<>();
        try {
            patientService.deactivatePatient(patientId);
            response.put("message", "Patient deactivated successfully");
            return ResponseEntity.ok(response);
        } catch (PatientNotFoundException e) {
            response.put("message", "Patient not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
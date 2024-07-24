package io.justina.server.controllers;

import io.justina.server.dtos.request.*;
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
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getPatientById/{patientId}")
    @Operation(summary = "Get patient by ID", description = "Retrieve detailed information about a patient by their ID")
    public ResponseEntity<Map<String, Object>> getPatientById(@PathVariable Long patientId) {
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

    @PutMapping("/updatePatient/{patientId}")
    @Operation(summary = "Update a patient", description = "Update information of an existing patient by ID")
    public ResponseEntity<Map<String, Object>> updatePatient(@PathVariable Long patientId, @Valid @RequestBody PatientUpdateDTO patientUpdateDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO updatedPatient = patientService.updatePatient(patientId, patientUpdateDTO);
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

    @PostMapping("/uploadFile/{patientId}")
    @Operation(summary = "Upload a file for a patient", description = "Uploads a file for a specific patient by ID")
    public ResponseEntity<Map<String, Object>> uploadPatientFile(@PathVariable Long patientId, @RequestParam("file") MultipartFile file) {
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

    @PutMapping("/updateMedicalHistory/{patientId}")
    @Operation(summary = "Update medical history", description = "Update medical history of an existing patient by ID")
    public ResponseEntity<Map<String, Object>> updateMedicalHistory(@PathVariable Long patientId, @Valid @RequestBody MedicalHistoryUpdateDTO medicalHistoryUpdateDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO updatedPatient = patientService.updateMedicalHistory(patientId, medicalHistoryUpdateDTO);
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

    @PutMapping("/updatePathologies/{patientId}")
    @Operation(summary = "Update pathologies", description = "Update pathologies of an existing patient by ID")
    public ResponseEntity<Map<String, Object>> updatePathologies(@PathVariable Long patientId, @Valid @RequestBody PathologiesUpdateDTO pathologiesUpdateDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO updatedPatient = patientService.updatePathologies(patientId, pathologiesUpdateDTO);
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

    @PostMapping("/addTreatment/{patientId}")
    @Operation(summary = "Add treatment to patient", description = "Add a new treatment to an existing patient by ID")
    public ResponseEntity<Map<String, Object>> addTreatmentToPatient(@PathVariable Long patientId, @Valid @RequestBody TreatmentRequestDTO treatmentRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            PatientResponseDTO updatedPatient = patientService.addTreatmentToPatient(patientId, treatmentRequestDTO);
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

    @DeleteMapping("/deactivatePatient/{patientId}")
    @Operation(summary = "Deactivate a patient", description = "Deactivate a patient from the system by ID")
    public ResponseEntity<Map<String, Object>> deactivatePatient(@PathVariable Long patientId) {
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
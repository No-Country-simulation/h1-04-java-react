package io.justina.server.controllers;

import io.justina.server.dtos.request.AddMedicalPrescriptionRequestDTO;
import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;
import io.justina.server.exceptions.MedicalPrescriptionAlreadyAssignedException;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.exceptions.TreatmentNotFoundException;
import io.justina.server.services.TreatmentService;
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
@RequestMapping("v1/api/treatments")
@Tag(name = "Treatment", description = "Endpoints to manage treatments")
public class TreatmentController {

    @Autowired
    private TreatmentService treatmentService;

    @PostMapping("/createTreatment")
    @Operation(summary = "Create a treatment", description = "Creates a new treatment")
    public ResponseEntity<Map<String, Object>> createTreatment(@Valid @RequestBody TreatmentRequestDTO treatmentRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            TreatmentResponseDTO newTreatmentResponse = treatmentService.createTreatment(treatmentRequestDTO);
            response.put("treatment", newTreatmentResponse);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getTreatmentById/{treatmentId}")
    @Operation(summary = "Get treatment by ID", description = "Retrieve detailed information about a treatment by its ID")
    public ResponseEntity<Map<String, Object>> getTreatmentById(@PathVariable Long treatmentId) {
        Map<String, Object> response = new HashMap<>();
        try {
            TreatmentResponseDTO treatmentResponse = treatmentService.getTreatmentById(treatmentId);
            response.put("treatment", treatmentResponse);
            return ResponseEntity.ok(response);
        } catch (TreatmentNotFoundException e) {
            response.put("message", "Treatment not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getAllTreatments")
    @Operation(summary = "Get all treatments", description = "Retrieve a list of all treatments in the system")
    public ResponseEntity<Map<String, Object>> getAllTreatments() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<TreatmentResponseDTO> treatmentsResponse = treatmentService.getAllTreatments();
            response.put("treatments", treatmentsResponse);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateTreatment/{treatmentId}")
    @Operation(summary = "Update a treatment", description = "Update information of an existing treatment by ID")
    public ResponseEntity<Map<String, Object>> updateTreatment(@PathVariable Long treatmentId, @Valid @RequestBody TreatmentRequestDTO treatmentRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            TreatmentResponseDTO updatedTreatmentResponse = treatmentService.updateTreatment(treatmentId, treatmentRequestDTO);
            response.put("treatment", updatedTreatmentResponse);
            return ResponseEntity.ok(response);
        } catch (TreatmentNotFoundException e) {
            response.put("message", "Treatment not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/deactivateTreatment/{treatmentId}")
    @Operation(summary = "Deactivate a treatment", description = "Deactivate a treatment from the system by ID")
    public ResponseEntity<Map<String, Object>> deactivateTreatment(@PathVariable Long treatmentId) {
        Map<String, Object> response = new HashMap<>();
        try {
            treatmentService.deactivateTreatment(treatmentId);
            response.put("message", "Treatment deactivated successfully");
            return ResponseEntity.ok(response);
        } catch (TreatmentNotFoundException e) {
            response.put("message", "Treatment not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/addMedicalPrescription/{treatmentId}")
    @Operation(summary = "Add a medical prescription to a treatment", description = "Associates an existing medical prescription to a treatment")
    public ResponseEntity<Map<String, Object>> addMedicalPrescriptionToTreatment(
            @PathVariable Long treatmentId,
            @Valid @RequestBody AddMedicalPrescriptionRequestDTO request) {
        Map<String, Object> response = new HashMap<>();
        try {
            TreatmentResponseDTO updatedTreatmentResponse = treatmentService.addMedicalPrescriptionToTreatment(treatmentId, request.getMedicalPrescriptionId());
            response.put("treatment", updatedTreatmentResponse);
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (MedicalPrescriptionAlreadyAssignedException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
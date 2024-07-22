package io.justina.server.controllers;

import io.justina.server.dtos.request.MedicationRequestDTO;
import io.justina.server.dtos.response.MedicationResponseDTO;
import io.justina.server.exceptions.MedicationNotFoundException;
import io.justina.server.services.MedicationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/medications")
@Tag(name = "Medication", description = "Endpoints to manage medications")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @PostMapping("/createMedication")
    @Operation(summary = "Create a medication", description = "Create a new medication in the system")
    public ResponseEntity<MedicationResponseDTO> createMedication(@Valid @RequestBody MedicationRequestDTO medicationRequestDTO) {
        try {
            MedicationResponseDTO newMedicationResponse = medicationService.createMedication(medicationRequestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(newMedicationResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getMedicationById/{id}")
    @Operation(summary = "Get medication by ID", description = "Retrieve detailed information about a medication by its ID")
    public ResponseEntity<MedicationResponseDTO> getMedicationById(@PathVariable Long id) {
        try {
            MedicationResponseDTO medicationResponse = medicationService.getMedicationById(id);
            return ResponseEntity.ok(medicationResponse);
        } catch (MedicationNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getAllMedications")
    @Operation(summary = "Get all medications", description = "Retrieve a list of all medications in the system")
    public ResponseEntity<List<MedicationResponseDTO>> getAllMedications() {
        try {
            List<MedicationResponseDTO> medicationsResponse = medicationService.getAllMedications();
            return ResponseEntity.ok(medicationsResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/updateMedication/{id}")
    @Operation(summary = "Update a medication", description = "Update information of an existing medication by ID")
    public ResponseEntity<MedicationResponseDTO> updateMedication(@PathVariable Long id, @Valid @RequestBody MedicationRequestDTO medicationRequestDTO) {
        try {
            MedicationResponseDTO updatedMedicationResponse = medicationService.updateMedication(id, medicationRequestDTO);
            return ResponseEntity.ok(updatedMedicationResponse);
        } catch (MedicationNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/deleteMedication/{id}")
    @Operation(summary = "Delete a medication", description = "Delete a medication from the system by ID")
    public ResponseEntity<String> deleteMedication(@PathVariable Long id) {
        try {
            medicationService.deleteMedication(id);
            return ResponseEntity.ok("Medication deleted successfully");
        } catch (MedicationNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medication not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred");
        }
    }

}

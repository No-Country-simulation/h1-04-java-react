package io.justina.server.controllers;

import io.justina.server.dtos.request.MedicationRequestDTO;
import io.justina.server.dtos.response.MedicationResponseDTO;
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
        MedicationResponseDTO newMedicationResponse = medicationService.createMedication(medicationRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMedicationResponse);
    }

    @GetMapping("/getMedicationById/{id}")
    @Operation(summary = "Get medication by ID", description = "Retrieve detailed information about a medication by its ID")
    public ResponseEntity<MedicationResponseDTO> getMedicationById(@PathVariable Long id) {
        MedicationResponseDTO medicationResponse = medicationService.getMedicationById(id);
        return ResponseEntity.ok(medicationResponse);
    }

    @GetMapping("/getAllMedications")
    @Operation(summary = "Get all medications", description = "Retrieve a list of all medications in the system")
    public ResponseEntity<List<MedicationResponseDTO>> getAllMedications() {
        List<MedicationResponseDTO> medicationsResponse = medicationService.getAllMedications();
        return ResponseEntity.ok(medicationsResponse);
    }

    @PutMapping("/updateMedication/{id}")
    @Operation(summary = "Update a medication", description = "Update information of an existing medication by ID")
    public ResponseEntity<MedicationResponseDTO> updateMedication(@PathVariable Long id, @Valid @RequestBody MedicationRequestDTO medicationRequestDTO) {
        MedicationResponseDTO updatedMedicationResponse = medicationService.updateMedication(id, medicationRequestDTO);
        return ResponseEntity.ok(updatedMedicationResponse);
    }

    @DeleteMapping("/deleteMedication/{id}")
    @Operation(summary = "Delete a medication", description = "Delete a medication from the system by ID")
    public ResponseEntity<String> deleteMedication(@PathVariable Long id) {
        medicationService.deleteMedication(id);
        return ResponseEntity.ok("Medication deleted successfully");
    }

}


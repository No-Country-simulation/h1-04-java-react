package io.justina.server.controllers;

import io.justina.server.dtos.request.MedicalPrescriptionRequestDTO;
import io.justina.server.dtos.response.MedicalPrescriptionResponseDTO;
import io.justina.server.exceptions.MedicalPrescriptionNotFoundException;
import io.justina.server.services.MedicalPrescriptionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/medical-prescriptions")
@Tag(name = "Medical Prescription", description = "Endpoints to manage medical prescriptions")
public class MedicalPrescriptionController {

    @Autowired
    private MedicalPrescriptionService medicalPrescriptionService;

    @PostMapping("/createMedicalPrescription")
    @Operation(summary = "Create a medical prescription", description = "Create a new medical prescription in the system")
    public ResponseEntity<MedicalPrescriptionResponseDTO> createMedicalPrescription(@RequestBody MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO) {
        try {
            MedicalPrescriptionResponseDTO newMedicalPrescriptionResponse = medicalPrescriptionService.createMedicalPrescription(medicalPrescriptionRequestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(newMedicalPrescriptionResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getMedicalPrescriptionById/{medicalPrescriptionId}")
    @Operation(summary = "Get medical prescription by ID", description = "Retrieve detailed information about a medical prescription by its ID")
    public ResponseEntity<MedicalPrescriptionResponseDTO> getMedicalPrescriptionById(@PathVariable Long medicalPrescriptionId) {
        try {
            MedicalPrescriptionResponseDTO medicalPrescriptionResponse = medicalPrescriptionService.getMedicalPrescriptionId(medicalPrescriptionId);
            return ResponseEntity.ok(medicalPrescriptionResponse);
        } catch (MedicalPrescriptionNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getAllMedicalPrescriptions")
    @Operation(summary = "Get all medical prescriptions", description = "Retrieve a list of all medical prescriptions in the system")
    public ResponseEntity<List<MedicalPrescriptionResponseDTO>> getAllMedicalPrescriptions() {
        try {
            List<MedicalPrescriptionResponseDTO> medicalPrescriptionsResponse = medicalPrescriptionService.getAllMedicalPrescriptions();
            return ResponseEntity.ok(medicalPrescriptionsResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/updateMedicalPrescription/{medicalPrescriptionId}")
    @Operation(summary = "Update a medical prescription", description = "Update information of an existing medical prescription by ID")
    public ResponseEntity<MedicalPrescriptionResponseDTO> updateMedicalPrescription(@PathVariable Long medicalPrescriptionId, @RequestBody MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO) {
        try {
            MedicalPrescriptionResponseDTO updatedMedicalPrescriptionResponse = medicalPrescriptionService.updateMedicalPrescription(medicalPrescriptionId, medicalPrescriptionRequestDTO);
            return ResponseEntity.ok(updatedMedicalPrescriptionResponse);
        } catch (MedicalPrescriptionNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/deactivateMedicalPrescription/{medicalPrescriptionId}")
    @Operation(summary = "Deactivate a medical prescription", description = "Deactivate a medical prescription from the system by ID")
    public ResponseEntity<String> deactivateMedicalPrescription(@PathVariable Long medicalPrescriptionId) {
        try {
            medicalPrescriptionService.deactivateMedicalPrescription(medicalPrescriptionId);
            return ResponseEntity.ok("Medical prescription deactivate successfully");
        } catch (MedicalPrescriptionNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medical prescription not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred");
        }
    }

}

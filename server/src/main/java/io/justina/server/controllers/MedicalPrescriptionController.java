package io.justina.server.controllers;

import io.justina.server.dtos.request.MedicalPrescriptionRequestDTO;
import io.justina.server.dtos.response.MedicalPrescriptionResponseDTO;
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
        MedicalPrescriptionResponseDTO newMedicalPrescriptionResponse = medicalPrescriptionService.createMedicalPrescription(medicalPrescriptionRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMedicalPrescriptionResponse);
    }

    @GetMapping("/getMedicalPrescriptionById/{medicalPrescriptionId}")
    @Operation(summary = "Get medical prescription by ID", description = "Retrieve detailed information about a medical prescription by its ID")
    public ResponseEntity<MedicalPrescriptionResponseDTO> getMedicalPrescriptionById(@PathVariable Long medicalPrescriptionId) {
        MedicalPrescriptionResponseDTO medicalPrescriptionResponse = medicalPrescriptionService.getMedicalPrescriptionId(medicalPrescriptionId);
        return ResponseEntity.ok(medicalPrescriptionResponse);
    }

    @GetMapping("/getAllMedicalPrescriptions")
    @Operation(summary = "Get all medical prescriptions", description = "Retrieve a list of all medical prescriptions in the system")
    public ResponseEntity<List<MedicalPrescriptionResponseDTO>> getAllMedicalPrescriptions() {
        List<MedicalPrescriptionResponseDTO> medicalPrescriptionsResponse = medicalPrescriptionService.getAllMedicalPrescriptions();
        return ResponseEntity.ok(medicalPrescriptionsResponse);
    }

    @PutMapping("/updateMedicalPrescription/{medicalPrescriptionId}")
    @Operation(summary = "Update a medical prescription", description = "Update information of an existing medical prescription by ID")
    public ResponseEntity<MedicalPrescriptionResponseDTO> updateMedicalPrescription(@PathVariable Long medicalPrescriptionId, @RequestBody MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO) {
        MedicalPrescriptionResponseDTO updatedMedicalPrescriptionResponse = medicalPrescriptionService.updateMedicalPrescription(medicalPrescriptionId, medicalPrescriptionRequestDTO);
        return ResponseEntity.ok(updatedMedicalPrescriptionResponse);
    }

    @DeleteMapping("/deleteMedicalPrescription/{medicalPrescriptionId}")
    @Operation(summary = "Delete a medical prescription", description = "Delete a medical prescription from the system by ID")
    public ResponseEntity<String> deleteMedicalPrescription(@PathVariable Long medicalPrescriptionId) {
        medicalPrescriptionService.deleteMedicalPrescription(medicalPrescriptionId);
        return ResponseEntity.ok("Medical prescription deleted successfully");
    }

}

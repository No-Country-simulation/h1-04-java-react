package io.justina.server.controllers;

import io.justina.server.dtos.request.AddMedicalPrescriptionToTreatmentDTO;
import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;
import io.justina.server.services.TreatmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/treatments")
@Tag(name = "Treatment", description = "Endpoints to manage treatments")
public class TreatmentController {

    @Autowired
    private TreatmentService treatmentService;

    @PostMapping("/add-prescription")
    @Operation(summary = "Add a medical prescription to a treatment", description = "Adds a medical prescription to an existing treatment")
    public ResponseEntity<Void> addMedicalPrescriptionToTreatment(@RequestBody @Valid AddMedicalPrescriptionToTreatmentDTO dto) {
        treatmentService.addMedicalPrescriptionToTreatment(dto);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/create-treatment")
    @Operation(summary = "Create a treatment", description = "Creates a new treatment")
    public ResponseEntity<TreatmentResponseDTO> createTreatment(@Valid @RequestBody TreatmentRequestDTO treatmentRequestDTO) {
        TreatmentResponseDTO newTreatmentResponse = treatmentService.createTreatment(treatmentRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTreatmentResponse);
    }

    @PutMapping("/update-treatment/{treatmentId}")
    @Operation(summary = "Update a treatment", description = "Update information of an existing treatment by ID")
    public ResponseEntity<TreatmentResponseDTO> updateTreatment(@PathVariable Long treatmentId, @Valid @RequestBody TreatmentRequestDTO treatmentRequestDTO) {
        TreatmentResponseDTO updatedTreatmentResponse = treatmentService.updateTreatment(treatmentId, treatmentRequestDTO);
        return ResponseEntity.ok(updatedTreatmentResponse);
    }

    @DeleteMapping("/delete-treatment/{treatmentId}")
    @Operation(summary = "Delete a treatment", description = "Delete a treatment from the system by ID")
    public ResponseEntity<String> deleteTreatment(@PathVariable Long treatmentId) {
        treatmentService.deleteTreatment(treatmentId);
        return ResponseEntity.ok("Treatment deleted successfully");
    }

    @GetMapping("/get-treatment-by-id/{treatmentId}")
    @Operation(summary = "Get treatment by ID", description = "Retrieve detailed information about a treatment by its ID")
    public ResponseEntity<TreatmentResponseDTO> getTreatmentById(@PathVariable Long treatmentId) {
        TreatmentResponseDTO treatmentResponse = treatmentService.getTreatmentById(treatmentId);
        return ResponseEntity.ok(treatmentResponse);
    }

    @GetMapping("/get-all-treatments")
    @Operation(summary = "Get all treatments", description = "Retrieve a list of all treatments in the system")
    public ResponseEntity<List<TreatmentResponseDTO>> getAllTreatments() {
        List<TreatmentResponseDTO> treatmentsResponse = treatmentService.getAllTreatments();
        return ResponseEntity.ok(treatmentsResponse);
    }

}
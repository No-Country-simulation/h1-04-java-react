package io.justina.server.controllers;

import io.justina.server.dtos.request.LaboratoryRequestDTO;
import io.justina.server.dtos.response.LaboratoryResponseDTO;
import io.justina.server.services.LaboratoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/laboratories")
@Tag(name = "Laboratory", description = "Endpoints to manage laboratories")
public class LaboratoryController {

    @Autowired
    private LaboratoryService laboratoryService;

    @PostMapping("/createLaboratory")
    @Operation(summary = "Create a laboratory", description = "Create a new laboratory in the system")
    public ResponseEntity<LaboratoryResponseDTO> createLaboratory(@RequestBody LaboratoryRequestDTO requestDTO) {
        LaboratoryResponseDTO newLaboratoryResponse = laboratoryService.createLaboratory(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newLaboratoryResponse);
    }

    @GetMapping("/getLaboratoryById/{id}")
    @Operation(summary = "Get laboratory by ID", description = "Retrieve detailed information about a laboratory by its ID")
    public ResponseEntity<LaboratoryResponseDTO> getLaboratoryById(@PathVariable Long id) {
        LaboratoryResponseDTO laboratoryResponse = laboratoryService.getLaboratoryById(id);
        return ResponseEntity.ok(laboratoryResponse);
    }

    @GetMapping("/getAllLaboratories")
    @Operation(summary = "Get all laboratories", description = "Retrieve a list of all laboratories in the system")
    public ResponseEntity<List<LaboratoryResponseDTO>> getAllLaboratories() {
        List<LaboratoryResponseDTO> laboratoriesResponse = laboratoryService.getAllLaboratories();
        return ResponseEntity.ok(laboratoriesResponse);
    }

    @PutMapping("/updateLaboratory/{id}")
    @Operation(summary = "Update a laboratory", description = "Update information of an existing laboratory by ID")
    public ResponseEntity<LaboratoryResponseDTO> updateLaboratory(@PathVariable Long id, @RequestBody LaboratoryRequestDTO requestDTO) {
        LaboratoryResponseDTO updatedLaboratoryResponse = laboratoryService.updateLaboratory(id, requestDTO);
        return ResponseEntity.ok(updatedLaboratoryResponse);
    }

    @DeleteMapping("/deleteLaboratory/{id}")
    @Operation(summary = "Delete a laboratory", description = "Delete a laboratory from the system by ID")
    public ResponseEntity<String> deleteLaboratory(@PathVariable Long id) {
        laboratoryService.deleteLaboratory(id);
        return ResponseEntity.ok("Laboratory deleted successfully");
    }

    @PutMapping("/deactivateLaboratory/{id}")
    @Operation(summary = "Deactivate a laboratory", description = "Deactivate a laboratory from the system by ID")
    public ResponseEntity<String> deactivateLaboratory(@PathVariable Long id) {
        laboratoryService.deactivateLaboratory(id);
        return ResponseEntity.ok("Laboratory deactivated successfully");
    }

}

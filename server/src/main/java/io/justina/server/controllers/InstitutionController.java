package io.justina.server.controllers;

import io.justina.server.dtos.request.InstitutionRequestDTO;
import io.justina.server.dtos.response.InstitutionResponseDTO;
import io.justina.server.services.InstitutionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/institutions")
@Tag(name = "Institution", description = "Endpoints to manage institutions")
public class InstitutionController {

    @Autowired
    private InstitutionService institutionService;

    @PostMapping("/createInstitution")
    @Operation(summary = "Create an institution", description = "Create a new institution in the system")
    public ResponseEntity<InstitutionResponseDTO> createInstitution(@Valid @RequestBody InstitutionRequestDTO requestDTO) {
        InstitutionResponseDTO newInstitutionResponse = institutionService.createInstitution(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newInstitutionResponse);
    }

    @GetMapping("/getInstitutionById/{id}")
    @Operation(summary = "Get institution by ID", description = "Retrieve detailed information about an institution by their ID")
    public ResponseEntity<InstitutionResponseDTO> getInstitution(@PathVariable Long id) {
        InstitutionResponseDTO institutionResponse = institutionService.getInstitutionById(id);
        return ResponseEntity.ok(institutionResponse);
    }

    @GetMapping("/getAllInstitutions")
    @Operation(summary = "Get all institutions", description = "Retrieve a list of all institutions in the system")
    public ResponseEntity<List<InstitutionResponseDTO>> getAllInstitutions() {
        List<InstitutionResponseDTO> institutionsResponse = institutionService.getAllInstitutions();
        return ResponseEntity.ok(institutionsResponse);
    }

    @PutMapping("/updateInstitution/{id}")
    @Operation(summary = "Update an institution", description = "Update information of an existing institution by ID")
    public ResponseEntity<InstitutionResponseDTO> updateInstitution(@PathVariable Long id,@Valid @RequestBody InstitutionRequestDTO requestDTO) {
        InstitutionResponseDTO updateInstitutionResponse = institutionService.updateInstitution(id, requestDTO);
        return ResponseEntity.ok(updateInstitutionResponse);
    }

    @DeleteMapping("/deleteInstitution/{id}")
    @Operation(summary = "Delete an institution", description = "Delete an institution from the system by ID")
    public ResponseEntity<String> deleteInstitution(@PathVariable Long id) {
        institutionService.deleteInstitution(id);
        return ResponseEntity.ok("Institution deleted successfully");
    }

    @PutMapping("/deactivateInstitution/{id}")
    @Operation(summary = "Deactivate an institution", description = "Deactivate an institution from the system by ID")
    public ResponseEntity<String> deactivateInstitution(@PathVariable Long id) {
        institutionService.deactivateInstitution(id);
        return ResponseEntity.ok("Institution deactivated successfully");
    }

}

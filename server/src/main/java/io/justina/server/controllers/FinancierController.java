package io.justina.server.controllers;

import io.justina.server.dtos.request.FinancierRequestDTO;
import io.justina.server.dtos.response.FinancierResponseDTO;
import io.justina.server.services.FinancierService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/financiers")
@Tag(name = "Financier", description = "Endpoints to manage financiers")
public class FinancierController {

    @Autowired
    private FinancierService financierService;

    @PostMapping("/createFinancier")
    @Operation(summary = "Create a financier", description = "Create a new financier in the system")
    public ResponseEntity<FinancierResponseDTO> createFinancier(@RequestBody FinancierRequestDTO requestDTO) {
        FinancierResponseDTO newFinancierResponse = financierService.createFinancier(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newFinancierResponse);
    }

    @GetMapping("/getFinancierById/{id}")
    @Operation(summary = "Get financier by ID", description = "Retrieve detailed information about a financier by their ID")
    public ResponseEntity<FinancierResponseDTO> getFinancier(@PathVariable Long id) {
        FinancierResponseDTO financierResponse = financierService.getFinancierById(id);
        return ResponseEntity.ok(financierResponse);
    }

    @GetMapping("/getAllFinanciers")
    @Operation(summary = "Get all financiers", description = "Retrieve a list of all financiers in the system")
    public ResponseEntity<List<FinancierResponseDTO>> getAllFinanciers() {
        List<FinancierResponseDTO> financiersResponse = financierService.getAllFinanciers();
        return ResponseEntity.ok(financiersResponse);
    }

    @PutMapping("/updateFinancier/{id}")
    @Operation(summary = "Update a financier", description = "Update information of an existing financier by ID")
    public ResponseEntity<FinancierResponseDTO> updateFinancier(@PathVariable Long id, @RequestBody FinancierRequestDTO requestDTO) {
        FinancierResponseDTO updateFinancierResponse = financierService.updateFinancier(id, requestDTO);
        return ResponseEntity.ok(updateFinancierResponse);
    }

    @DeleteMapping("/deleteFinancier/{id}")
    @Operation(summary = "Delete a financier", description = "Delete a financier from the system by ID")
    public ResponseEntity<String> deleteFinancier(@PathVariable Long id) {
        financierService.deleteFinancier(id);
        return ResponseEntity.ok("Financier deleted successfully");
    }

    @PutMapping("/deactivateFinancier/{id}")
    @Operation(summary = "Deactivate a financier", description = "Deactivate a financier from the system by ID")
    public ResponseEntity<String> deactivateFinancier(@PathVariable Long id) {
        financierService.deactivateFinancier(id);
        return ResponseEntity.ok("Financier deactivated successfully");
    }
    
}


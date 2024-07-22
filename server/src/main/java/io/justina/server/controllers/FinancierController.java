package io.justina.server.controllers;

import io.justina.server.dtos.request.FinancierRequestDTO;
import io.justina.server.dtos.response.FinancierResponseDTO;
import io.justina.server.exceptions.FinancierNotFoundException;
import io.justina.server.services.FinancierService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
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
    public ResponseEntity<FinancierResponseDTO> createFinancier(@Valid @RequestBody FinancierRequestDTO requestDTO) {
        try {
            FinancierResponseDTO newFinancierResponse = financierService.createFinancier(requestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(newFinancierResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getFinancierById/{id}")
    @Operation(summary = "Get financier by ID", description = "Retrieve detailed information about a financier by their ID")
    public ResponseEntity<FinancierResponseDTO> getFinancier(@PathVariable Long id) {
        try {
            FinancierResponseDTO financierResponse = financierService.getFinancierById(id);
            return ResponseEntity.ok(financierResponse);
        } catch (FinancierNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getAllFinanciers")
    @Operation(summary = "Get all financiers", description = "Retrieve a list of all financiers in the system")
    public ResponseEntity<List<FinancierResponseDTO>> getAllFinanciers() {
        try {
            List<FinancierResponseDTO> financiersResponse = financierService.getAllFinanciers();
            return ResponseEntity.ok(financiersResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updateFinancier/{id}")
    @Operation(summary = "Update a financier", description = "Update information of an existing financier by ID")
    public ResponseEntity<FinancierResponseDTO> updateFinancier(@PathVariable Long id, @Valid @RequestBody FinancierRequestDTO requestDTO) {
        try {
            FinancierResponseDTO updateFinancierResponse = financierService.updateFinancier(id, requestDTO);
            return ResponseEntity.ok(updateFinancierResponse);
        } catch (FinancierNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/deleteFinancier/{id}")
    @Operation(summary = "Delete a financier", description = "Delete a financier from the system by ID")
    public ResponseEntity<String> deleteFinancier(@PathVariable Long id) {
        try {
            financierService.deleteFinancier(id);
            return ResponseEntity.ok("Financier deleted successfully");
        } catch (FinancierNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/deactivateFinancier/{id}")
    @Operation(summary = "Deactivate a financier", description = "Deactivate a financier from the system by ID")
    public ResponseEntity<String> deactivateFinancier(@PathVariable Long id) {
        try {
            financierService.deactivateFinancier(id);
            return ResponseEntity.ok("Financier deactivated successfully");
        } catch (FinancierNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}


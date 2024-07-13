package io.justina.server.controllers;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.services.DoctorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/doctors")
@Tag(name = "Doctor", description = "Endpoints to manage doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/create")
    @Operation(summary = "Create a new doctor", description = "Creates a new doctor in the system")
    public ResponseEntity<DoctorResponseDTO> createDoctor(@Valid @RequestBody DoctorRequestDTO doctorRequestDTO) {
        DoctorResponseDTO createdDoctor = doctorService.createDoctor(doctorRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDoctor);
    }

    @GetMapping("/getDoctorById")
    @Operation(summary = "Get doctor by ID", description = "Retrieve detailed information about a doctor by their ID")
    public ResponseEntity<DoctorResponseDTO> getDoctorById(@RequestParam Long doctorId) {
        DoctorResponseDTO doctor = doctorService.getDoctorById(doctorId);
        return ResponseEntity.ok(doctor);
    }

    @GetMapping("/getAllDoctors")
    @Operation(summary = "Get all doctors", description = "Retrieve a list of all doctors in the system")
    public ResponseEntity<List<DoctorResponseDTO>> getAllDoctors() {
        List<DoctorResponseDTO> doctors = doctorService.getAllDoctors();
        return ResponseEntity.ok(doctors);
    }

    @PutMapping("/updateDoctor")
    @Operation(summary = "Update a doctor", description = "Update information of an existing doctor by ID")
    public ResponseEntity<DoctorResponseDTO> updateDoctor(@RequestParam Long doctorId, @Valid @RequestBody DoctorRequestDTO doctorRequestDTO) {
        DoctorResponseDTO updatedDoctor = doctorService.updateDoctor(doctorId, doctorRequestDTO);
        return ResponseEntity.ok(updatedDoctor);
    }

    @DeleteMapping("/deleteDoctor")
    @Operation(summary = "Delete a doctor", description = "Delete a doctor from the system by ID")
    public ResponseEntity<DoctorResponseDTO> deleteDoctor(@RequestParam Long doctorId) {
        DoctorResponseDTO deletedDoctor = doctorService.deleteDoctor(doctorId);
        return ResponseEntity.ok(deletedDoctor);
    }

    @PutMapping("/deactivateDoctor")
    @Operation(summary = "Deactivate a doctor", description = "Deactivate a doctor from the system by ID")
    public ResponseEntity<DoctorResponseDTO> deactivateDoctor(@RequestParam Long doctorId) {
        DoctorResponseDTO deactivatedDoctor = doctorService.deactivateDoctor(doctorId);
        return ResponseEntity.ok(deactivatedDoctor);
    }

}
